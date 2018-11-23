import { utilityPropToThemeProp } from "./maps/general";

const getRegularStyles = (props: any, propToStylePropMap: Map<string, string>, theme: any) => {
  const compatibleProps = Object.entries<string>(props)
    .filter(([key]) => propToStylePropMap.has(key))
    .map(([key, value]) => ({ key, value }))

  return compatibleProps
    .reduce((acc, { key, value }) => {
      const valueFromTheme = utilityPropToThemeProp.has(key)
        && theme[utilityPropToThemeProp.get(key)][value]

      return {
        ...acc,
        [propToStylePropMap.get(key)]: valueFromTheme || value
      }
    }, {})
}

export default getRegularStyles