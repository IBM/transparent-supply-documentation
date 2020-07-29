import React from 'react';
import { Grid, Row, Column } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import { banner, image, grid, row } from './Homepage.module.scss';

const CustomBanner = () => (
  <>
    <section className={banner}>
      <div className={image}></div>
      <Grid className={grid}>
        <Row className={row}>
          <Column>
            <h1>Welcome to IBM Blockchain Transparent Supply™ Docs</h1>
          </Column>
        </Row>
      </Grid>
    </section>
  </>
);

const customProps = {
  Banner: CustomBanner(),
  FirstCallout: <></>,
  SecondCallout: <></>,
};

function DocumentationHomepageTemplate(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default DocumentationHomepageTemplate;
