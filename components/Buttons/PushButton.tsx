'use client'

import { useRouter } from "next/navigation";
import Button from "../Button";

interface PushButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function PushButton({ to, children, className }: PushButtonProps) {
  const router = useRouter();

  return (
    <Button
      className={className}
      onClick={() => router.push(to)}
    >
      {children}
    </Button>
  );
}