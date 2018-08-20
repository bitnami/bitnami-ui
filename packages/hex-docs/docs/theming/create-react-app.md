<div style="display:none;">/*</div>
---
name: create-react-app
category: Theming/create-react-app
tag: tutorial
---

In this tutorial, we're going to customize a base react application with HEx. We're going to use
create-react-app to generate the boilerplate. The only prerequesites are [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). We use yarn to install the packages,
but it's optional.

1. Install create-react-app

  ```bash
  yarn global add create-react-app # npm install -g create-react-app
  ```

1. Create a new cool project!

  ```bash
  create-react-app my-cool-project
  cd my-cool-project
  ```

1. Add [SASS](https://sass-lang.com) to the react project. All the required steps are described in [this oficial guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

1. Add HEx to the project

  ```bash
  yarn add @bitnami/hex # npm install @bitnami/hex
  ```

1. Create the `src/_theme.scss` file, import the `lib.scss` and add all the required customization. The `lib.scss` file imports all the [theming mixins](/category/Foundations/Themes/). The following example modifies several parameters:

  ```scss
  // src/_theme.scss
  @import './node_modules/@bitnami/hex/lib';

  // Update the base color palette:
  @include colorTheme(
    (
      'brand': #4fa1f2
    ),
    $color-interval // Use the default value
  );

  // Update the font-size and the line-height
  @include baseSizing(
    $base-type-zoom,
    1.15em,
    $scale,
    1.45
  );

  // Update the font families
  $body: Arial, Verdana;
  @include fontFamilies(
    $body,
    Arial,
    Consolas
  );

  // Modify the grid
  @include gridConfig(
    1500px,
    10,
    2em
  );
  ```

1. Import the `_theme.scss` and the main HEx file in your `src/index.scss`:

  ```scss
  // src/index.scss
  @import './theme';
  @import './node_modules/@bitnami/hex/src/index';
  ```

1. Start the project and check it:

  ```bash
  yarn start # npm start
  ```

## Related links

* [Theming mixins](/category/Foundations/Themes/)
* [Design tokens](/category/Design-Tokens/)
* [Variables](/category/Foundations/Variables/)

<div style="display:none;">*/</div>
