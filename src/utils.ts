import { TinyColor } from '@ctrl/tinycolor'

export const copy = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert('Text copied to clipboard!'))
    .catch((err: unknown) => alert(`Failed to copy text: ${err}`))
}

export const isDark = (clr: string) => new TinyColor(clr).isDark()
