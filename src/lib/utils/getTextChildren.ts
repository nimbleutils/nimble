const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const getTextChildren = (props: any, text: string) => {
  if (props.uppercase) text = text.toUpperCase()
  if (props.capitalize) text = capitalize(text)
  return text
}

export default getTextChildren
