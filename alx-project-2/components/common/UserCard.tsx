// components/common/UserCard.tsx
import React from "react";

interface UserCardProps {
  name: string;
  email: string;
  address: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white max-w-sm">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-600">
        <strong>Address:</strong> {address}
      </p>
    </div>
  );
};

export default UserCard;