import { ChevronDown } from "lucide-react";

const controlClass =
  "block w-full appearance-none rounded-none border-0 border-b border-charcoal/30 bg-transparent px-0 py-3 text-base text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-charcoal focus:shadow-[0_1px_0_0_var(--color-charcoal)] aria-invalid:border-[#8c2f1b]";

// Label + control + error/hint. `as` can be 'input' (default), 'textarea' or 'select'.
function Field({
  label,
  name,
  as: Tag = "input",
  required = false,
  error,
  hint,
  className = "",
  children,
  ...rest
}) {
  const id = `field-${name}`;
  const messageId = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-xs font-medium uppercase tracking-[0.18em] text-charcoal/70"
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      <div className="relative">
        <Tag
          id={id}
          name={name}
          aria-required={required || undefined}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={messageId}
          className={controlClass}
          {...rest}
        >
          {children}
        </Tag>
        {Tag === "select" && (
          <ChevronDown
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-charcoal/60"
          />
        )}
      </div>

      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#8c2f1b]">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-2 text-sm text-charcoal/60">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export default Field;
