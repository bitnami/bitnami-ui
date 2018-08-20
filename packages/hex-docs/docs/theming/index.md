<div style="display:none;">/*</div>
---
name: Index
category: Theming
ignoreHeader: true
---

# Theming

In HEx, we use [design tokens](/Design-Tokens/) as the minimun elements on the design system - specifically,
they are entities that store visual attributes. All these elements are referenced in internal [SASS](https://sass-lang.com/) variables.
They're widely used in all the project and you will find several helpers around them.

Overriding these [variables](/category/Foundations/Variables/) directly is possible. However, it requires some time to know all of them.
For that reason, we provide several [mixins](/category/Foundations/Themes/) to customize HEx easily.

## Strategy

To customize HEx, you need to:

* Include it in your project using npm/yarn
* Install [SASS](https://sass-lang.com/)
* Create your theme file `_theme.scss`
* Import it in your main file **before the hex/src/index.scss import**

## _theme.scss

This file will include all the customizations and it **must be included before importing the main hex/src/index.scss file**.
To use [all the available mixins for theming HEx](/category/Foundations/Themes/), you only need to import the `lib.scss` file. The following example customize the text color to `black`:

```scss
// _theme.scss
@import './node_modules/@bitnami/hex/lib';

@include colorTheme(
  (
    'text': black,
  ),
  $color-interval // Use the default value
);
```

```scss
// index.scss
@import './theme';
@import './node_modules/@bitnami/hex/src/index';
```

## Tutorials

* [create-react-app](/category/Theming/create-react-app/)

<div style="display:none;">*/</div>
