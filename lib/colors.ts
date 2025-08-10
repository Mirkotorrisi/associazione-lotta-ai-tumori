/**
 * Utility functions for consistent color usage across the application
 * These utilities help use the Tailwind CSS custom properties we've defined
 */

export const brandColors = {
  primary: {
    bg: 'bg-primary',
    text: 'text-primary',
    border: 'border-primary',
    hover: 'hover:bg-primary-hover',
    foreground: 'text-primary-foreground'
  },
  secondary: {
    bg: 'bg-secondary',
    text: 'text-secondary',
    border: 'border-secondary',
    hover: 'hover:bg-secondary-hover',
    foreground: 'text-secondary-foreground',
    light: 'bg-secondary-light'
  }
} as const

/**
 * Common button classes using brand colors
 */
export const buttonVariants = {
  primary: 'bg-primary hover:bg-primary-hover text-primary-foreground',
  secondary: 'bg-secondary hover:bg-secondary-hover text-secondary-foreground',
  secondaryOutline: 'border-secondary text-secondary hover:bg-secondary-light bg-transparent'
} as const

/**
 * Common link classes using brand colors
 */
export const linkVariants = {
  secondary: 'text-secondary underline',
  secondaryHover: 'text-secondary hover:text-secondary-hover underline'
} as const
