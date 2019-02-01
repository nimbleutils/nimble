# Introduction

Get started quick with nimble-utils, the fast and easy way to style your components in React Native.

## What is nimble-utils?

## Why use nimble-utils?

nimble-utils is performant, elegant and extremely easy to use.

Take a loof for yourself.

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

## Get started right away
