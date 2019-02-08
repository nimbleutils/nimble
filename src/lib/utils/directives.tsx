import React, { Component } from 'react'
import { isFunction } from 'lodash'
import { TouchableOpacity } from 'react-native'
import { IClickDirectives } from '../types/directives'

export const ifDirective = (c: any, nIf: boolean) => {
  return nIf || typeof nIf === 'undefined' ? c : null
}

export const clickDirective = (c: Component, nClick: any) => {
  if (isFunction(nClick)) {
    return <TouchableOpacity onPress={() => nClick}>{c}</TouchableOpacity>
  }

  if (Array.isArray(nClick) && nClick.length > 1) {
    return React.createElement(nClick[0], { onPress: nClick[1] }, c)
  }

  return null
}

export const renderWithDirectives = (
  element,
  { nIf, nClick }: { nIf?: boolean; nClick?: IClickDirectives }
) => {
  let modifiedElement = element

  // If directive
  modifiedElement = ifDirective(modifiedElement, nIf)
  if (!modifiedElement) return modifiedElement

  if (nClick) {
    console.log(nClick)
  }

  Wrapp in click
  modifiedElement = clickDirective(modifiedElement, nClick)

  return modifiedElement
}
