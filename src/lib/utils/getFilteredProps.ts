import { omit } from 'lodash'

const blacklistedProps = ['elevation']

export const getFilteredViewProps = (props: any) =>
  omit(props, ...blacklistedProps)
