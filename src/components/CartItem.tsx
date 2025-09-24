"use client";

import Image from "next/image";
import React from "react";
import type { Product } from "../../types";
import { useCartStore } from "@/store/cart";

type CartItemProps = Pick<Product, "id" | "image" | "title" | "price"> & {
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  image,
  title,
  price,
  quantity,
}) => {
  const { items, removeItem, total, clear } = useCartStore((store) => ({
    items: store.items,
    removeItem: store.removeItem,
    total: store.total,
    clear: store.clear,
  }));

  return (
    <li className="flex items-center gap-4 border border-[#161616]/15 rounded p-3">
      <div className="relative w-16 h-16">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-[#161616] line-clamp-1">
          {title}
        </p>
        <p className="text-sm text-[#161616]/70">Qty: {quantity}</p>
      </div>
      <div className="text-sm font-semibold text-[#161616]">
        ${(price * quantity).toFixed(2)}
      </div>
      <button onClick={() => removeItem(id)} className="text-sm underline">
        Remove
      </button>
    </li>
  );
};

export default CartItem;
