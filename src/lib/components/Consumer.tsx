import * as React from 'react'
import { NimbleContext } from './Provider';

const NimbleConsumer = (WrappedComponent: React.ComponentType<any>) => (props: any) => (
  <NimbleContext.Consumer>
    { (theme) => <WrappedComponent theme={ theme } { ...props } /> }
  </NimbleContext.Consumer>
)

export default NimbleConsumer