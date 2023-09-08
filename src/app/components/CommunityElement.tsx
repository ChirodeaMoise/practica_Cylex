import React from "react";
import Image from "next/image";
import ImageWithText from "./ImageWithText";
export default function CommunityElement({ src, text ,title}: any) {
  return (
    <div className="content-center position-relative ">
      <ImageWithText src={src} text= {title} width = "200" height="300"></ImageWithText>
      <p className="text-black flex flex-col text-orange" > text={text}</p>
    </div>
  );
}
