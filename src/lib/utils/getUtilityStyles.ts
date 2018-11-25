import { ViewStyle, TextStyle } from 'react-native'

export const getViewUtiityStyles = (props: any) => {
  let styles: ViewStyle = {}

  if (props.center) {
    styles.justifyContent = 'center'
    styles.alignItems = 'center'
  }

  return styles
}

export const getTextUtilityStyles = (props: any) => {
  let styles: TextStyle = {}

  if (props.bold) styles.fontWeight = '700'

  return styles
}
