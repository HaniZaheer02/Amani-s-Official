import { Link } from "react-router-dom";
import blogHeader from "@/assets/blog-header.jpg";
import tusconLeather from "@/assets/tuscon-leather.jpg";
import collection from "@/assets/collection.jpg";
import product2 from "@/assets/product-2.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Layering Fragrances",
    excerpt: "Discover how combining scents can create a unique olfactory signature that's entirely your own.",
    image: collection,
    date: "March 5, 2026",
    category: "Tips & Guides",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Behind the Scent: Tuscon Leather",
    excerpt: "An exclusive look at the inspiration, ingredients, and craftsmanship behind our bestselling fragrance.",
    image: tusconLeather,
    date: "February 20, 2026",
    category: "Behind the Scenes",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "How to Choose Your Signature Scent",
    excerpt: "A guide to understanding fragrance families, notes, and finding the perfume that speaks to your soul.",
    image: product2,
    date: "February 10, 2026",
    category: "Tips & Guides",
    readTime: "6 min read",
  },
];

const Blog = () => {
  return (
    <main className="pt-24 min-h-screen">
      {/* Header */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <img src={blogHeader} alt="Amani's Fragrances blog" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative container mx-auto px-6 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">Journal</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
            The <span className="text-gradient-gold italic">Blog</span>
          </h1>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="relative overflow-hidden aspect-[16/10] mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-primary font-body text-[10px] tracking-[0.2em] uppercase">{post.category}</span>
                  <span className="text-muted-foreground font-body text-[10px]">•</span>
                  <span className="text-muted-foreground font-body text-[10px]">{post.readTime}</span>
                </div>
                <h2 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors mb-3 cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-muted-foreground font-elegant text-base leading-relaxed mb-4">{post.excerpt}</p>
                <p className="text-muted-foreground font-body text-xs">{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
