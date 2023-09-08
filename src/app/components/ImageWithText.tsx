import React from "react";
import Image from "next/image";

export default function ImageWithText({ src, text, width,height }: any) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Image className="w-`${width}px` h-`${height}px` rounded-lg" src={src} alt="imagine cu reteta" width={width} height={height} />
      <p className="text-center w-[150px] text-black">{text}</p>
    </div>
  );
}
