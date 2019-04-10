# Components

When using nimble-utils you'll mainly use two components: `View` & `Text`. When using these components you'll be able to use nimble-utils props. There are two types of props: utility & style props.

### Style props

Style props are basically a map to already existing styling rules. For example: `f` is `flex`, `w` is width and `mb` is `marginBottom`.

### Utility props

Utility props are typically a set of rules. For example `bold`, `uppercase` & `capitalize`.

## Props

### General props (available on both View & Text)

| Props | Value          | Description                              | Type    |
| ----- | -------------- | ---------------------------------------- | ------- |
| m     | number, string | margin                                   | Style   |
| mt    | number, string | marginTop                                | Style   |
| mb    | number, string | marginBottom                             | Style   |
| ml    | number, string | marginLeft                               | Style   |
| mr    | number, string | marginRight                              | Style   |
| mx    | number, string | marginHorizontal                         | Style   |
| my    | number, string | marginVertical                           | Style   |
| p     | number, string | padding                                  | Style   |
| pt    | number, string | paddingTop                               | Style   |
| pb    | number, string | paddingBottom                            | Style   |
| pl    | number, string | paddingLeft                              | Style   |
| pr    | number, string | paddingRight                             | Style   |
| px    | number, string | paddingHorizontal                        | Style   |
| py    | number, string | paddingVertical                          | Style   |
| class | number, string | [read more](/documentation/classes.html) | Utility |

### View props

| Props     | Value                                                                   | Description      | Type    |
| --------- | ----------------------------------------------------------------------- | ---------------- | ------- |
| f         | number                                                                  | flex             | Style   |
| wrap      | wrap, nowrap                                                            | flex wrap        | Style   |
| flexBasis | number, string                                                          | flex basis       | Style   |
| dir       | row, column, row-reverse, column-reverse                                | flex direction   | Style   |
| grow      | number                                                                  | flex grow        | Style   |
| shrink    | number                                                                  | flex shrink      | Style   |
| justify   | flex-start, flex-end, center, space-between, space-around, space-evenly | justify content  | Style   |
| align     | flex-start, flex-end, center, stretch, baseline                         | align items      | Style   |
| zIndex    | number                                                                  | z-index          | Style   |
| bg        | string                                                                  | background color | Style   |
| o         | number                                                                  | opacity          | Style   |
| h         | number                                                                  | height           | Style   |
| w         | number                                                                  | width            | Style   |
| left      | number                                                                  | left             | Style   |
| right     | number                                                                  | right            | Style   |
| bottom    | number                                                                  | bottom           | Style   |
| top       | number                                                                  | top              | Style   |
| radius    | number, string                                                          | border radius    | Utility |
| center    | boolean                                                                 | center           | Utility |
| elevation | number                                                                  | box shadow       | Utility |

### Text props

| Props      | Value                              | Description                                                                | Style   |
| ---------- | ---------------------------------- | -------------------------------------------------------------------------- | ------- |
| color      | string                             | color                                                                      | Style   |
| size       | string, number                     | font size                                                                  | Style   |
| weight     | string                             | font weight                                                                | Style   |
| lineHeight | number                             | line height                                                                | Style   |
| textAlign  | auto, left, right, center, justify | text align                                                                 | Style   |
| font       | string                             | font family                                                                | Style   |
| spacing    | number                             | letter spacing                                                             | Style   |
| o          | number                             | opacity                                                                    | Style   |
| uppercase  | boolean                            | converts all characeters to uppercase                                      | Utility |
| capitalize | boolean                            | converts only the first character to uppercase and all other to lowercase. | Utility |
| bold       | boolean                            | transforms text weight to bold                                             | Utility |
