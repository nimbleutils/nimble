export interface ITheme {
  spacing: { [key: string]: string }
}

export interface IConsumerInjectedProps {
  theme: ITheme
}