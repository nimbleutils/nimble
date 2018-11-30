import { IViewTextProps } from './general'
import { TextStyle } from 'react-native'

type TextAlignType = 'auto' | 'left' | 'right' | 'center' | 'justify'

export interface ITextProps extends IViewTextProps {
  style?: TextStyle
  /**
   * Style props
   */
  color?: string
  size?: string | number
  weight?: string
  lineHeight?: number
  textAlign?: TextAlignType
  font?: string
  spacing?: number
  family?: string
  o?: number
  /**
   * Utlity props
   */
  uppercase?: boolean
  capitalize?: boolean
  bold?: boolean
}
