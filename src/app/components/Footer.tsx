import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section className="container mx-auto bg-white">
        <section className="container mx-auto flex items-center justify-between p-4 pl-60">
          <Image className="w-32" src="/logo.png" width={300} height={300} alt="image logo" />
          <section className="container mx-auto flex items-center justify-center gap-20">
            <Link className="text-black hover:text-orange" href="#">
              About us
            </Link>
            <Link className="text-black hover:text-orange" href="/contact">
              Contact
            </Link>
            <Link className="text-black hover:text-orange" href="#">
              FAQ
            </Link>
            <Link className="text-black hover:text-orange" href="#">
              Legal
            </Link>
            <Link className="text-black hover:text-orange" href="#">
              Privacy policy
            </Link>
          </section>
        </section>
        <p className="w-full text-center pb-4 text-black">Copyright @ 2023 youChef</p>
      </section>
    </footer>
  );
}
