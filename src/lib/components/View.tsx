import * as React from 'react'
import { View as OView, StyleSheet } from 'react-native'
import NimbleConsumer from './Consumer';
import { ViewProps } from '../types/view';
import { propToStyleProp, utilityPropToThemeProp } from '../utils/maps';

const View: React.SFC<ViewProps> = ({
  children,
  style,
  theme,
  ...rest
}) => {
  const compatibleProps = Object.entries(rest)
    .filter(([key]) => propToStyleProp.has(key))
    .map(([key, value]) => ({ key, value }))
  
  const utilityStyles = compatibleProps
    .reduce((acc, { key, value }) => {
      const valueFromTheme = utilityPropToThemeProp.has(key) && theme[utilityPropToThemeProp.get(key)][value] || undefined

      return {
        ...acc,
        [propToStyleProp.get(key)]: valueFromTheme || value
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