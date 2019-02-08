# Directives

We currently support two directives: `nIf` & `nClick`.

## nIf

Accepts a boolean. Won't render the component if boolean is set to false.

```jsx
const shouldRender = true
<View nIf={shouldRender} />
```

## nClick

Accepts a function. When clicking the view this function will invoke.

```jsx
<View
  nClick={() => {
    alert('Someone just clicked me!')
  }}
/>
```
