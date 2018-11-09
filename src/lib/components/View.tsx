import * as React from 'react'
import { View as OView, StyleSheet } from 'react-native'
import { IViewProps } from '../types/view';
import { propToStylePropMap, utilityPropToThemePropMap } from '../utils/maps';
import NimbleConsumer from './Consumer';
import { IConsumerInjectedProps } from '../types/consumer';

const View: React.SFC<IViewProps & IConsumerInjectedProps> = ({
  children,
  style,
  theme,
  ...rest
}) => {
  const compatibleProps = Object.entries(rest)
    .filter(([key]) => propToStylePropMap.has(key))
    .map(([key, value]) => ({ key, value }))
  
  const utilityStyles = compatibleProps
    .reduce((acc, { key, value }) => {
      const valueFromTheme = utilityPropToThemePropMap.has(key)
        && theme[utilityPropToThemePropMap.get(key)][value]
      
      // TODO: If the value wasn't found in the theme file, we need to filter out the props that aren't suppoerted for that style prop.

      // if (!valueFromTheme) {
        
      // }

      return {
        ...acc,
        [propToStylePropMap.get(key)]: valueFromTheme || value
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
      { children }
    </OView>
  )
}

export default NimbleConsumer(View)