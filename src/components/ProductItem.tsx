import React from "react";
import AddToCartButton from "./AddToCartButton";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "../../types";

const ProductItem: React.FC<
  Pick<Product, "id" | "image" | "title" | "price">
> = ({ id, image, title, price }) => {
  return (
    <div className="border border-[#161616]/15 rounded p-4 flex flex-col">
      <Link href={`/products/${id}`} className="block">
        <div className="relative w-full aspect-square mb-3">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        </div>
        <h2 className="text-sm font-medium line-clamp-2 text-[#161616]">
          {title}
        </h2>
      </Link>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#161616]">
          ${price.toFixed(2)}
        </span>
        <AddToCartButton id={id} title={title} price={price} image={image} />
      </div>
    </div>
  );
};

export default ProductItem;
