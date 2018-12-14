import React, { SFC } from 'react'
import { NimbleContext } from './Provider'
import { ITheme, IConsumerInjectedProps } from '../types/consumer'

const NimbleConsumer = <OuterProps extends object>(
  WrappedComponent: React.ComponentType<IConsumerInjectedProps>
) => {
  const Component: SFC<OuterProps> = props => (
    <NimbleContext.Consumer>
      {(theme: ITheme) => <WrappedComponent {...props} theme={theme} />}
    </NimbleContext.Consumer>
  )

  return Component
}

export default NimbleConsumer
