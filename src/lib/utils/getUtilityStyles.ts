import { ViewStyle, TextStyle } from 'react-native'
import { ITheme } from '../..'
import { get } from 'lodash'
import { elevationMap } from './maps/view'

export const getViewUtiityStyles = (props: any) => {
  let styles: ViewStyle = {}

  if (props.center) {
    styles.justifyContent = 'center'
    styles.alignItems = 'center'
  }

  if (elevationMap[props.elevation]) {
    styles = {
      ...styles,
      ...elevationMap[props.elevation],
    }
  }

  return styles
}

export const getTextUtilityStyles = (props: any, theme: ITheme) => {
  let styles: TextStyle = {}

  if (props.bold) styles.fontWeight = '700'
  if (props.thin) styles.fontWeight = '300'

  const defaultFontSize = get(theme, 'text.size.default') || 12
  const defaultFontFamily = get(theme, 'text.family.default') || 'Arial'

  if (!props.size) styles.fontSize = defaultFontSize
  if (!props.family) styles.fontFamily = defaultFontFamily

  return styles
}
