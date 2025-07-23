import Head from 'next/head';
import Header from '../components/layout/Header';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-blue-700">Welcome to the Home Page</h1>
        <p className="mt-4 text-gray-600">This is the home route of your Next.js application.</p>
      </main>
    </>
  );
};

export default HomePage;
