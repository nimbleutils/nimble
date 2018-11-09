import * as React from 'react'

export const NimbleContext = React.createContext({})

interface IProviderProps {
  theme: {
    spacing: {
      xs: number,
      default: number,
      lg: number,
      xl: number,
    },
  },
}

const NimbleProvider: React.SFC<IProviderProps> = ({ children, theme }) => (
  <NimbleContext.Provider value={ theme }>
    { children }
  </NimbleContext.Provider>
)

export default NimbleProvider