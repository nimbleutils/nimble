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
import { getFilteredViewProps } from '../utils/getFilteredProps'
import { renderWithDirectives } from '../utils/directives'

const View: React.FunctionComponent<IViewProps & IConsumerInjectedProps> = ({
  children,
  theme,
  style,
  ...rest
}) => {
  const propToStylePropMap = new Map([
    ...viewToStyleMap,
    ...generalPropToStylePropMap,
  ])
  const regularStyles = getRegularStyles(rest, propToStylePropMap, theme)
  const utilityStyles = getViewUtiityStyles(rest, theme)
  const appliedStyle = StyleSheet.create({
    style: {
      ...regularStyles,
      ...utilityStyles,
      ...flattenStyle(style),
    },
  })

  const element = (
    <OView style={appliedStyle.style} {...getFilteredViewProps(rest)}>
      {children}
    </OView>
  )

  return renderWithDirectives(element, rest)
}

export default NimbleConsumer<IViewProps>(View)
