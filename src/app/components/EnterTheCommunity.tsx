import React from "react";
import CommunityElement from "./CommunityElement";
import { usePathname } from 'next/navigation';

const communityPath = "/community_";

export default function EnterTheCommunity() {
  return (
    <section className="bg-white/80 py-8">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl w-full text-center pb-8">Enter The Community</h2>
        {/* Center the CommunityElement components */}
        <div className="flex items-center justify-center gap-32">
          <CommunityElement src={`${communityPath}1.png`} title="Find recipe" text="random text" />
          <CommunityElement src={`${communityPath}2.png`} title="Review recipe" text="random text" />
          <CommunityElement src={`${communityPath}3.png`} title="Add recipe" text="random text" />
        </div>
      </div>
    </section>
  );
}
