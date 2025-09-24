import type { Product } from "../../types";
import ProductItem from "@/components/ProductItem";
import ErrorFallback from "@/components/ErrorFallback";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  try {
    const products = await getProducts();
    return (
      <section className="grid gap-6">
        <h1 className="text-2xl font-semibold text-[#161616]">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>
    );
  } catch (e) {
    return (
      <ErrorFallback
        title="Unable to load products"
        message="We couldn't fetch products right now. Please try again later."
        retryHref="/products"
      />
    );
  }
}
