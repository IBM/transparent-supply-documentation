import React from 'react';
import { Grid, Row, Column } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import SolutionName from '../../components/SolutionName';
import { banner, image, grid, row } from './Homepage.module.scss';

const CustomBanner = () => (
  <>
    <section className={banner}>
      <div className={image}></div>
      <Grid className={grid}>
        <Row className={row}>
          <Column>
            <h1>Welcome to <SolutionName /> Docs</h1>
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
