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

  if (props.elevation && get(theme, `elevation.${props.elevation}`)) {
    styles = {
      ...styles,
      ...theme.elevation[props.elevation],
    }
  }

  if (props.class && theme.classes) {
    styles = {
      ...styles,
      ...theme.classes[props.class],
    }
  }

  return styles
}

export const getTextUtilityStyles = (props: any, theme: ITheme) => {
  let styles: TextStyle = {}

  const defaultFontSize = get(theme, 'text.size.default') || 12
  const defaultFontFamily = get(theme, 'text.family.default') || 'Arial'
  const defaultColor = get(theme, 'text.color') || 'black'

  if (!props.color) styles.color = defaultColor
  if (!props.size) styles.fontSize = defaultFontSize
  if (!props.family) styles.fontFamily = defaultFontFamily

  if (props.bold) styles.fontWeight = '700'
  if (props.thin) styles.fontWeight = '300'

  if (props.class && theme.classes) {
    styles = {
      ...styles,
      ...theme.classes[props.class],
    }
  }

  return styles
}
