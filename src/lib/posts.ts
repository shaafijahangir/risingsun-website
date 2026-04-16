import { ComponentType } from "react";

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
  coverImage: string;
  tags: string[];
};

type PostModule = {
  default: ComponentType;
  frontmatter: PostMeta;
};

const modules = import.meta.glob<PostModule>("../content/blog/*.mdx", { eager: true });

export const getAllPosts = (): PostMeta[] =>
  Object.values(modules)
    .map((m) => m.frontmatter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getPostBySlug = (
  slug: string
): { meta: PostMeta; Component: ComponentType } | null => {
  const entry = Object.values(modules).find((m) => m.frontmatter.slug === slug);
  if (!entry) return null;
  return { meta: entry.frontmatter, Component: entry.default };
};
