export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'accessibility/images.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "accessibility-images" */ 'accessibility/images.mdx'),
  'accessibility/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "accessibility-index" */ 'accessibility/index.mdx'),
  'components/terminal.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-terminal" */ 'components/terminal.mdx'),
}
