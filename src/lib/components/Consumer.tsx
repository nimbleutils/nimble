import * as React from 'react'
import { NimbleContext } from './Provider'
import { ITheme, IConsumerInjectedProps } from '../types/consumer'

const NimbleConsumer = <OuterProps extends object>(
  WrappedComponent: React.ComponentType<OuterProps & IConsumerInjectedProps>
) =>
  class extends React.PureComponent<OuterProps> {
    render() {
      return (
        <NimbleContext.Consumer>
          {(theme: ITheme) => (
            <WrappedComponent {...this.props} theme={theme} />
          )}
        </NimbleContext.Consumer>
      )
    }
  }

export default NimbleConsumer
