'use client'

import { useRouter } from "next/navigation";

export default function Logo() {
    const router = useRouter()
    return (
        <h1 className="md:text-[48px] text-[36px] cursor-pointer" onClick={() => router.push('/')}><span className="text-(--color3)">Media</span> <span className="text-(--color2)">Log</span></h1>
    );
}