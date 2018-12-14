export interface ITheme {
  spacing?: { [key: string]: number }
  radius?: { [key: string]: number }
  text?: {
    size?: { [key: string]: number }
    family?: { [key: string]: string }
  }
  colors?: { [key: string]: string }
  classes?: { [key: string]: { [key: string]: any } }
}

export interface IConsumerInjectedProps {
  theme: ITheme
}
