import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
        <meta name="description" content="Next.js + TypeScript + Tailwind setup project" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600">
           Welcome to ALX Project 2
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Next.js + TypeScript + Tailwind CSS are ready!
        </p>
      </main>
    </>
  );
}
