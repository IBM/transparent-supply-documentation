/**
 *********************************************************************
 * © Copyright IBM Corp. 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *********************************************************************
*/

if (!process.env.GATSBY_UI_URL) { // If falsy, set GATSBY_UI_URL env var to empty string
  process.env.GATSBY_UI_URL = '';
}

// Default plugins
const plugins = [
  {
    resolve: 'gatsby-theme-carbon',
    options: {
      titleType: 'prepend',
      isSearchEnabled: false,
      iconPath: 'node_modules/@carbon/icons/svg/32/education.svg',
    }
  },
];

// Additional plugins for production build
if (process.env.PROD) {
  console.log('Disabling source maps...');
  plugins.push(
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
  );
}

module.exports = {
  pathPrefix: '/ift/help',
  siteMetadata: {
    title: 'IBM Blockchain Transparent Supply™ Docs',
    description: 'Documentation for IBM Blockchain Transparent Supply™',
    keywords: ''
  },
  plugins
};
