'use client'

import { useRouter } from "next/navigation";
import Button from "./Button";
import { useSession } from "next-auth/react";

interface Props {
    media: String;
    count: number;
    route: string;
}

export default function MediaCounter(prop: Props) {
    const router = useRouter();
    const { data: session } = useSession();

    const handleClick = () => {
        router.push(prop.route)
    }

    return (
        <div className="w-(--mc) h-(--mc) flex flex-col justify-center items-center gap-[50px] font-bs">
            <span className="flex flex-col justify-center items-center gap-[25px] cursor-pointer " onClick={handleClick}>
                <h1 className="text-[56px]">{prop.media}</h1>
                <h2 className="text-[48px]">{prop.count}</h2>
            </span>
            {session && (
                <Button className="w-[200px] h-[50px] text-[36px]" onClick={() => router.push(prop.route + '/add')}>Add</Button>
            )}
        </div>  
    );
}