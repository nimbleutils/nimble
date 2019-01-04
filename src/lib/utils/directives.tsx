export const ifDirective = (c: any, nIf: boolean) => {
  return nIf || typeof nIf === 'undefined' ? c : null
}
