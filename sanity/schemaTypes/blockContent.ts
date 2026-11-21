import { defineArrayMember, defineType } from "sanity";

export const blockContent = defineType({
  title: "Sadržaj",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normalan", value: "normal" },
        { title: "Naslov 2", value: "h2" },
        { title: "Naslov 3", value: "h3" },
        { title: "Citat", value: "blockquote" },
      ],
      lists: [
        { title: "Lista", value: "bullet" },
        { title: "Numerisana lista", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Podebljano", value: "strong" },
          { title: "Kurziv", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [{ name: "href", type: "url", title: "URL" }],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt tekst" }],
    }),
  ],
});
