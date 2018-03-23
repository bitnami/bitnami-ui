<div style="display:none;">/*</div>
---
name: Index
category: Design Tokens
ignoreHeader: true
customCssClass: designTokens
---

# Design Tokens

Design tokens are the minimum elements of the design system - specifically, they are entities that store visual attributes.

## Values

<p class="type-small accent">
  <strong>Legend:</strong> 📐 Sizes - 🖊 Typography - 💅 Styling - ⚡️ Others
</p>

<p class="margin-t-enormous">
  <a href="https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_base.scss">
    <strong>Base</strong>
  </a>
</p>

| | Design Token | Mixin | Description |
| --- | --- | --- | --- |
| 📐 | `$base-type-zoom` | - | Represents the base zoom of the page. This value is added on the `html` selector and it allow us to grow and decrease the site proportionally. For most of the browsers, 100% font-size is equal to 16px |
| 🖊 | `$base-type-size` | - | Defines the base font size of the body text. The current value refers to the `$base-type-zoom`: 100% (16px) -> 1em -> 16px body text. We use a relative units to be able to change the base font size using `base-type-zoom`. It also allow browsers to define their own font size based on user preferences |
| 🖊 | `$line-height` | - | Basic line-height for text |
| 📐 | `$scale` | - | Set the scale of how sizes increase and decrease. This value affects to type sizes and spacing.
| 📐 | `$size-unit`, `$su` | [`su()`](/category/Foundations/Mixins/#su%28multiplier%29) | Basic spacing unit. Every space using a multiplier of this value |
| 📐 | `$breakpoints` | - | Array of breakpoints. They are used through the [mappy-breakpoints](https://github.com/zellwk/mappy-breakpoints) library |
| 📐 | `$mappy-queries` | [`mappy-query()`](https://github.com/zellwk/mappy-breakpoints#mappy-querymixin) | Defines the different media queries to be used with the [mappy-breakpoints](https://github.com/zellwk/mappy-breakpoints) library |

<p class="margin-t-enormous">
  <a href="https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_box-shadows.scss">
    <strong>Box shadows</strong>
  </a>
</p>

| | Design Token | Mixin | Description |
| --- | --- | --- | --- |
| 📐 | `$box-shadow-deep-level` | - | Scale for the visual height of the different box-shadow levels |
| 📐 | `$box-shadow-y-offset` | - | Scale for the distance of the different box-shadow levels |

<p class="margin-t-enormous">
  <a href="https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_colors.scss">
    <strong>Colors and gradients</strong>
  </a>
</p>

| | Design Token | Mixin | Description |
| --- | --- | --- | --- |
| 💅 | `$colors` | [`color()`](/category/Foundations/Mixins/#color%28name%29), [`color-level()`](/category/Foundations/Mixins/#color-level%28name,level%29) | The SASS map of colors. It defines all the available colors for the application |
| 💅 | `$gradients` | [`gradient()`](/category/Foundations/Mixins/#gradient%28name,%20directionOrDegrees,%20firstPosition,%20lastPosition%29) | The SASS map of gradients. |
| 💅 | `$color-interval` | - | Interval between in the tint/light palette of every color. You can get these tints usin the [`color-level()`](/category/Foundations/Mixins/#color-level%28name,level%29) mixin |

<p class="margin-t-enormous">
  <a href="https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_grid.scss">
    <strong>Grid</strong>
  </a>
</p>

| | Design Token | Mixin | Description |
| --- | --- | --- | --- |
| 📐 | `$grid-width` | - | Max-width of the grid container |
| 📐 | `$grid-columns` | - | Number of columns |
| 📐 | `$grid-gutter` | - | Spacing between columns |
| 📐 | `$grid-collapse-on` | - | List of media queries to collapse a row **on** an specific range |
| 📐 | `$grid-collapse-below` | - | List of media queries to collapse a row **below** an specific range |
| 📐 | `$grid-collapse-above` | - | List of media queries to collapse a row **above** an specific range |

<p class="margin-t-enormous">
  <a href="https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_names.scss">
    <strong>Names</strong>
  </a>
</p>

| | Design Token | Mixin | Description |
| --- | --- | --- | --- |
| ️️⚡️ | `$scale-names` | - | Aliases for the different sizes in the scale |
| ⚡️ | `$color-names` | - | Aliases for the colors |

<p class="margin-t-enormous">
  <a href="https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_spacing.scss">
    <strong>Spacing</strong>
  </a>
</p>

| | Design Token | Mixin | Description |
| --- | --- | --- | --- |
| 📐 | `$spacing-sizes` | [`spacing()`](/category/Foundations/Mixins/#spacing%28name%29) | Map of different sizes |
| 📐 | `$spacing-border-radius` | - | Default border radius |

<p class="margin-t-enormous">
  <a href="https://github.com/bitnami/hex/blob/master/packages/hex/src/variables/_sprites.scss">
    <strong>Sprites</strong>
  </a>
</p>

| | Design Token | Mixin | Description |
| --- | --- | --- | --- |
| ⚡️ | `$sprites` | - | Map to define the image sprites and the elements inside them |

<p class="margin-t-enormous">
  <a href="https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_typography.scss">
    <strong>Typography</strong>
  </a>
</p>

| | Design Token | Mixin | Description |
| --- | --- | --- | --- |
| 🖊 | `$type-os-fallback` | - | List of font families to fallback if any of the main or alternative font families are present |
| 🖊 | `$type-headers` | - | List of font families for headings |
| 🖊 | `$type-body` | - | List of font families for the normal text |
| 🖊 | `$type-code` | - | List of font families for code blocks |
| 🖊 | `$line-heigths` | [`line-height()`](/category/Foundations/Mixins/#line-height%28name%29) | Map of line-height sizes |

<p class="margin-t-enormous">
  <a href="https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_z-index.scss">
    <strong>Z-index</strong>
  </a>
</p>

| | Design Token | Mixin | Description |
| --- | --- | --- | --- |
| ⚡️ | `$z-index` | - | Map of z-index values to place layers in the UI |

<div style="display:none;">*/</div>
