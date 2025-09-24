"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cart";
import Portal from "@/components/Portal";

function CartIcon() {
  const count = useCartStore((s) => s.count());
  return (
    <Link href="/cart" className="relative inline-flex items-center">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#161616" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L21 6H6" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] rounded-full bg-red-600 text-white text-[10px] leading-[18px] text-center px-[4px]">
          {count}
        </span>
      )}
    </Link>
  );
}

function MobileSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <Portal>
      <div className="fixed inset-0 z-50">
        <div className="absolute inset-0 bg-black/30" onClick={onClose} />
        <aside className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-6 grid content-start gap-4">
          <h3 className="text-sm font-semibold text-[#161616] mb-2">Menu</h3>
          <Link href="/" className="hover:underline" onClick={onClose}>Home</Link>
          <Link href="/products" className="hover:underline" onClick={onClose}>Products</Link>
        </aside>
      </div>
    </Portal>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full border-b border-[#161616]/20 bg-white">
      <nav className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-3 items-center">
        <button className="sm:hidden justify-self-start" aria-label="Open menu" onClick={() => setOpen(true)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#161616" strokeWidth="1.8" strokeLinecap="round">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div className="hidden sm:flex justify-center gap-6 text-sm col-start-1 col-end-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
        </div>
        <div className="sm:hidden" />
        <div className="justify-self-center sm:justify-self-center sm:flex hidden gap-6 text-sm" />
        <div className="justify-self-end">
          <CartIcon />
        </div>
      </nav>
      <MobileSidebar open={open} onClose={() => setOpen(false)} />
    </header>
  );
}


