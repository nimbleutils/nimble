import * as React from 'react'
import { View as OView, ViewStyle, StyleSheet } from 'react-native'
import NimbleConsumer from './Consumer';

type ViewStyleProp =
  | 'marginRight'
  | 'marginLeft'
  | 'marginTop'
  | 'marginBottom'
  | 'flex'
  | 'flexDirection'

type FlexDirectionType = 
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';

interface Props {
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number,
  f?: number,
  dir?: FlexDirectionType,
  style?: ViewStyle,
  theme: any,
}

const utilityPropToStylePropMap = new Map<string, ViewStyleProp>([
  ['mr', 'marginRight'],
  ['ml', 'marginLeft'],
  ['mt', 'marginTop'],
  ['mb', 'marginBottom'],
  ['f', 'flex'],
  ['dir', 'flexDirection'],
])

const View: React.SFC<Props> = ({
  children,
  style,
  theme,
  ...rest
}) => {
  const utilityPropToThemeProp = new Map<string, string>([
    ['mr', 'spacing'],
    ['ml', 'spacing'],
    ['mb', 'spacing'],
    ['mt', 'spacing'],
  ])

  const compatibleProps = Object.entries(rest)
    .filter(([key]) => utilityPropToStylePropMap.has(key))
    .map(([key, value]) => ({ key, value }))
  
  const utilityStyles = compatibleProps
    .reduce((acc, { key, value }) => {
      const valueFromTheme = utilityPropToThemeProp.has(key) && theme[utilityPropToThemeProp.get(key)][value] || undefined

      return {
        ...acc,
        [utilityPropToStylePropMap.get(key)]: valueFromTheme || value
      }
    }, {})

  const appliedStyle = StyleSheet.create({
    style: {
      ...utilityStyles,
      ...style,
    }
  })

  return (
    <OView style={ appliedStyle.style }>
      {children}
    </OView>
  )
}

export default NimbleConsumer(View)