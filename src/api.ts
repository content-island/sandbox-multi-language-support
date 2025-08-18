import { createClient } from "@content-island/api-client";
import type { Product, Language } from "./model";

const client = createClient({
  accessToken: "e9b9fb44824c4ed921376e5f2130c71e", // Replace with your actual token
});

export const getProducts = async (language: Language): Promise<Product[]> => {
  const response = await client.getContentList<Product>({
    contentType: "Product",
    language
  });
  return response;
};
