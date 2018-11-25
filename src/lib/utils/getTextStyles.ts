import { TextStyle } from 'react-native'
import { get } from 'lodash'

const getTextStyles = (props: any, theme: any) => {
  const styles: TextStyle = {}

  const defaultFontSize = get(theme, 'text.size.default') || 12

  if (!props.size && defaultFontSize) {
    styles.fontSize = defaultFontSize
  }

  return styles
}

export default getTextStyles
