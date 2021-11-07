import React from 'react';
import Layout from '../components/layout';

import Seo from '../components/seo';

const page404 = ({ location }) => (
  <Layout>
    <Seo pagetitle="ページが見つかりません" pagepath={location.page} />
    <h1 style={{ padding: '20vh 0', textAlign: 'center' }}>
      お探しのページが見つかりませんでした
    </h1>
  </Layout>
);

export default page404;
