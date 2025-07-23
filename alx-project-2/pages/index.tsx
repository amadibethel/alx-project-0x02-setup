import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to ALX Project</title>
      </Head>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome to the Next.js Project Setup and Basics!
        </h2>
        <p className="mt-4 text-gray-600">
          This project was scaffolded using Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
