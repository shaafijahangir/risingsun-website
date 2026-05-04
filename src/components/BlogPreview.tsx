import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getAllPosts } from "@/lib/posts";
import { useI18n } from "@/i18n/context";

const posts = getAllPosts().slice(0, 3);

const BlogPreview = () => {
  const { t } = useI18n();

  if (posts.length === 0) return null;

  return (
    <section className="section-padding bg-brand-offwhite">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            {t("blog.previewHeading")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("blog.previewSubheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="overflow-hidden border-0 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {post.tags[0] && (
                  <span className="absolute top-3 left-3 bg-thai-gold text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.tags[0]}
                  </span>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                  <Calendar size={12} />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-bold text-brand-navy text-lg leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {post.description}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex items-center gap-1.5 text-thai-gold hover:text-thai-gold/80 font-semibold text-sm transition-colors"
                >
                  {t("blog.readArticle")} <ArrowRight size={14} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-thai-gold transition-colors"
          >
            {t("blog.readAll")} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
