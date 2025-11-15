'use client'

import Button from "@/components/Button";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      redirect: true,
      username,
      password,
      callbackUrl: "/",
    });
  };

  const input_className = 'border border-(--color2)';

  return (
    <div className="page">
        <div className="center-div pt-20 flex-col gap-[50px]">
          <h1 className="font-e text-[36px]">Sign In</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[50px] items-center">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={input_className}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={input_className}
                required
              />
              <Button type="submit" className="w-[200px] h-[30px]">Sign In</Button>
          </form>
        </div>
    </div>
  );
}