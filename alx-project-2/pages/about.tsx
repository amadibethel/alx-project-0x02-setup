import Head from 'next/head';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-green-700">About This Project</h1>
        <p className="text-gray-600">Below are some styled button examples using a reusable component.</p>

        <div className="flex flex-wrap gap-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
