"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let el = document.getElementById("portal-root");
    if (!el) {
      el = document.createElement("div");
      el.id = "portal-root";
      document.body.appendChild(el);
    }
    setContainer(el);
    setMounted(true);
    return () => {
      // keep the node for reuse across page transitions
    };
  }, []);

  if (!mounted || !container) return null;
  return createPortal(children, container);
}


