// components/common/PostCard.tsx
import React from "react";

export interface PostCardProps {
  title: string;
  content: string;
  userId: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <p className="text-sm text-gray-500">Posted by User #{userId}</p>
    </div>
  );
};

export default PostCard;

<PostCard 
  title="My First Post" 
  content="This is the content of my first post." 
  userId={1} 
/>