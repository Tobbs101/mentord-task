import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-semibold text-[#161616]">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border border-[#161616]/15 rounded p-4 flex flex-col"
          >
            <Link href={`/products/${p.id}`} className="block">
              <div className="relative w-full aspect-square mb-3">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </div>
              <h2 className="text-sm font-medium line-clamp-2 text-[#161616]">
                {p.title}
              </h2>
            </Link>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#161616]">
                ${p.price.toFixed(2)}
              </span>
              <AddToCartButton
                id={p.id}
                title={p.title}
                price={p.price}
                image={p.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
