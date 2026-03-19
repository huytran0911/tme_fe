export interface RegisterFormValues {
  fullName: string;
  company?: string;
  address: string;
  gender: "Nam" | "Nu" | "Khac";
  city: string;
  country: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  avatarUrl?: string | null;
}
