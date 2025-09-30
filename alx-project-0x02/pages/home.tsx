import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - ALX Project 0x02</title>
        <meta name="description" content="Home page of ALX Project 0x02" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the Home Page 
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          This is the Home page of your Next.js project. Use the header to navigate 
          to other pages like About, Posts, and Users.
        </p>
      </main>
    </>
  );
}
