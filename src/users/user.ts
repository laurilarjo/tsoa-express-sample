export interface User {
  id: number;
  email: string;
  address: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
}
