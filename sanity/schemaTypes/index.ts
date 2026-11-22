import type { SchemaTypeDefinition } from "sanity";
import { blockContent } from "./blockContent";
import { post } from "./post";
import { priceList } from "./priceList";

export const schemaTypes: SchemaTypeDefinition[] = [post, blockContent, priceList];
