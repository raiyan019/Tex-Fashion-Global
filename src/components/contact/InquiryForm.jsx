import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Field from "./Field.jsx";
import { submitInquiry } from "../../services/inquiries.js";
import { productGroups } from "../../data/products.js";
import { company } from "../../data/company.js";

const initialValues = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  quantity: "",
  category: "",
  message: "",
};

const categoryOptions = [...productGroups.map((group) => group.label), "Other"];

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (
    values.phone.trim() &&
    !/^\+?[\d\s().-]{6,20}$/.test(values.phone.trim())
  ) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please tell us a little more (at least 10 characters).";
  }

  return errors;
}

// Fallback used while no backend is connected: opens the visitor's email app
// with their details filled in, so nothing typed is lost.
function buildMailto(values) {
  const lines = [
    `Name: ${values.name}`,
    values.company ? `Company: ${values.company}` : null,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : null,
    values.country ? `Country: ${values.country}` : null,
    values.category ? `Product line: ${values.category}` : null,
    values.quantity ? `Approx. quantity: ${values.quantity}` : null,
  ].filter(Boolean);
  lines.push("", values.message);

  const subject = encodeURIComponent("Inquiry from website");
  const body = encodeURIComponent(lines.join("\n"));
  return `mailto:${company.email}?subject=${subject}&body=${body}`;
}

function InquiryForm() {
  const formRef = useRef(null);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  // 'idle' | 'submitting' | 'sent' | 'unavailable' | 'error'
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);

    // Once a field has an error, re-check it as the visitor fixes it.
    if (errors[name]) {
      const fieldError = validate(next)[name];
      setErrors((current) => ({ ...current, [name]: fieldError }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);

    const invalidFields = Object.keys(found);
    if (invalidFields.length > 0) {
      formRef.current.elements[invalidFields[0]]?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitInquiry(values);
      setStatus("sent");
    } catch (error) {
      setStatus(error.code === "NOT_CONFIGURED" ? "unavailable" : "error");
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
  };

  if (status === "sent") {
    return (
      <div role="status" className="border-t border-charcoal/20 pt-8">
        <h3 className="font-display text-3xl tracking-tight">
          Thank you. Your inquiry has been sent.
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-charcoal/75">
          We will reply to {values.email}.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 text-sm font-medium underline underline-offset-4 transition-colors hover:text-olive"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          required
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Field
          label="Company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={handleChange}
        />
        <Field
          label="Country"
          name="country"
          autoComplete="country-name"
          value={values.country}
          onChange={handleChange}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <Field
          label="Approx. quantity"
          name="quantity"
          placeholder="e.g. 5,000 pieces"
          value={values.quantity}
          onChange={handleChange}
        />
        <Field
          as="select"
          label="Product line"
          name="category"
          className="sm:col-span-2"
          value={values.category}
          onChange={handleChange}
        >
          <option value="">Select a product line</option>
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <Field
          as="textarea"
          label="Your requirements"
          name="message"
          rows={5}
          required
          className="sm:col-span-2"
          placeholder="Product, styles, timeline, or anything else we should know."
          value={values.message}
          onChange={handleChange}
          error={errors.message}
        />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2 bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-ivory transition-colors duration-300 hover:bg-olive-deep disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send inquiry"}
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
        <p className="text-sm text-charcoal/60">
          Fields marked * are required.
        </p>
      </div>

      {/* Always rendered so screen readers announce changes inside it */}
      <div aria-live="polite">
        {status === "unavailable" && (
          <div className="mt-8 border-l-2 border-olive bg-paper px-5 py-4 text-sm leading-relaxed">
            <p className="font-medium">Your message has not been sent.</p>
            <p className="mt-1 text-charcoal/75">
              Online sending is not connected yet. You can send the same details
              by email instead.
            </p>
            <a
              href={buildMailto(values)}
              className="mt-3 inline-flex items-center gap-2 font-medium underline underline-offset-4"
            >
              Open in your email app
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="mt-8 border-l-2 border-[#8c2f1b] bg-paper px-5 py-4 text-sm leading-relaxed"
          >
            <p className="font-medium">
              Something went wrong and nothing was sent.
            </p>
            <p className="mt-1 text-charcoal/75">
              Please try again, or email us at{" "}
              <a
                href={`mailto:${company.email}`}
                className="underline underline-offset-4"
              >
                {company.email}
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

export default InquiryForm;
