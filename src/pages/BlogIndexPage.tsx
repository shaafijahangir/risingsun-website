import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { useI18n } from "@/i18n/context";

const posts = getAllPosts();

const BlogIndexPage = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Travel & Medical Tourism Guides | Rising Sun Travel Blog</title>
        <meta
          name="description"
          content="Expert guides on Thailand travel, medical tourism, and local insights from Salim Jahangir, with 20+ years of on-the-ground experience in Bangkok and beyond."
        />
        <meta property="og:title" content="Rising Sun Travel Blog" />
        <meta
          property="og:description"
          content="Thailand travel guides and medical tourism advice from a local expert with 20+ years of experience."
        />
        <meta property="og:url" content="https://www.risingsunthailand.com/blog" />
        <link rel="canonical" href="https://www.risingsunthailand.com/blog" />
      </Helmet>

      <Header />
      <ErrorBoundary>
        {/* Hero */}
        <section className="section-padding bg-brand-navy text-white">
          <div className="container-custom text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
              <BookOpen size={18} className="text-thai-gold" />
              <span className="font-medium">{t("common.blogGuides")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Thailand Travel Guides
            </h1>
            <p className="text-white/85 text-lg max-w-2xl mx-auto">
              Practical, honest advice on visiting Thailand, written from 20+ years of living and
              working here. Medical tourism, destinations, culture, and everything in between.
            </p>
          </div>
        </section>

        {/* Post grid */}
        <section className="section-padding">
          <div className="container-custom">
            {posts.length === 0 ? (
              <p className="text-center text-muted-foreground py-20">No posts yet. Check back soon.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <h2 className="font-bold text-brand-navy text-lg leading-snug mb-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {post.description}
                      </p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-1.5 text-thai-gold hover:text-thai-gold/80 font-semibold text-sm transition-colors group"
                      >
                        {t("blog.readArticle")} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default BlogIndexPage;
