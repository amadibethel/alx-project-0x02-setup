// interfaces/index.ts

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}


// interfaces/index.ts

export interface PostProps {
  title: string;
  content: string;
  userId: number;
  id?: number; // optional, in case you want to store post ID
}


// interfaces/index.ts
 ["address"]
export interface UserProps {
  id: number;
  name: string;
  email: string;
  username?: string; // optional
  avatarUrl?: string; // optional
  createdAt?: string; // optional, ISO date string
}