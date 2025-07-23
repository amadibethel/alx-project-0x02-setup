import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
      <p className="text-gray-700 mt-2">{body}</p>
      <p className="text-sm text-gray-500 mt-2">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;
