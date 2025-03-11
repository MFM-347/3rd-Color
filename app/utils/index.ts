import { TinyColor } from '@ctrl/tinycolor'

/**
 * Application metadata for site-wide use
 */
export const meta = {
  title: '3rd Color - Color Tools for Designers & Developers',
  url: 'https://3color.vercel.app',
  logo: '/icon.svg',
  alt: '3rd Color - Professional Color Tools',
  author: {
    name: 'Farhan Madni',
    url: 'https://xyzdev.vercel.app/',
  },
  keywords: [
    'color tools',
    'color picker',
    'color converter',
    'color editor',
    'color analysis',
    'web design tools',
    'UI design',
    'color manipulation',
    'color generator',
    'design tool',
    'design tools',
  ].join(', '),
}

/**
 * Copies text to the clipboard
 */
export const copy = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert('Copied to clipboard!'))
    .catch((err: unknown) => alert(`Failed to copy text: ${err}`))
}

/**
 * Determines if a color is dark
 */
export const isDark = (clr: string) => new TinyColor(clr).isDark()

/**
 * Generates full URL to a page
 */
export const getUrl = (path: string = '') => {
  return path ? `${meta.url}${path.startsWith('/') ? path : `/${path}`}` : meta.url
}
