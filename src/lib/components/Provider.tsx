import * as React from 'react'
import { IConsumerInjectedProps } from '../types/consumer'
import getPopulatedTheme from '../utils/getPopulatedTheme'

export const NimbleContext = React.createContext({})

const NimbleProvider: React.SFC<IConsumerInjectedProps> = ({
  children,
  theme,
}) => (
  <NimbleContext.Provider value={getPopulatedTheme(theme)}>
    {children}
  </NimbleContext.Provider>
)

export default NimbleProvider
