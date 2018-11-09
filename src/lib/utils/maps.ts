import { IViewStyleProp } from "../types/view";

export const propToStylePropMap = new Map<string, IViewStyleProp>([
  ['mr', 'marginRight'],
  ['ml', 'marginLeft'],
  ['mt', 'marginTop'],
  ['mb', 'marginBottom'],
  ['f', 'flex'],
  ['dir', 'flexDirection'],
  ['bg', 'backgroundColor'],
])

export const utilityPropToThemePropMap = new Map<string, string>([
  ['mr', 'spacing'],
  ['ml', 'spacing'],
  ['mb', 'spacing'],
  ['mt', 'spacing'],
])