import type { StructureResolver } from "sanity/structure";

// Cenovnik je jedan dokument (singleton), ostalo su obične liste.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Sadržaj")
    .items([
      S.listItem()
        .title("Cenovnik")
        .id("priceList")
        .child(S.document().schemaType("priceList").documentId("priceList")),
      S.divider(),
      ...S.documentTypeListItems().filter((i) => i.getId() !== "priceList"),
    ]);
