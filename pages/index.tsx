import React from 'react';
import Layout from '../components/layout';
import Preview from '../components/preview';
import Sidebar from '../components/sidebar';

type Props = {};

const Index = ({}: Props) => {
  return (
    <Layout>
      <Sidebar />
      <Preview />
    </Layout>
  );
};

export default Index;
