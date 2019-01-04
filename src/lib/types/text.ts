import { IGeneralProps } from './general'
import { TextProps } from 'react-native'

type TextAlignType = 'auto' | 'left' | 'right' | 'center' | 'justify'

export interface ITextProps extends IGeneralProps, TextProps {
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
  o?: number
  /**
   * Utlity props
   */
  uppercase?: boolean
  capitalize?: boolean
  bold?: boolean
  thin?: boolean
  deco?: 'underline' | 'none' | 'through' | 'underline-through'
}
