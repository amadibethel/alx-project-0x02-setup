import React from "react";

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-2 text-gray-600">This is the home page of the site.</p>
    </div>
  );
};

export default HomePage;


// pages/home.tsx
import Card from "@/components/common/Card";

export default function Home() {
  return (
    <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card 
        title="Luxury Villa" 
        content="A beautiful villa with a private pool and ocean view." 
      />
      <Card 
        title="City Apartment" 
        content="A modern apartment located in the heart of the city." 
      />
      <Card 
        title="Countryside Cottage" 
        content="A cozy cottage surrounded by nature and fresh air." 
      />
    </div>
  );
}


import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      </main>
    </>
  );
}