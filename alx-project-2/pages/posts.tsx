import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">Latest Posts</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map(post => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default PostsPage;
