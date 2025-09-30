import Head from "next/head";
import Header from "@/components/layout/Header"; // import Header
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - ALX Project 0x02</title>
        <meta name="description" content="Home page of ALX Project 0x02" />
      </Head>

      <Header /> {/* Add Header here */}

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the Home Page 🏠
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
          This is the Home page of your Next.js project. Use the header to navigate 
          to other pages like About, Posts, and Users.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Card 1" description="This is an example card." />
          <Card title="Card 2" description="This is another example card." />
          <Card title="Card 3" description="Yet another example card." />
        </div>

        <div className="mt-8">
          <PostModal title="Create New Post" />
        </div>
      </main>
    </>
  );
}
