import { TextStyle } from 'react-native'
import { get } from 'lodash'

const getTextStyles = (props: any, theme: any) => {
  const styles: TextStyle = {}

  const defaultFontSize = get(theme, 'text.size.default') || 12
  const defaultFontFamily = get(theme, 'text.family.default') || 'Arial'

  if (!props.size) styles.fontSize = defaultFontSize
  if (!props.family) styles.fontFamily = defaultFontFamily

  return styles
}

export default getTextStyles
