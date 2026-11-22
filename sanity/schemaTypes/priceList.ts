import { defineArrayMember, defineField, defineType } from "sanity";

// Redosled sekcija i stavki se menja prevlačenjem (drag & drop) u Studiju.
export const priceList = defineType({
  name: "priceList",
  title: "Cenovnik",
  type: "document",
  fields: [
    defineField({
      name: "sections",
      title: "Sekcije cenovnika",
      description: "Prevucite sekcije da promenite redosled.",
      type: "array",
      of: [
        defineArrayMember({
          name: "priceSection",
          title: "Sekcija",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Naziv sekcije",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "note",
              title: "Napomena (opciono)",
              type: "string",
            }),
            defineField({
              name: "items",
              title: "Stavke",
              description: "Prevucite stavke da promenite redosled.",
              type: "array",
              of: [
                defineArrayMember({
                  name: "priceItem",
                  title: "Stavka",
                  type: "object",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Naziv usluge",
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: "price",
                      title: "Cena",
                      description: 'npr. "4.000 rsd", "40€" ili "na upit"',
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                  ],
                  preview: { select: { title: "label", subtitle: "price" } },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: "title", items: "items" },
            prepare: ({ title, items }) => ({
              title,
              subtitle: `${items?.length ?? 0} stavki`,
            }),
          },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Cenovnik" }) },
});
