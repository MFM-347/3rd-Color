import { TinyColor } from '@ctrl/tinycolor'

export const copy = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert('Text copied to clipboard!'))
    .catch((err) => alert('Failed to copy text: ', err))
}
export const isDark = (clr) => new TinyColor(clr).isDark()
