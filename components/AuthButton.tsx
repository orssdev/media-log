'use client';

import { useSession, signOut } from 'next-auth/react';
import Button from './Button';
import { useRouter } from 'next/navigation';

export default function AuthButton() {
    const router = useRouter()
    const { data: session } = useSession();
    const className = 'w-[200px] h-[50px] text-[36px]' 

    return session ? (
        <Button className={className} onClick={() => signOut({ callbackUrl: '/' })}>
        Sign Out
        </Button>
    ) : (
        <Button className={className}  onClick={() => router.push('/api/auth/signin')}>
        Sign In
        </Button>
    );
}