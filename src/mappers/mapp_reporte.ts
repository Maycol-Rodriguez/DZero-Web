export interface Reporte {
  description: string;
  location: string;
  picture: string;
  user: User;
  id: string;
}

export interface User {
  email: string;
  name: string;
  id: string;
}
