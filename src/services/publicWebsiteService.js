import { jobs as fallbackJobs } from "../data/jobs";
import {
  isSupabaseConfigured,
  supabase,
} from "./supabase/client";

const RESUME_BUCKET = "candidate-resumes";
const MAX_RESUME_BYTES = 10 * 1024 * 1024;

const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function normalizeError(error, fallback) {
  return new Error(
    error?.message ||
      fallback,
  );
}

function mapJob(row) {
  return {
    id: row.slug,
    databaseId: row.id,
    title: row.title,
    location: row.location,
    region: row.region,
    type: row.employment_type,
    shift: row.shift,
    featured: row.featured,
    summary: row.summary,
    description: row.description,
    responsibilities:
      row.responsibilities ??
      [],
    requirements:
      row.requirements ??
      [],
  };
}

export async function listPublishedJobs() {
  if (!isSupabaseConfigured) {
    return fallbackJobs;
  }

  const {
    data,
    error,
  } = await supabase
    .from("jobs")
    .select(
      [
        "id",
        "slug",
        "title",
        "location",
        "region",
        "employment_type",
        "shift",
        "featured",
        "summary",
        "description",
        "responsibilities",
        "requirements",
      ].join(","),
    )
    .eq(
      "status",
      "published",
    )
    .order(
      "featured",
      {
        ascending: false,
      },
    )
    .order(
      "published_at",
      {
        ascending: false,
      },
    );

  if (error) {
    throw normalizeError(
      error,
      "Unable to load jobs.",
    );
  }

  return data.map(mapJob);
}

export async function getPublishedJob(slug) {
  if (!isSupabaseConfigured) {
    return (
      fallbackJobs.find(
        (job) =>
          job.id === slug,
      ) ??
      null
    );
  }

  const {
    data,
    error,
  } = await supabase
    .from("jobs")
    .select(
      [
        "id",
        "slug",
        "title",
        "location",
        "region",
        "employment_type",
        "shift",
        "featured",
        "summary",
        "description",
        "responsibilities",
        "requirements",
      ].join(","),
    )
    .eq(
      "slug",
      slug,
    )
    .eq(
      "status",
      "published",
    )
    .maybeSingle();

  if (error) {
    throw normalizeError(
      error,
      "Unable to load the job.",
    );
  }

  return data
    ? mapJob(data)
    : null;
}

function validateResume(file) {
  if (!file) {
    return;
  }

  if (
    file.size >
    MAX_RESUME_BYTES
  ) {
    throw new Error(
      "RÃ©sumÃ© must be 10 MB or smaller.",
    );
  }

  if (
    !ALLOWED_RESUME_TYPES.has(
      file.type,
    )
  ) {
    throw new Error(
      "RÃ©sumÃ© must be a PDF, DOC, or DOCX file.",
    );
  }
}

function safeFileName(name) {
  return name
    .toLowerCase()
    .replace(
      /[^a-z0-9._-]+/g,
      "-",
    )
    .replace(
      /-+/g,
      "-",
    );
}

async function uploadResume(
  file,
  applicationToken,
) {
  if (!file) {
    return null;
  }

  validateResume(file);

  const path =
    `${applicationToken}/` +
    `${crypto.randomUUID()}-` +
    safeFileName(file.name);

  const {
    error,
  } = await supabase.storage
    .from(RESUME_BUCKET)
    .upload(
      path,
      file,
      {
        cacheControl: "3600",
        upsert: false,
        contentType:
          file.type,
      },
    );

  if (error) {
    throw normalizeError(
      error,
      "Unable to upload rÃ©sumÃ©.",
    );
  }

  return path;
}

async function removeUploadedResume(
  resumePath,
) {
  if (!resumePath) {
    return;
  }

  const {
    error,
  } = await supabase.storage
    .from(RESUME_BUCKET)
    .remove([
      resumePath,
    ]);

  if (error) {
    console.error(
      "Unable to clean up uploaded rÃ©sumÃ©:",
      error,
    );
  }
}

export async function submitJobApplication({
  job,
  formData,
  resume,
}) {
  if (!isSupabaseConfigured) {
    await new Promise(
      (resolve) =>
        setTimeout(
          resolve,
          350,
        ),
    );

    return {
      id: "preview",
      preview: true,
    };
  }

  const applicationToken =
    crypto.randomUUID();

  let resumePath = null;

  try {
    resumePath =
      await uploadResume(
        resume,
        applicationToken,
      );

    const payload = {
      public_token:
        applicationToken,
      job_id:
        job.databaseId ??
        null,
      job_slug:
        job.id,
      job_title:
        job.title,
      first_name:
        formData.firstName
          .trim(),
      last_name:
        formData.lastName
          .trim(),
      email:
        formData.email
          .trim()
          .toLowerCase(),
      phone:
        formData.phone
          .trim(),
      city:
        formData.city
          .trim(),
      state:
        formData.state
          .trim()
          .toUpperCase(),
      professional_role:
        formData.professionalRole,
      employment_preference:
        formData.employmentPreference,
      license_number:
        formData.licenseNumber
          .trim(),
      experience_range:
        formData.experienceRange,
      preferred_shift:
        formData.preferredShift,
      availability_notes:
        formData.availability
          .trim(),
      resume_path:
        resumePath,
      consent_given:
        true,
      source:
        "website",
    };

    const {
      error,
    } = await supabase
      .from(
        "candidate_applications",
      )
      .insert(payload);

    if (error) {
      throw error;
    }

    return {
      submitted: true,
      publicToken:
        applicationToken,
    };
  } catch (error) {
    await removeUploadedResume(
      resumePath,
    );

    throw normalizeError(
      error,
      "Unable to submit application.",
    );
  }
}

export async function submitFacilityRequest(
  payload,
) {
  if (!isSupabaseConfigured) {
    await new Promise(
      (resolve) =>
        setTimeout(
          resolve,
          300,
        ),
    );

    return {
      id: "preview",
      preview: true,
    };
  }

  const {
    error,
  } = await supabase
    .from(
      "facility_staffing_requests",
    )
    .insert({
      ...payload,
      source: "website",
    });

  if (error) {
    throw normalizeError(
      error,
      "Unable to submit staffing request.",
    );
  }

  return {
    submitted: true,
  };
}

export async function submitContactInquiry(
  payload,
) {
  if (!isSupabaseConfigured) {
    await new Promise(
      (resolve) =>
        setTimeout(
          resolve,
          300,
        ),
    );

    return {
      id: "preview",
      preview: true,
    };
  }

  const {
    error,
  } = await supabase
    .from(
      "contact_inquiries",
    )
    .insert({
      ...payload,
      source: "website",
    });

  if (error) {
    throw normalizeError(
      error,
      "Unable to send message.",
    );
  }

  return {
    submitted: true,
  };
}

