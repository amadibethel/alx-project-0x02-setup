import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Posts</h1>
      </main>
    </>
  );
}



// pages/posts.tsx
import { GetStaticProps } from 'next';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10, // optional: ISR, regenerates page every 10 seconds
  };
};

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}