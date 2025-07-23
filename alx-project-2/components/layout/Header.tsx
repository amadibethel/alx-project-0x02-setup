import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white px-6 py-4">
      <nav className="flex space-x-6 text-white font-medium">
        <Link href="/" className="hover:underline">Root</Link>
        <Link href="/home" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/posts" className="hover:underline">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
