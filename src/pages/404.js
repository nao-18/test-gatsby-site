import React from 'react';
import Layout from '../components/layout';

import SEO from '../components/seo';

const page404 = ({ location }) => (
  <Layout>
    <SEO pagetitle="ページが見つかりません" pagepath={location.pagename} />
    <h1 style={{ padding: '20vh 0', textAlign: 'center' }}>
      お探しのページが見つかりませんでした
    </h1>
  </Layout>
);

export default page404;
