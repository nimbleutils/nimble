# Getting Started

## 1. Install using yarn / npm

```bash
# with yarn
yarn add nimble-utils

# with npm
npm install nimble-utils --save
```

## 2. Create a theme file

Generate a theme file by running:

```bash
node ./node_modules/nimble-utils/build/cli/generate.js
```

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
