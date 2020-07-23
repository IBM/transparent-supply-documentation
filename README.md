# transparent-supply-documentation

IBM Blockchain Transparent Supply (BTS) documentation, built with Gatsby and
[`gatsby-theme-carbon`](https://github.com/carbon-design-system/gatsby-theme-carbon).

## Getting started

### Development server

To run the documentation site locally for the purposes of development:

1. `npm install`
2. `npm start`
3. In a web browser, navigate to `localhost:8000`

### Building and serving locally

#### With a non-production build

This is configured to build and serve the documentation site with source maps and without path
prefixing (it is similar to running the development server in that it runs at the root of
`localhost` and provides source files via source mapping, but it yields a build output similar to a
production build):

1. `npm install` (if not done previously)
2. `npm run build`
3. `npm run serve`
4. In a web browser, navigate to `localhost:9000`

#### With a production build

This is configured to build and serve a production build without source maps and with the path
prefix provided in `gatsby-config.js` (`pathPrefix`):

1. `npm install` (if not done previously)
2. `npm run build:prod`
3. `npm run serve:prod`
4. In a web browser, navigate to `localhost:9000<pathPrefix>` (`localhost:9000/ift/help` by default)

### Deploying and hosting in production

As discussed in the previous section, you can create a production build using `npm run build:prod`
(output in `/public`). The methods and options by which the site is built, deployed, and hosted are
flexible. Refer to Gatsby's documentation on [deploying and hosting](https://www.gatsbyjs.org/docs/deploying-and-hosting/)
for more information.

#### Path prefixing

As previously mentioned, the documentation is configured to use the path prefix `/ift/help`. Whether
or not path prefixing is required will depend on how the documentation site is hosted. Refer to
Gatsby's documentation on [path prefixing](https://www.gatsbyjs.org/docs/path-prefix/) for more
information.

#### Setting `GATSBY_UI_URL` environment variable

**Note: The `GATSBY_` prefix is a Gatsby mechanism, the variable itself has nothing to do with Gatsby.**

There are many links within the documentation that point to the BTS UI. If the documentation is
self-hosted, make sure that the `GATSBY_UI_URL` environment variable is set (preferably via the
CI/CD tool chosen) accordingly. In other words, the variable should be set to
`'https://<BTS UI's fully qualified domain name>'` so that the links correctly resolve to e.g.
`https://<BTS UI's fully qualified domain name>/path/to/ui/page`.

### Adding pages

**Note: The left side navigation does not currently support more than one level of nesting (i.e. it
cannot have an accordion within an accordion).**

1. Create a `.mdx` file in the appropriate place in `src/pages`
    * For a standalone page (i.e. not nested in an accordion in side navigation), create directly
      under `src/pages` (e.g. `src/pages/introduction.mdx`)
    * For a page within a group (i.e. nested in an accordion in side navigation), create under the
      desired subdirectory within `src/pages` (e.g. `src/pages/modules/activity.mdx`)
2. Add frontmatter (page title and description) **at the top of the file**, for example:
    ```
    ---
    title: Activity
    description: Description of the Activity module
    ---
    ```
3. Add the nav route to `src/data/nav-items.yaml` (**be sure to indent correctly**)
      * For standalone page:
        ```
        - title: Introduction
          pages:
            - path: /introduction
        ```
      * For nested page(s):
        ```
        - title: Modules
          pages:
            - title: Overview
              path: /modules/overview
            - title: Activity
              path: /modules/activity
        ```

### Changing the solution name

To change the solution name, simply find and replace all applicable instances of
`IBM Blockchain Transparent Supply™` with the new solution name.

### Changing the hero image

To change the hero image simply replace the file at `src/images/hero.jpg`. You will likely need to
adjust the properties in the `image` class in `src/gatsby-theme-carbon/templates/Homepage.module.scss`,
most notably `background-position` and `opacity`. Keep the following in mind when choosing a hero
image and adjusting these properties:

- **Opacity:** Lighter images should use a lower opacity, darker images should use a higher opacity.
  The image and the dark background behind it combine to be the background behind the welcome text.
  This combination needs to be dark enough to maintain text readability, which requires changing the
  image's opacity accordingly.
- **Screen size:** Make sure the overall image and its focal point work well at different screen
  sizes. The way it gets cropped/scaled will differ on narrower screens vs. on wider screens.

## Contributing

We are not accepting contributions at this time, but please feel free to open issues!
