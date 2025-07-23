import Head from 'next/head';
import Header from '../components/layout/Header';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-green-700">About This Project</h1>
        <p className="mt-4 text-gray-600">This page provides details about the project and its purpose.</p>
      </main>
    </>
  );
};

export default AboutPage;
