import Head from "next/head";
import Header from "@/components/layout/Header"; // import Header
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - ALX Project 0x02</title>
        <meta name="description" content="About page of ALX Project 0x02" />
      </Head>

      <Header /> {/* Add Header here */}

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          About This Project 
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
          This project demonstrates a Next.js setup with TypeScript and Tailwind CSS. 
          It includes reusable components, routing, and responsive design. 
          Explore other pages via the header navigation.
        </p>

        <Button label="Learn More" onClick={() => alert("Button clicked!")} />
      </main>
    </>
  );
}
