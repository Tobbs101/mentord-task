"use client";

import { useCartStore } from "@/store/cart";
import CartItem from "@/components/CartItem";

export default function CartPage() {
  const items = useCartStore((store) => store.items);

  const total = useCartStore((store) => store.total);
  const clear = useCartStore((store) => store.clear);

  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-semibold text-[#161616]">Cart</h1>
      {items.length === 0 ? (
        <p className="text-[#161616]/70">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          <ul className="grid gap-3">
            {items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-[#161616]/15 pt-4">
            <button onClick={() => clear()} className="text-sm underline">
              Clear cart
            </button>
            <div className="text-base font-semibold text-[#161616]">
              Total: ${total().toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
