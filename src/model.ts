import type { Media } from "@content-island/api-client";

export type Language = "en" | "es";

export interface Product {
  id: string;
  language: Language;
  name: string;
  description: string;
  price?: number;
  image: Media;
}
