"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import axios from "axios";

interface Blog {
  title: string;
  slug: string;
  content: string;
  category?: string;
  tags?: string[];
  created_at: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selectedBlog = blogs.find((b) => b.slug === selectedSlug);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/blogs");
        const allBlogs = res.data.data;
        const latestSix = allBlogs.slice(-6).reverse();
        setBlogs(latestSix);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bcs-bg2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow">
          Latest Legal Cases
        </h1>
        <p className="text-gray-300 text-sm mt-2">
          Exclusive legal updates from Saul's desk
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Dialog key={blog.slug}>
            <DialogTrigger asChild>
              <Card
                onClick={() => setSelectedSlug(blog.slug)}
                className="bg-[#2c2c2c]/90 border border-yellow-500/30 hover:border-yellow-300 shadow-md hover:shadow-yellow-500/20 transition cursor-pointer flex flex-col justify-between p-5 text-left"
              >
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-1">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-300 line-clamp-4 whitespace-pre-wrap leading-relaxed">
                    {blog.content}
                  </p>
                </div>
              </Card>
            </DialogTrigger>

            {selectedSlug === blog.slug && selectedBlog && (
              <DialogContent className="bg-[#1f1f1f] text-white border border-yellow-400/20 max-w-xl max-h-[85vh] overflow-y-auto">
                <DialogTitle className="text-xl font-extrabold text-yellow-300">
                  {selectedBlog.title}
                </DialogTitle>
                <div className="text-xs text-gray-400 mb-4">
                  {new Date(selectedBlog.created_at).toLocaleDateString()}
                </div>
                <div className="whitespace-pre-wrap text-gray-200 text-sm leading-relaxed">
                  {selectedBlog.content}
                </div>
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div>
    </section>
  );
}
