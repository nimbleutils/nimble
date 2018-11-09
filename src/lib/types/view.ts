import { ViewStyle } from 'react-native'
import { SpaceType } from './general';

export interface IViewProps {
  mt?: SpaceType,
  mb?: SpaceType,
  mr?: SpaceType,
  ml?: SpaceType,
  f?: SpaceType,
  dir?: IFlexDirectionProp,
  style?: ViewStyle,
  bg?: string,
}

export type IViewStyleProp =
  | 'marginRight'
  | 'marginLeft'
  | 'marginTop'
  | 'marginBottom'
  | 'flex'
  | 'flexDirection'
  | 'backgroundColor'

export type IFlexDirectionProp =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'