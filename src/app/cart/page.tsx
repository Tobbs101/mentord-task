"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cart";

export default function CartPage() {
  const { items, removeItem, total, clear } = useCartStore((s) => ({
    items: s.items,
    removeItem: s.removeItem,
    total: s.total,
    clear: s.clear,
  }));

  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-semibold text-[#161616]">Cart</h1>
      {items.length === 0 ? (
        <p className="text-[#161616]/70">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          <ul className="grid gap-3">
            {items.map((i) => (
              <li key={i.id} className="flex items-center gap-4 border border-[#161616]/15 rounded p-3">
                <div className="relative w-16 h-16">
                  <Image src={i.image} alt={i.title} fill className="object-contain" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#161616] line-clamp-1">{i.title}</p>
                  <p className="text-sm text-[#161616]/70">Qty: {i.quantity}</p>
                </div>
                <div className="text-sm font-semibold text-[#161616]">${(i.price * i.quantity).toFixed(2)}</div>
                <button onClick={() => removeItem(i.id)} className="text-sm underline">Remove</button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-[#161616]/15 pt-4">
            <button onClick={() => clear()} className="text-sm underline">Clear cart</button>
            <div className="text-base font-semibold text-[#161616]">Total: ${total().toFixed(2)}</div>
          </div>
        </div>
      )}
    </section>
  );
}


