import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import ErrorFallback from "@/components/ErrorFallback";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const product = await getProduct(params.id);
    return (
      <section className="grid gap-6 md:grid-cols-2">
        <div className="relative w-full aspect-square border border-[#161616]/15 rounded">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="grid gap-4 content-start">
          <Link href="/products" className="text-sm underline w-fit">
            ← Back to products
          </Link>
          <h1 className="text-2xl font-semibold text-[#161616]">
            {product.title}
          </h1>
          <div className="text-sm text-[#161616]/70">{product.category}</div>
          <div className="text-base font-semibold text-[#161616]">
            ${product.price.toFixed(2)}
          </div>
          <p className="text-sm text-[#161616]/80 leading-relaxed">
            {product.description}
          </p>
          <div>
            <AddToCartButton
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </div>
        </div>
      </section>
    );
  } catch (e) {
    return (
      <ErrorFallback
        title="Unable to load product"
        message="We couldn't fetch this product right now. Please try again later."
        retryHref="/products"
      />
    );
  }
}
