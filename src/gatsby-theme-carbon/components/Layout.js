import React, { useLayoutEffect } from 'react';

import LeftNav from 'gatsby-theme-carbon/src/components/LeftNav';
import Meta from 'gatsby-theme-carbon/src/components/Meta';
import Header from 'gatsby-theme-carbon/src/components/Header';
import Container from 'gatsby-theme-carbon/src/components/Container';

import 'gatsby-theme-carbon/src/styles/index.scss';

const Layout = ({
  children,
  homepage,
  theme,
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  tabs,
}) => {
  const is404 = children.key === null;

  useLayoutEffect(() => {
    const scroll = require('smooth-scroll')('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      clip: true,
      offset: tabs ? 112 : 64,
    });
    return scroll.destroy;
  }, [tabs]);

  return (
    <>
      <Meta
        titleType={titleType}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      <Header />
      <LeftNav homepage={homepage} is404Page={is404} theme={theme} />
      <Container homepage={homepage} theme={theme}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
