import { ViewStyle } from 'react-native'

export interface ViewProps {
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number,
  f?: number,
  dir?: FlexDirectionProp,
  style?: ViewStyle,
  theme: any,
}

export type ViewStyleProp =
  | 'marginRight'
  | 'marginLeft'
  | 'marginTop'
  | 'marginBottom'
  | 'flex'
  | 'flexDirection'

export type FlexDirectionProp =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'