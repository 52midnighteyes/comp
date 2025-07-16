import * as Yup from "yup";

export const blogValidationSchema = Yup.object({
  title: Yup.string().required("Title is required."),
  slug: Yup.string().required("Slug is required."),
  content: Yup.string().required("Content is required."),
  category: Yup.string().required("Category is required."),
  tag: Yup.string().required("Tag is required."),
});
