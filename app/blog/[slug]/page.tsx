import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "next-sanity";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { getPost, getPosts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    image: post.mainImage?.asset
      ? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
      : undefined,
  });
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-muted text-base leading-8 mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif text-4xl text-cream font-light mt-12 mb-6 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-2xl text-cream font-light mt-10 mb-4 leading-tight">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l border-gold pl-6 my-8 text-cream font-serif text-2xl italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 text-muted leading-8">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 text-muted leading-8">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="text-cream font-medium">{children}</strong>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-gold underline underline-offset-4 hover:text-cream"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urlFor(value).width(1400).url()}
          alt={value.alt || ""}
          className="w-full h-auto"
          loading="lazy"
        />
      </figure>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("sr-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen">
        <article className="pt-36 pb-20 px-6 lg:px-10 max-w-3xl mx-auto">
          <Link href="/blog" className="text-gold text-xs tracking-[0.3em] uppercase">
            ← Blog
          </Link>
          <h1 className="font-serif text-5xl lg:text-6xl text-cream font-light leading-tight mt-8 mb-4">
            {post.title}
          </h1>
          <span className="text-muted text-sm">{date}</span>
          <div className="w-8 h-px bg-gold my-8" />

          {post.mainImage?.asset && (
            <div className="relative aspect-[16/10] overflow-hidden mb-12">
              <Image
                src={urlFor(post.mainImage).width(1400).height(875).fit("crop").url()}
                alt={post.mainImage.alt || post.title}
                fill
                priority
                unoptimized
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <PortableText value={post.body as never} components={components} />
        </article>
      </main>
      <Footer />
    </>
  );
}
