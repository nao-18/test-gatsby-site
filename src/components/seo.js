import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
          lang
        }
      }
    }
  `);

  const title = props.pagetitle
    ? `${props.pagetitle}`
    : data.site.siteMetadata.title;
  const description = props.pagedesc || data.site.siteMetadata.description;

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO;
