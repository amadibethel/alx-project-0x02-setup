import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-blue-700">Welcome to the Home Page</h1>
        <p className="text-gray-600">Below are some reusable card components:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Getting Started" content="Learn how to scaffold a Next.js project with TypeScript and Tailwind CSS." />
          <Card title="Routing" content="Understand how to create pages and navigate between them in Next.js." />
          <Card title="Reusable Components" content="Build modular, flexible components like Cards and Buttons." />
        </div>
      </main>
    </>
  );
};

export default HomePage;
