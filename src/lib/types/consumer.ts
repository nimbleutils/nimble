import { ViewStyle, TextStyle } from 'react-native'

export interface ITheme {
  spacing?: { [key: string]: number }
  radius?: { [key: string]: number }
  text?: {
    color?: string
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
  classes?: { [key: string]: ViewStyle & TextStyle }
}

export interface IConsumerInjectedProps {
  theme: ITheme
}
