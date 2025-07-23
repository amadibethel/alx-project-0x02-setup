import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl font-semibold">ALX Project - Next.js Setup</h1>
       <nav className="flex space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/home" className="hover:underline">/Home</Link>
        <Link href="/about" className="hover:underline">/About</Link>
      </nav>
    </header>
  );
};

export default Header;