import React, { Component } from 'react'
import { isFunction } from 'lodash'
import { TouchableOpacity, ViewProps } from 'react-native'

export const ifDirective = (c: any, nIf: boolean) => {
  return nIf || typeof nIf === 'undefined' ? c : null
}

export const onPressDirective = (
  c: Component<ViewProps>,
  children,
  nPress: any
) => {
  if (!isFunction(nPress)) return c

  return React.createElement(
    TouchableOpacity,
    { onPress: nPress, style: c.props.style },
    children
  )
}

export const renderWithDirectives = (
  element,
  { nIf, nPress }: { nIf?: boolean; nPress?: Function },
  children = null
) => {
  let modifiedElement = element

  modifiedElement = ifDirective(modifiedElement, nIf)
  if (!modifiedElement) return modifiedElement

  modifiedElement = onPressDirective(modifiedElement, children, nPress)
  return modifiedElement
}
