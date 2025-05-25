import { z } from "zod";

// TODO: add more types when needed
export enum SourceType {
  PLUGIN = "PLUGIN",
  WORDPRESS = "WORDPRESS", 
  PRESTASHOP = "PRESTASHOP",
  WOOCOMMERCE = "WOOCOMMERCE",
  SHOPIFY = "SHOPIFY",
  API = "API",
  WHATSAPP = "WHATSAPP",
  SLACK = "SLACK",
  DISCORD = "DISCORD", 
  FAQ = "FAQ",
  TELEGRAM = "TELEGRAM",
  UNKNOWN = "UNKNOWN",
  DEFAULT = "DEFAULT",
  MATCHING = "MATCHING",
  WEBFLOW = "WEBFLOW",
  ISOLATED_AGENT = "ISOLATED_AGENT",
  IMPORTED_PRODUCT = "IMPORTED_PRODUCT",
  RSS = "RSS",
  AIRTABLE = "AIRTABLE",
  DOCUSAURUS = "DOCUSAURUS"
}

export interface FilterParams {
    query: string;
    categories?: string[];
    sources?: SourceType[];
    maxDistance?: number;
    limit?: number;
}

export const FilterParamsSchema = z.object({
    query: z.string().min(3, { message: "Query must be at least 3 characters long" }).nonempty('Query is required'),
    categories: z.array(z.string()).optional(),
    sources: z.array(z.nativeEnum(SourceType)).optional(),
    maxDistance: z.number().min(0.01).max(1).default(0.2),
    limit: z.number().min(1).max(20).default(10)
});

export interface DocumentPublic {
    id: string;
    externalId: string;
    title: string | null;
    content: string;
    sourceType: SourceType;
    categoryId: string | null;
  }

export interface DocumentPublicResponse extends DocumentPublic {
    _distance: number;
}

