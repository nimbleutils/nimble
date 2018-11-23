import { ITheme } from "./consumer"

export type SpaceType = keyof ITheme["spacing"] | number

export interface IViewTextProps {
  mt?: SpaceType
  mb?: SpaceType
  mr?: SpaceType
  ml?: SpaceType
  my?: SpaceType
  mx?: SpaceType
  pt?: SpaceType
  pb?: SpaceType
  pl?: SpaceType
  pr?: SpaceType
  px?: SpaceType
  py?: SpaceType
}
