import React from 'react';
import ThemeProvider from 'gatsby-theme-carbon/src/components/ThemeProvider';
import { NavContextProvider } from 'gatsby-theme-carbon/src/util/context/NavContext';
import MDXProvider from 'gatsby-theme-carbon/src/components/MDXProvider';
import defaultComponents from 'gatsby-theme-carbon/src/components/MDXProvider/defaultComponents';

import PageCopyright from '../../components/PageCopyright';

const components = { ...defaultComponents, PageCopyright };

const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider>
      <MDXProvider components={components} element={element} />
    </ThemeProvider>
  </NavContextProvider>
);

export default wrapRootElement;
