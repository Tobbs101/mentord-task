import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid gap-6 sm:gap-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-5xl font-semibold text-[#161616] max-w-2xl leading-tight">
        Discover timeless essentials.
      </h1>
      <p className="text-sm sm:text-base max-w-xl text-[#161616]/80">
        Browse a curated selection from the Fake Store API. Add items to your
        cart and check out when you are ready.
      </p>
      <div>
        <Link
          href="/products"
          className="inline-block bg-[#161616] text-white px-5 py-3 text-sm rounded hover:opacity-90"
        >
          View Products
        </Link>
      </div>
    </section>
  );
}
