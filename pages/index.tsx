import Head from 'next/head';
import Layout from '../components/layout';

type Props = {};

const Index = ({}: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with </title>
        </Head>
        here the cpntent
      </Layout>
    </>
  );
};

export default Index;
