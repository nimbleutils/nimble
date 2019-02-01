# Introduction

Get started quick with nimble-utils, the fast and easy way to style your components in React Native.

## What is nimble-utils?

## Why use nimble-utils?

nimble-utils is performant, elegant and extremely easy to use.

Take a look for yourself.

```javascript
/* Without nimble-utils */
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  text: {
    fontWeight: 'bold',
  },
})

const Post = () => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>Hello world</Text>
  </View>
)

/* With nimble-utils */
const Post = () => (
  <View f={1} px={24} pb={12}>
    <Text bold>Hello world</Text>
  </View>
)
```

## Underlying technologies

Nimble-utils is built with the help of the following packages:

- [React](https://reactjs.org/)
- [React Native](https://facebook.github.io/react-native/)
- [Typescript](https://www.typescriptlang.org/)

## Get started right away

Do you want to try out give nimble-utils? Check out our [Getting Started Guide](/guide/getting-started.html).
