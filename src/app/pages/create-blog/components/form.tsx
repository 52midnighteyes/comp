"use client";

import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IBlogPost } from "./types";
import { blogValidationSchema } from "./schema";
import { postBlogSlug } from "@/features/slug/api/post.slug";

const initialValues: IBlogPost = {
  title: "",
  slug: "",
  content: "",
  category: "",
  tag: "",
};

export default function CreateBlogForm() {
  const handleSubmit = async (values: IBlogPost) => {
    try {
      await postBlogSlug(values);
      alert("Blog berhasil dikirim!");
    } catch (err) {
      console.error("Gagal kirim blog:", err);
      alert("Gagal kirim blog");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Formik
        initialValues={initialValues}
        validationSchema={blogValidationSchema}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<IBlogPost>) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          } = props;

          return (
            <Form className="space-y-6">
              <div>
                <label htmlFor="title" className="block mb-1 font-medium">
                  TITLE
                </label>
                <Input
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.title && errors.title && (
                  <div className="text-red-500 text-sm">{errors.title}</div>
                )}
              </div>

              <div>
                <label htmlFor="slug" className="block mb-1 font-medium">
                  SLUG
                </label>
                <Input
                  id="slug"
                  name="slug"
                  value={values.slug}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.slug && errors.slug && (
                  <div className="text-red-500 text-sm">{errors.slug}</div>
                )}
              </div>

              <div>
                <label htmlFor="content" className="block mb-1 font-medium">
                  CONTENT
                </label>
                <Textarea
                  id="content"
                  name="content"
                  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={8}
                />
                {touched.content && errors.content && (
                  <div className="text-red-500 text-sm">{errors.content}</div>
                )}
              </div>

              <div>
                <label htmlFor="category" className="block mb-1 font-medium">
                  CATEGORY
                </label>
                <Input
                  id="category"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label htmlFor="tag" className="block mb-1 font-medium">
                  TAG
                </label>
                <Input
                  id="tag"
                  name="tag"
                  value={values.tag}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Mengirim..." : "Submit Blog"}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
