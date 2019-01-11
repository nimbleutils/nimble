import { IGeneralProps } from './general'
import { ViewProps } from 'react-native'

type IFlexDirectionProp = 'row' | 'column' | 'row-reverse' | 'column-reverse'

type IFlexJustifyProp =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type IFlexAlignItemsProp =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'

type IFlexWrapProp = 'wrap' | 'nowrap'

export interface IViewProps extends IGeneralProps, ViewProps {
  /**
   * Style props
   */
  f?: number
  wrap?: IFlexWrapProp
  flexBasis?: number | string
  dir?: IFlexDirectionProp
  grow?: number
  shrink?: number
  justify?: IFlexJustifyProp
  align?: IFlexAlignItemsProp
  zIndex?: number
  bg?: string
  o?: number
  h?: number
  w?: number
  left?: number
  right?: number
  bottom?: number
  top?: number
  radius?: number | string
  position?: 'absolute' | 'relative'

  /**
   * Utilites
   */
  center?: boolean
  elevation?: number
  class?: string
  absoluteFill?: boolean
}
