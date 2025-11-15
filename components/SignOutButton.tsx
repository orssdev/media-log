"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      style={{ marginLeft: "1rem" }}
    >
      Sign Out
    </button>
  );
}