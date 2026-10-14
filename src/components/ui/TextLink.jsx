import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

// Underlined text link with a sliding arrow. Inherits colour (works on dark sections).
function TextLink({ to, children, className = '' }) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-2 text-sm font-medium tracking-wide ${className}`}>
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_1px] bg-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 ease-editorial group-hover:bg-[length:0%_1px]">
        {children}
      </span>
      <ArrowRight
        size={16}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  )
}

export default TextLink
