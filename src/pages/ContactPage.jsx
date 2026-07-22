import { Mail, MapPin, Phone } from "lucide-react";

import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";
import { siteConfig } from "../config/site";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">Contact TrueCare</span>
          <h1>Letâ€™s talk about how we can help.</h1>
          <p>Reach our team for staffing, employment, resource, or general questions.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split split--form">
          <div>
            <SectionHeading
              eyebrow="Contact information"
              title="Connect with our Wichita office"
            />
            <div className="contact-stack">
              <a href={siteConfig.phoneHref}><Phone /> <span><strong>Call</strong>{siteConfig.phoneDisplay}</span></a>
              <a href={`mailto:${siteConfig.primaryEmail}`}><Mail /> <span><strong>Email</strong>{siteConfig.primaryEmail}</span></a>
              <div><MapPin /> <span><strong>Visit</strong>{siteConfig.addressLine1}<br />{siteConfig.addressLine2}</span></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

