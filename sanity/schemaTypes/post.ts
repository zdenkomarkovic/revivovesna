import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog tekst",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naslov",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (adresa)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Datum objave",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Kratak opis",
      type: "text",
      rows: 3,
      validation: (r) => r.max(300),
    }),
    defineField({
      name: "mainImage",
      title: "Glavna slika",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt tekst" }],
    }),
    defineField({ name: "body", title: "Tekst", type: "blockContent" }),
  ],
  orderings: [
    {
      title: "Najnoviji prvo",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "mainImage" },
  },
});
