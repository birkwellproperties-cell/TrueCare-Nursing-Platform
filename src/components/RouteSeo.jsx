import {
  useEffect,
} from "react";

import {
  useLocation,
} from "react-router-dom";

const SITE_NAME = "TrueCare Nursing Services";
const SITE_URL = "https://true-care-nursing-platform.vercel.app";

const DEFAULT_METADATA = {
  title: "TrueCare Nursing Services | Healthcare Staffing",
  description:
    "TrueCare Nursing Services connects qualified healthcare professionals with facilities that need dependable, responsive clinical staffing support.",
};

const ROUTE_METADATA = {
  "/": DEFAULT_METADATA,

  "/jobs": {
    title: "Healthcare Jobs | TrueCare Nursing Services",
    description:
      "Explore nursing, healthcare, and professional opportunities available through TrueCare Nursing Services.",
  },

  "/professionals": {
    title: "Healthcare Professionals | TrueCare Nursing Services",
    description:
      "Discover flexible healthcare career opportunities, responsive support, and a people-first staffing experience with TrueCare Nursing Services.",
  },

  "/facilities": {
    title: "Healthcare Staffing Solutions | TrueCare Nursing Services",
    description:
      "Request dependable healthcare professionals and responsive staffing support for your facility through TrueCare Nursing Services.",
  },

  "/about": {
    title: "About TrueCare Nursing Services",
    description:
      "Learn about TrueCare Nursing Services, our values, and our commitment to compassionate, dependable healthcare staffing.",
  },

  "/resources": {
    title: "Healthcare Resources | TrueCare Nursing Services",
    description:
      "Access helpful information and resources for healthcare professionals and facility partners.",
  },

  "/contact": {
    title: "Contact TrueCare Nursing Services",
    description:
      "Contact TrueCare Nursing Services for healthcare staffing assistance, employment opportunities, and general support.",
  },
};

function getMetadata(pathname) {
  if (pathname.startsWith("/jobs/")) {
    return {
      title: "Healthcare Job Opportunity | TrueCare Nursing Services",
      description:
        "Review this healthcare job opportunity and learn how to apply through TrueCare Nursing Services.",
    };
  }

  if (pathname.startsWith("/apply/")) {
    return {
      title: "Apply for a Healthcare Position | TrueCare Nursing Services",
      description:
        "Submit your application for a healthcare opportunity with TrueCare Nursing Services.",
    };
  }

  return ROUTE_METADATA[pathname] ?? DEFAULT_METADATA;
}

function setMetaAttribute({
  selector,
  attribute,
  value,
}) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");

    const propertyMatch = selector.match(
      /^meta\[property="(.+)"\]$/,
    );

    const nameMatch = selector.match(
      /^meta\[name="(.+)"\]$/,
    );

    if (propertyMatch) {
      element.setAttribute("property", propertyMatch[1]);
    }

    if (nameMatch) {
      element.setAttribute("name", nameMatch[1]);
    }

    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

function setCanonicalUrl(url) {
  let canonical = document.head.querySelector(
    'link[rel="canonical"]',
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

export default function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const metadata = getMetadata(location.pathname);

    const normalizedPath =
      location.pathname === "/"
        ? ""
        : location.pathname.replace(/\/+$/, "");

    const canonicalUrl = `${SITE_URL}${normalizedPath}`;

    document.title = metadata.title;

    setMetaAttribute({
      selector: 'meta[name="description"]',
      attribute: "content",
      value: metadata.description,
    });

    setMetaAttribute({
      selector: 'meta[name="robots"]',
      attribute: "content",
      value: "index, follow",
    });

    setMetaAttribute({
      selector: 'meta[property="og:title"]',
      attribute: "content",
      value: metadata.title,
    });

    setMetaAttribute({
      selector: 'meta[property="og:description"]',
      attribute: "content",
      value: metadata.description,
    });

    setMetaAttribute({
      selector: 'meta[property="og:url"]',
      attribute: "content",
      value: canonicalUrl,
    });

    setMetaAttribute({
      selector: 'meta[property="og:type"]',
      attribute: "content",
      value: "website",
    });

    setMetaAttribute({
      selector: 'meta[property="og:site_name"]',
      attribute: "content",
      value: SITE_NAME,
    });

    setMetaAttribute({
      selector: 'meta[name="twitter:card"]',
      attribute: "content",
      value: "summary",
    });

    setMetaAttribute({
      selector: 'meta[name="twitter:title"]',
      attribute: "content",
      value: metadata.title,
    });

    setMetaAttribute({
      selector: 'meta[name="twitter:description"]',
      attribute: "content",
      value: metadata.description,
    });

    setCanonicalUrl(canonicalUrl);
  }, [location.pathname]);

  return null;
}
