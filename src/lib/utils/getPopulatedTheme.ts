import { ITheme } from '../..'
import Color from 'color'

const getShadesOfColor = (color: string, prefix: string) => {
  const coefficient = 0.125
  const shades = {}

  for (let i = 1; i <= 12; i++) {
    shades[`${prefix}-light-${i}`] = new Color(color)
      .lighten(coefficient * i)
      .hex()
    shades[`${prefix}-dark-${i}`] = new Color(color)
      .darken(coefficient * i)
      .hex()
  }

  return shades
}

const getPopulatedTheme = (theme: ITheme) => {
  /**
   * Adding different shades for all the colors
   */
  if (theme.colors && typeof theme.colors === 'object') {
    Object.entries(theme.colors).forEach(([key, value]) => {
      theme.colors = {
        ...theme.colors,
        ...getShadesOfColor(value, key),
      }
    })
  }

  return theme
}

export default getPopulatedTheme
