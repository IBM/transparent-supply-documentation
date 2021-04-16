import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header,
  HeaderGlobalBar,
  HeaderMenuButton,
  SkipToContent,
} from 'carbon-components-react';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';
import GlobalSearch from 'gatsby-theme-carbon/src/components/GlobalSearch';
import {
  collapsed,
  header,
  headerButton,
  headerName,
  skipToContent,
} from 'gatsby-theme-carbon/src/components/Header/Header.module.scss';

const DocumentationHeader = () => {
  const {
    leftNavIsOpen,
    toggleNavState,
    searchIsOpen,
  } = useContext(NavContext);

  const { isSearchEnabled } = useMetadata();

  return (
    <>
      <Header aria-label="Header" className={header}>
        <SkipToContent href="#main-content" className={skipToContent} />
        <HeaderMenuButton
          className={`bx--header__action--menu ${headerButton}`}
          aria-label="Open menu"
          onClick={() => {
            toggleNavState('leftNavIsOpen');
            toggleNavState('switcherIsOpen', 'close');
          }}
          isActive={leftNavIsOpen}
        />
        <Link
          className={`${headerName} ${searchIsOpen ? collapsed : null}`}
          to="/"
        >
          IBM Blockchain Transparent Supply™&nbsp;<span>Docs</span>
        </Link>
        <HeaderGlobalBar>
          {isSearchEnabled && <GlobalSearch />}
        </HeaderGlobalBar>
      </Header>
    </>
  );
}

export default DocumentationHeader;
