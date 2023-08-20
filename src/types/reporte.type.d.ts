export interface Reporte {
  description: string;
  id: string;
  location: string;
  picture: string;
  user: User;
}

export interface User {
  email: string;
  id: string;
  name: string;
}
