import * as React from 'react'
import { IConsumerInjectedProps } from '../types/consumer'

export const NimbleContext = React.createContext({})

const NimbleProvider: React.SFC<IConsumerInjectedProps> = ({
  children,
  theme
}) => <NimbleContext.Provider value={theme}>{children}</NimbleContext.Provider>

export default NimbleProvider
