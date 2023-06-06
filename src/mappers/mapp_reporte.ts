export interface Reports {
  description: string;
  location: string;
  picture: string;
  user: User;
}

export interface User {
  email: string;
  name: string;
}
