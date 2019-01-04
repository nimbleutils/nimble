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
import { ifDirective } from '../utils/directives'

const Text: React.FunctionComponent<ITextProps & IConsumerInjectedProps> = ({
  children,
  theme,
  style,
  nIf,
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

  const textElement = () => (
    <OText style={appliedStyle.style} {...rest}>
      {getTextChildren(rest, children as string)}
    </OText>
  )

  // Go through all directives before render
  const renderWithDirectives = () => {
    let e = textElement()
    e = ifDirective(e, nIf)
    return e
  }

  return renderWithDirectives()
}

export default NimbleConsumer<ITextProps>(Text)
