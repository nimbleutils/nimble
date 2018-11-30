import * as React from 'react'
import { Text as OText, StyleSheet } from 'react-native'
import { textPropToStylePropMap } from '../utils/maps/text'
import NimbleConsumer from './Consumer'
import { IConsumerInjectedProps } from '../types/consumer'
import { generalPropToStylePropMap } from '../utils/maps/general'
import { getTextUtilityStyles } from '../utils/getUtilityStyles'
import getRegularStyles from '../utils/getRegularStyles'
import { ITextProps } from '../..'
import getTextChildren from '../utils/getTextChildren'

const Text: React.SFC<ITextProps & IConsumerInjectedProps> = ({
  children,
  style,
  theme,
  ...rest
}) => {
  const propToStylePropMap = new Map([
    ...textPropToStylePropMap,
    ...generalPropToStylePropMap,
  ])
  const regularStyles = getRegularStyles(rest, propToStylePropMap, theme)
  const utilityStyles = getTextUtilityStyles(rest, theme)
  const appliedStyle = StyleSheet.create({
    style: {
      ...regularStyles,
      ...style,
      ...utilityStyles,
    },
  })

  return (
    <OText style={appliedStyle.style}>
      {getTextChildren(rest, children as string)}
    </OText>
  )
}

export default NimbleConsumer(Text)
