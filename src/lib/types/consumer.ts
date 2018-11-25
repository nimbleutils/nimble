export interface ITheme {
  spacing: { [key: string]: number }
}

export interface IConsumerInjectedProps {
  theme: ITheme
}
