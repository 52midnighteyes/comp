export interface ILogin {
  email: string;
  password: string;
}

export interface ISLUG {
  title: string;
  slug: string;
  content: string;
  tags?: string[];
  categories?: string[];
  created_at: string;
}
