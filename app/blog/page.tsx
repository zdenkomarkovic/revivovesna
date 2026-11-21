import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { getPosts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Saveti i novosti o trajnoj šminki, tetovažama, tretmanima lica i tela — Studio Revive Beograd.",
  url: `${SITE_URL}/blog`,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("sr-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">
        <div className="pt-36 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Saveti i novosti
            </span>
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl text-cream font-light leading-tight">
            Blog
          </h1>
        </div>

        <div className="w-full h-px bg-border" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          {posts.length === 0 ? (
            <p className="text-muted">Uskoro novi tekstovi.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug}`} className="group block">
                  {post.mainImage?.asset && (
                    <div className="relative aspect-[4/3] overflow-hidden mb-6">
                      <Image
                        src={urlFor(post.mainImage).width(900).height(675).fit("crop").url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">
                    {formatDate(post.publishedAt)}
                  </span>
                  <h2 className="font-serif text-3xl text-cream font-light mt-3 mb-3 leading-tight group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-muted text-base leading-7">{post.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
