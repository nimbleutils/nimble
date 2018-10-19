import { ViewStyle } from 'react-native'

export interface IViewProps {
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number,
  f?: number,
  dir?: IFlexDirectionProp,
  style?: ViewStyle,
  theme: any,
}

export type IViewStyleProp =
  | 'marginRight'
  | 'marginLeft'
  | 'marginTop'
  | 'marginBottom'
  | 'flex'
  | 'flexDirection'

export type IFlexDirectionProp =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'