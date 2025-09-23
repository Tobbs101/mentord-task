"use client";

import { useCartStore } from "@/store/cart";

export default function AddToCartButton({
  id,
  title,
  price,
  image,
}: {
  id: number;
  title: string;
  price: number;
  image: string;
}) {
  const addItem = useCartStore((s) => s.addItem);
  return (
    <button
      onClick={() => addItem({ id, title, price, image })}
      className="text-sm bg-[#161616] text-white px-3 py-2 rounded hover:opacity-90"
    >
      Add to Cart
    </button>
  );
}
