import { ViewStyle, TextStyle, StyleSheet } from 'react-native'
import { ITheme } from '../..'
import { get } from 'lodash'
import { elevationMap } from './maps/view'

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

  if (elevationMap[props.elevation]) {
    styles = {
      ...styles,
      ...elevationMap[props.elevation],
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

  if (!props.size) styles.fontSize = defaultFontSize
  if (!props.family) styles.fontFamily = defaultFontFamily

  if (props.bold) styles.fontWeight = '700'

  if (props.class && theme.classes) {
    styles = {
      ...styles,
      ...theme.classes[props.class],
    }
  }

  return styles
}
