import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'

const variants = {
  solid: 'bg-charcoal text-ivory hover:bg-olive-deep',
  clay: 'bg-clay text-ivory hover:bg-[#7c4724]',
  outline: 'border border-charcoal/40 text-charcoal hover:bg-charcoal hover:text-ivory',
  outlineLight: 'border border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal',
}

const sizes = {
  sm: 'px-5 py-2.5',
  md: 'px-6 py-3.5',
}

// Use `to` for internal routes, `href` for tel:, mailto: and external links.
function ButtonLink({
  to,
  href,
  variant = 'solid',
  size = 'md',
  icon = true,
  className = '',
  children,
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center gap-2 text-sm font-medium tracking-wide transition-colors duration-300 ${sizes[size]} ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  )
}

export default ButtonLink
