import * as React from 'react'
import { NimbleContext } from './Provider'
import { ITheme } from '../types/consumer'

interface IProps {
  theme: ITheme,
}

const NimbleConsumer = (
  <OuterProps extends object>(WrappedComponent: React.ComponentType<OuterProps & IProps>) =>
    class extends React.PureComponent<OuterProps> {
      render() {
        return (
          <NimbleContext.Consumer>
            { (theme: ITheme) => <WrappedComponent { ...this.props } theme={ theme }  /> }
          </NimbleContext.Consumer>
        )
      }
    }
  )

export default NimbleConsumer