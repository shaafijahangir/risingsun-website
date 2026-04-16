declare module "*.mdx" {
  import { ComponentType } from "react";
  const Component: ComponentType;
  export default Component;
  export const frontmatter: {
    title: string;
    description: string;
    date: string;
    slug: string;
    coverImage: string;
    tags: string[];
  };
}
