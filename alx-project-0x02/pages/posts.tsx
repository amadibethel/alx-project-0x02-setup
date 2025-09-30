import Head from "next/head";
import Header from "@/components/layout/Header";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  posts: Post[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>Posts - ALX Project 0x02</title>
        <meta name="description" content="Posts page of ALX Project 0x02" />
      </Head>

      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Posts Page 📝</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
          Below are posts fetched from JSONPlaceholder API.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="font-bold text-lg mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

// Data fetching with getStaticProps
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
}
