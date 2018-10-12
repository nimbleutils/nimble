import * as React from 'react'

export const NimbleContext = React.createContext({})

interface Props {
  theme: {
    spacing: {
      xs: number,
      default: number,
      lg: number,
      xl: number,
    },
  },
}

const NimbleProvider: React.SFC<Props> = ({ children, theme }) => (
  <NimbleContext.Provider value={ theme }>
    { children }
  </NimbleContext.Provider>
)

export default NimbleProvider