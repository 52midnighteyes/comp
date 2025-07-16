import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/features/slug/api/get.slug";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: Props) {
  try {
    const blog = await getBlogBySlug(params.slug);

    return (
      <main className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(blog.created_at).toLocaleDateString()}
        </p>
        <p className="mb-2 text-blue-600">Kategori: {blog.category}</p>
        <div className="mb-4 whitespace-pre-wrap">{blog.content}</div>
        <div className="space-x-2 text-sm text-gray-600">
          {blog.tags?.map((tag: string) => (
            <span
              key={tag}
              className="inline-block bg-gray-100 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </main>
    );
  } catch (err) {
    notFound();
  }
}
