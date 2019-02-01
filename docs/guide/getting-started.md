# Getting Started

## 1. Install using yarn / npm

```bash
# with yarn
yarn add nimble-utils

# with npm
npm install nimble-utils --save
```

## 2. Create a theme file

Create a theme file. [Click here](/guide/theme.html) for more information regarding structure and how the theme file works.

## 3. Wrap your app with NimbleProvider

```javascript
import NimbleProvider from 'nimble-utils'
import theme from './path/to/theme/file.ts'

const App = () => (
  <NimbleProvider theme={theme}>
    <MyApp />
  </NimbleProvider>
)
```

## 4. Start using Nimble

```javascript
import { View, Text } from 'nimble-utils'

const MyComponent = () => (
  <View f={1} bg="blue" center>
    <Text size="md">Hello world!</Text>
  </View>
)
```
