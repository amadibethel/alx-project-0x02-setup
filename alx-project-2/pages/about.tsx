return (
<div className="flex flex-col items-center justify-center min-h-screen gap-6">
<h1 className="text-3xl font-bold">About Page</h1>
<p className="text-lg text-gray-600">This is the about page of our app.</p>

<div className="flex gap-4 mt-6">
{/* Small rounded-sm button */}
<Button size="small" shape="rounded-sm">
Small Button
</Button>

{/* Medium rounded-md button */}
<Button size="medium" shape="rounded-md">
Medium Button
</Button>

{/* Large rounded-full button */}
<Button size="large" shape="rounded-full">
Large Button
</Button>
</div>
</div>
);
}


import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">About Us</h1>
      </main>
    </>
  );
}
