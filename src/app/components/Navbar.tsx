'use client'

import Link from "next/link";
import React from "react";
import Image from "next/image";
import {usePathname} from 'next/navigation'


export default function Navbar () {
    const pathname = usePathname ()
    return (
        <nav className='bg-white w-full'>
        <section className='container mx-auto flex items-center justify-between p-2'>
            <Image className='w-32' src="/logo.png" alt='imagine logo' width={300} height={300}/>
            <section className='flex justify-between gap-4'>
                { pathname != '/' && ( <Link className="text-black" href="/">Home</Link> )}
                <Link className='hover:text-main text-black' href="/enter-the-community">Enter the community</Link>
                <Link className='hover:text-main text-black' href="/contact">Contact</Link>
                <section className='ml-4 flex items-center'>
                    <Link href={"https://facebook.com"}>
                        <Image className='w-8 h-8' src={"/Facebook.png"} alt='imagine facebook' width={100} height={100}/>
                    </Link>
                    <Link href={"https://instagram.com"}>
                        <Image className='w-8 h-8' src={"/Instagram.png"} alt='imagine facebook' width={100} height={100}/>
                    </Link>
                    <Link href={"https://twitter.com"}>
                        <Image className='w-8 h-8' src={"/Twitter.png"} alt='imagine facebook' width={100} height={100}/>
                    </Link>
                </section>
            </section>
        </section>
    </nav>
    )
}
