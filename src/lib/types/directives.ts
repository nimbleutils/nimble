export interface IGeneralDirectives {
  nIf?: boolean
  nClick?: IClickDirectives
}

type touchables =
  | 'TouchableHighlight'
  | 'TouchableOpacity'
  | 'TouchableNativeFeedback'
  | 'TouchableWithoutFeedback'

export type IClickDirectives = Function | [touchables, Function]
