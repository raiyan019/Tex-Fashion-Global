// Small section label: hairline, then text. Inherits colour.
function Eyebrow({ children, className = '' }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] ${className}`}
    >
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  )
}

export default Eyebrow
