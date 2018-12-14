export interface ITheme {
  spacing?: { [key: string]: number }
  radius?: { [key: string]: number }
  text?: {
    size?: { [key: string]: number }
    family?: { [key: string]: string }
  }
  colors?: { [key: string]: string }
  elevation?: {
    [key: string]: {
      shadowColor: string
      shadowOpacity: number
      shadowOffset: {
        width: number
        height: number
      }
    }
  }
}

export interface IConsumerInjectedProps {
  theme: ITheme
}
