// `primary: true` links appear in the desktop navbar.
// The Contact link is shown as the button on the right of the desktop navbar.
// Rename 'Custom Page' here when you build that page.
export const navLinks = [
  { label: 'Home', path: '/', primary: true },
  { label: 'About Us', path: '/about-us', primary: true },
  {
    label: 'Products / Capabilities',
    navLabel: 'Products',
    path: '/products-capabilities',
    primary: true,
  },
  { label: 'Manufacturing & Quality', path: '/manufacturing-quality', primary: true },
  { label: 'Custom Page', path: '/custom-page', primary: true },
  { label: 'Contact', path: '/contact', primary: false },
]
