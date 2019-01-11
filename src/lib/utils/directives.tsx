export const ifDirective = (c: any, nIf: boolean) => {
  return nIf || typeof nIf === 'undefined' ? c : null
}

export const renderWithDirectives = (element, { nIf }: { nIf?: boolean }) => {
  let modifiedElement = element
  modifiedElement = ifDirective(modifiedElement, nIf)
  return modifiedElement
}
