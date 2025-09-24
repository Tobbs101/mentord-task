import React from "react";
import AddToCartButton from "./AddToCartButton";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "../../types";

const ProductItem: React.FC<
  Pick<Product, "id" | "image" | "title" | "price">
> = ({ id, image, title, price }) => {
  return (
    <div className="group border border-[#161616]/15 rounded p-4 flex flex-col items-center justify-between">
      <div className="relative aspect-square mb-3 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        />
      </div>
      <div className="w-full mt-2">
        <Link href={`/products/${id}`} className="block w-fit">
          <h2 className="text-sm font-medium text-[#161616]">
            {title}
            <span className="block h-px bg-[#161616] w-0 transition-all duration-300 group-hover:w-full" />
          </h2>
        </Link>
        <div className="mt-5 flex items-center justify-between w-full">
          <span className="text-sm font-semibold text-[#161616]">
            ${price.toFixed(2)}
          </span>
          <AddToCartButton id={id} title={title} price={price} image={image} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
