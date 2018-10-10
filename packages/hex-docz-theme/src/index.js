import React from 'react'
import { theme, ThemeConfig, DocPreview } from 'docz'

import * as components from './components';

const Theme = () => (
  <ThemeConfig>
    {config => (
      <DocPreview
        components={{
          page: components.Page,
        }}
      />
    )}
  </ThemeConfig>
)

const themeConfig = {
  colors: {
    primary: 'tomato',
    secondary: 'khaki',
    gray: 'lightslategray',
  },
}

export default theme(themeConfig)(Theme)
