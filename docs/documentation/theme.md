# Theme

Here you can read about how you can create your theme

### Example

```js
const theme = {
  colors: {
    blue: 'blue',
  },
  spacing: {
    xs: 8,
    lg: 16,
  },
  radius: {
    md: 3,
    lg: 6,
  },
  text: {
    color: 'blue',
    size: {
      sm: 10,
      default: 12,
      lg: 16,
    },
    family: {
      default: 'Arial',
      futura: 'Futura',
    },
  },
  classes: {
    'heading-1': {
      fontSize: 50,
    },
  },
  elevation: {
    one: {
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowOffset: {
        width: 3,
        height: 3,
      },
    },
  },
}
```

### Props

| Props     | Value                                                                   | Description     |
| --------- | ----------------------------------------------------------------------- | --------------- |
| colors    | number                                                                  | flex            |
| spacing   | wrap, nowrap                                                            | flex wrap       |
| flexBasis | number, string                                                          | flex basis      |
| dir       | row, column, row-reverse, column-reverse                                | flex direction  |
| grow      | number                                                                  | flex grow       |
| shrink    | number                                                                  | flex shrink     |
| justify   | flex-start, flex-end, center, space-between, space-around, space-evenly | justify content |
| align     | flex-start, flex-end, center, stretch, baseline                         | align items     |
| zIndex    | number                                                                  | z-index         |
