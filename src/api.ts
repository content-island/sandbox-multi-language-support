import { createClient } from "@content-island/api-client";
import type { Product, Language } from "./model";

const client = createClient({
  accessToken: import.meta.env.VITE_CONTENT_ISLAND_SECRET_TOKEN, // Replace with your actual token
});

export const getProducts = async (language: Language): Promise<Product[]> => {
  const response = await client.getContentList<Product>({
    contentType: "Product",
    language
  });
  return response;
};
