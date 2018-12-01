import { ViewStyle } from 'react-native'

export const viewToStyleMap = new Map<string, string>([
  /* Flex props */
  ['f', 'flex'],
  ['flexBasis', 'flexBasis'],
  ['dir', 'flexDirection'],
  ['grow', 'flexGrow'],
  ['shrink', 'flexShrink'],
  ['wrap', 'flexWrap'],
  ['justify', 'justifyContent'],
  ['align', 'alignItems'],
  /* Misc */
  ['zIndex', 'zIndex'],
  ['bg', 'backgroundColor'],
  ['o', 'opacity'],
  ['h', 'height'],
  ['w', 'width'],
  ['left', 'left'],
  ['right', 'right'],
  ['bottom', 'bottom'],
  ['top', 'top'],
  ['radius', 'borderRadius'],
])

export const viewPropToUtilityPropMap = new Set(['center'])

export const elevationMap: { [key: number]: ViewStyle } = {
  1: {
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  2: {
    shadowColor: 'rgba(0,0,0,0.16)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
}
