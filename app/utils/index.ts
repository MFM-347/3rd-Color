import { TinyColor } from '@ctrl/tinycolor'

/**
 * Application metadata for site-wide use
 */
export const meta = {
  title: '3rd Color - Color Tools',
  description:
    '3rd Color is a powerful, user-friendly color tool app that offers color information, seamless color conversion, and advanced color modification features.',
  url: 'https://3color.vercel.app',
  logo: '/logo.svg',
  image: '/logo.svg',
  alt: '3rd Color Logo',
}
/**
 * Copies text to the clipboard
 *
 * @param {string} text - The text to copy
 * @returns {void}
 */
export const copy = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert('Text copied to clipboard!'))
    .catch((err: unknown) => alert(`Failed to copy text: ${err}`))
}
/**
 * Determines if a color is dark
 *
 * @param {string} clr - The color to check
 * @returns {boolean} - True if the color is dark
 */
export const isDark = (clr: string) => new TinyColor(clr).isDark()
/**
 * Generates structured data for a page
 *
 * @param {Object} options - Configuration options
 * @param {string} [options.type=WebPage] - Schema type
 * @param {string} [options.title] - Page title
 * @param {string} [options.description] - Page description
 * @param {string} [options.url] - Page URL
 * @param {string} [options.image] - Page image
 * @param {string} [options.datePublished] - Publication date
 * @param {string} [options.dateModified] - Modification date
 * @param {string} [options.author] - Content author
 * @returns {Object} - Structured data object
 */
export const generateSchemas = (options: {
  type?: string
  title?: string
  description?: string
  url?: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: string
}) => {
  const {
    type = 'WebPage',
    title = meta.title,
    description = meta.description,
    url = meta.url,
    image = `${meta.url}${meta.image}`,
    datePublished,
    dateModified,
    author = 'Farhan Madni',
  } = options
  const base = {
    '@context': 'https://schema.org',
    '@type': type,
    inLanguage: 'en',
    name: title,
    description,
    url,
    image,
    publisher: {
      '@type': 'Person',
      name: 'Farhan Madni',
      url: 'https://xyzdev.vercel.app/',
    },
    sameAs: [
      'https://github.com/mfm-347',
      'https://dev.to/mfm-347',
      'https://codepen.io/mfm-347/',
      'https://twitter.com/@mfm347',
      'https://xyzdev.vercel.app/',
    ],
  }
  if (datePublished) {
    Object.assign(base, { datePublished })
  }
  if (dateModified) {
    Object.assign(base, { dateModified })
  }
  if (author) {
    Object.assign(base, {
      author: {
        '@type': 'Person',
        name: author,
      },
    })
  }
  return base
}
/**
 * Generates breadcrumb structured data
 *
 * @param {Array} items - Breadcrumb items
 * @param {string} items[].name - Item name
 * @param {string} items[].url - Item URL
 * @returns {Object} - Breadcrumb structured data
 */
export const generateBreadcrumb = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
/**
 * Generates canonical URL
 *
 * @param {string} [path=''] - Path to append to base URL
 * @returns {string} - Full canonical URL
 */
export const getCanonicalUrl = (path: string = '') => {
  return path ? `${meta.url}${path.startsWith('/') ? path : `/${path}`}` : meta.url
}
/**
 * Generates meta tags for social sharing
 *
 * @param {Object} options - Meta options
 * @param {string} [options.title] - Page title
 * @param {string} [options.description] - Page description
 * @param {string} [options.url] - Page URL
 * @param {string} [options.image] - Page image
 * @param {string} [options.imageAlt] - Image alt text
 * @param {string} [options.twitterCreator] - Twitter username
 * @returns {Object} - Meta tag configuration
 */
export const getSocial = (options: {
  title?: string
  description?: string
  url?: string
  image?: string
  imageAlt?: string
  twitterCreator?: string
}) => {
  const {
    title = meta.title,
    description = meta.description,
    url = meta.url,
    image = `${meta.url}${meta.image}`,
    imageAlt = meta.alt,
    twitterCreator = '@mfm347',
  } = options
  return {
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    ogImage: image,
    ogImageAlt: imageAlt,
    ogType: 'website',
    ogLocale: 'en_US',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    twitterImageAlt: imageAlt,
    twitterCard: 'summary_large_image',
    twitterCreator,
  }
}
