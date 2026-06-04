import { getStoreProducts } from "@/lib/store-products";
import StoreClient from "./StoreClient";

export const metadata = {
  title: "Store | Lick",
  description: "Shop Lick pints, scoop packs, and merch.",
};

export default async function StorePage() {
  const products = await getStoreProducts();

  return <StoreClient products={products} />;
}
