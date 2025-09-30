import { UserProps } from "@/interfaces";

export default function UserCard({ user }: { user: UserProps }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg mb-1">{user.name}</h2>
      <p className="text-gray-700">@{user.username}</p>
      <p className="text-gray-600">{user.email}</p>
      {user.phone && <p className="text-gray-600">{user.phone}</p>}
      {user.website && <p className="text-blue-600">{user.website}</p>}
    </div>
  );
}
