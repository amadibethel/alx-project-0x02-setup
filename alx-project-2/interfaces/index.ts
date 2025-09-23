// Post interface for posts.tsx and PostCard
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Address sub-interface for User
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

// Company sub-interface for User
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// User interface for users.tsx and UserCard
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// Optional example interface for general purposes
export interface Example {
  id: number;
  name: string;
}
