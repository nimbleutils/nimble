export interface ITheme {
  spacing?: { [key: string]: number }
  radius?: { [key: string]: number }
  text?: {
    color?: string
    size?: { [key: string]: number }
    family?: { [key: string]: string }
  }
  colors?: { [key: string]: string }
}

export interface IConsumerInjectedProps {
  theme: ITheme
}
