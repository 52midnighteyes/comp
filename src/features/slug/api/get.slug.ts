import axios from "axios";

export interface Blog {
  title: string;
  slug: string;
  content: string;
  category?: string;
  tags?: string[];
  created_at: string;
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
  const res = await fetch(`http://localhost:8000/blogs/${slug}`, {
    next: { revalidate: 60 },
  });

  console.log(res);

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  const json = await res.json();
  return json.data.data;
}

export async function getAllBlog(): Promise<Blog[]> {
  const response = await axios.get("http://localhost:8000/blogs");
  return response.data.data;
}
