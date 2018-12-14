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
import { flattenStyle } from '../utils/flattenStyle'

const Text: React.FunctionComponent<ITextProps & IConsumerInjectedProps> = ({
  children,
  theme,
  style,
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
      ...utilityStyles,
      ...flattenStyle(style),
    },
  })

  return (
    <OText style={appliedStyle.style} {...rest}>
      {getTextChildren(rest, children as string)}
    </OText>
  )
}

export default NimbleConsumer<ITextProps>(Text)
