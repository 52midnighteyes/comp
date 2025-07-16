import axios from "axios";
import { IBlogPost } from "@/app/pages/create-blog/components/types";

export async function postBlogSlug(data: IBlogPost): Promise<IBlogPost> {
  console.log(data);
  const response = await axios.post("http://localhost:8000/blogs", data);
  return response.data.data;
}
