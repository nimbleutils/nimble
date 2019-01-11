import { ViewStyle, TextStyle, StyleSheet } from 'react-native'
import { ITheme } from '../..'
import { get } from 'lodash'

export const getViewUtiityStyles = (props: any, theme: ITheme) => {
  let styles: ViewStyle = {}

  if (props.center) {
    styles.justifyContent = 'center'
    styles.alignItems = 'center'
  }

  if (props.absoluteFill) {
    styles = {
      ...styles,
      ...StyleSheet.absoluteFillObject,
    }
  }

  if (props.elevation && theme.elevation[props.elevation]) {
    styles = {
      ...styles,
      ...theme.elevation[props.elevation],
    }
  }

  return styles
}

export const getTextUtilityStyles = (props: any, theme: ITheme) => {
  let styles: TextStyle = {}

  if (props.bold) styles.fontWeight = '700'

  const defaultFontSize = get(theme, 'text.size.default') || 12
  const defaultFontFamily = get(theme, 'text.family.default') || 'Arial'

  if (!props.size) styles.fontSize = defaultFontSize
  if (!props.family) styles.fontFamily = defaultFontFamily

  return styles
}
