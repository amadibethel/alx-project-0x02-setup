import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 0x02</title>
        <meta name="description" content="Next.js Project Setup and Basics" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to ALX Project 0x02
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          This is the homepage of your Next.js project with TypeScript and Tailwind CSS. 
          Use the navigation to explore other pages and features.
        </p>
      </main>
    </>
  );
}
