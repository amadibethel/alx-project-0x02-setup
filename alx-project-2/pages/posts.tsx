import Head from 'next/head';
import Header from '../components/layout/Header';

const PostsPage = () => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-purple-700">Posts Page</h1>
        <p className="text-gray-600 mt-2">This page will display a list of posts from an API in the next task.</p>
      </main>
    </>
  );
};

export default PostsPage;
