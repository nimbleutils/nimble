import { ViewStyleProp } from "../types/view";

export const propToStyleProp = new Map<string, ViewStyleProp>([
  ['mr', 'marginRight'],
  ['ml', 'marginLeft'],
  ['mt', 'marginTop'],
  ['mb', 'marginBottom'],
  ['f', 'flex'],
  ['dir', 'flexDirection'],
])

export const utilityPropToThemeProp = new Map<string, string>([
  ['mr', 'spacing'],
  ['ml', 'spacing'],
  ['mb', 'spacing'],
  ['mt', 'spacing'],
])