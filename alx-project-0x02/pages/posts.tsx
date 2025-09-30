import Head from "next/head";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts - ALX Project 0x02</title>
        <meta name="description" content="Posts page of ALX Project 0x02" />
      </Head>

      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Posts Page
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          This page will display posts fetched from the API. Use the navigation above to visit other pages.
        </p>
      </main>
    </>
  );
}
