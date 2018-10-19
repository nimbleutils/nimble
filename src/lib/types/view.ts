import { ViewStyle } from 'react-native'

export interface ViewProps {
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number,
  f?: number,
  dir?: FlexDirectionType,
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

export type FlexDirectionType =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'