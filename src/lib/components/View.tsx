import * as React from "react"
import { View as OView, StyleSheet } from "react-native"
import { IViewProps } from "../types/view"
import { viewPropToStylePropMap } from "../utils/maps/view"
import NimbleConsumer from "./Consumer"
import { IConsumerInjectedProps } from "../types/consumer"
import { generalPropToStylePropMap } from "../utils/maps/general"
import { getViewUtiityStyles } from "../utils/getUtilityStyles"
import getRegularStyles from "../utils/getRegularStyles"

const View: React.SFC<IViewProps & IConsumerInjectedProps> = ({
  children,
  style,
  theme,
  ...rest
}) => {
  const propToStylePropMap = new Map([
    ...viewPropToStylePropMap,
    ...generalPropToStylePropMap
  ])
  const regularStyles = getRegularStyles(rest, propToStylePropMap, theme)
  const utilityStyles = getViewUtiityStyles(rest)
  const appliedStyle = StyleSheet.create({
    style: {
      ...regularStyles,
      ...style,
      ...utilityStyles
    }
  })

  return <OView style={appliedStyle.style}>{children}</OView>
}

export default NimbleConsumer(View)
