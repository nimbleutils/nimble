import * as React from 'react'
import { View as OView, StyleSheet } from 'react-native'
import { IViewProps } from '../types/view'
import { viewToStyleMap } from '../utils/maps/view'
import NimbleConsumer from './Consumer'
import { IConsumerInjectedProps } from '../types/consumer'
import { generalPropToStylePropMap } from '../utils/maps/general'
import { getViewUtiityStyles } from '../utils/getUtilityStyles'
import getRegularStyles from '../utils/getRegularStyles'
import { flattenStyle } from '../utils/flattenStyle'
import { ifDirective } from '../utils/directives'

const View: React.FunctionComponent<IViewProps & IConsumerInjectedProps> = ({
  children,
  theme,
  style,
  nIf,
  ...rest
}) => {
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

  const viewElement = () => (
    <OView style={appliedStyle.style} {...rest}>
      {children}
    </OView>
  )

  // Go through all directives before render
  const renderWithDirectives = () => {
    let e = viewElement()
    e = ifDirective(e, nIf)
    return e
  }

  return renderWithDirectives()
}

export default NimbleConsumer<IViewProps>(View)
