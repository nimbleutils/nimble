import * as React from 'react'
import { IViewProps } from '../..'
import { IConsumerInjectedProps } from '../types/consumer'
import { ViewProps, StyleSheet, StyleProp, TextProps } from 'react-native'
import NimbleConsumer from '../components/Consumer'
import { viewToStyleMap } from './maps/view'
import { generalPropToStylePropMap } from './maps/general'
import getRegularStyles from './getRegularStyles'
import { getViewUtiityStyles } from './getUtilityStyles'
import { flattenStyle } from './flattenStyle'

const createUtilityComponent = <T extends object>(Component: any) => {
  const UtilityComponent: React.FunctionComponent<
    IConsumerInjectedProps & {
      style: StyleProp<ViewProps> | StyleProp<TextProps>
    }
  > = ({ children, theme, style, ...rest }) => {
    const propToStylePropMap = new Map([
      ...viewToStyleMap,
      ...generalPropToStylePropMap,
    ])
    const regularStyles = getRegularStyles(rest, propToStylePropMap, theme)
    const utilityStyles = getViewUtiityStyles(rest)

    const appliedStyle = StyleSheet.create({
      style: {
        ...regularStyles,
        ...utilityStyles,
        ...flattenStyle(style),
      },
    })

    return <Component style={appliedStyle.style} {...rest} />
  }

  return NimbleConsumer<IViewProps & T>(UtilityComponent)
}

export default createUtilityComponent
