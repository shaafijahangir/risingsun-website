import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { getPostBySlug } from "@/lib/posts";
import { CONTACT } from "@/lib/contact";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug ?? "");

  if (!post) return <Navigate to="/blog" replace />;

  const { meta, Component } = post;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    image: meta.coverImage,
    author: {
      "@type": "Person",
      name: CONTACT.founderName,
    },
    publisher: {
      "@type": "Organization",
      name: "Rising Sun Travel",
      url: "https://www.risingsunthailand.com",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{meta.title} | Rising Sun Travel</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.coverImage} />
        <meta property="og:url" content={`https://www.risingsunthailand.com/blog/${meta.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={meta.date} />
        <link rel="canonical" href={`https://www.risingsunthailand.com/blog/${meta.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />
      <ErrorBoundary>
        {/* Hero */}
        <div className="relative h-64 md:h-96">
          <img
            src={meta.coverImage}
            alt={meta.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end container-custom pb-8">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-white/80 hover:text-white hover:bg-white/10 mb-4 self-start -ml-2"
            >
              <Link to="/blog">
                <ArrowLeft size={16} className="mr-1" /> All Guides
              </Link>
            </Button>
            {meta.tags[0] && (
              <span className="inline-block bg-thai-gold text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-3 self-start">
                {meta.tags[0]}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-white max-w-3xl leading-tight">
              {meta.title}
            </h1>
            <div className="flex items-center gap-1.5 text-white/70 text-sm mt-3">
              <Calendar size={13} />
              <span>
                {new Date(meta.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="text-white/40 mx-1">·</span>
              <span>By {CONTACT.founderName}</span>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="container-custom max-w-3xl py-12">
          <article className="prose prose-lg prose-headings:font-heading prose-headings:text-brand-navy prose-a:text-thai-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-brand-navy prose-li:text-muted-foreground prose-p:text-muted-foreground prose-p:leading-relaxed">
            <Component />
          </article>
        </div>

        {/* CTA */}
        <section className="section-padding bg-brand-navy text-white">
          <div className="container-custom text-center max-w-2xl">
            <h2 className="text-3xl font-bold font-heading text-thai-gold mb-4">
              Ready to Plan Your Trip?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Book a free 15-minute call with Salim. He'll answer your questions, suggest the right
              options for your budget, and handle everything from there.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-thai-gold hover:bg-thai-gold/90 text-white gap-2"
            >
              <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
                Book a Free Call <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </section>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
