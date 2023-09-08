import React from "react";
import { usePathname } from "next/navigation";
import ImageWithText from "./ImageWithText";

export default function LatestImageWithTexts() {
  const latestPath = "/latest/latest_";
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl w-full text-center pb-8 text-black">Latest recipes</h2>
        <div className="flex gap-4 justify-center ">
          <ImageWithText src={`${latestPath}1.jpg`} text="French croissant" width="300" height= "200"/>
          <ImageWithText src={`${latestPath}2.jpg`} text="Creamy tomato"width="300" height= "200" />
          <ImageWithText src={`${latestPath}3.jpg`} text="Grilled chicken" width="300" height= "200"/>
          <ImageWithText src={`${latestPath}4.jpg`} text="Raspberry jam" width="300" height= "200"/>
        </div>
      </div>
    </section>
  );
}
