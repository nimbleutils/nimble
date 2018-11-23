export const viewPropToStylePropMap = new Map<string, string>([
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
])

export const viewPropToUtilityPropMap = new Set(['center'])
