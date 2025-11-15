import MediaCounter from "@/components/MediaCounter";
import SignOutButton from "@/components/SignOutButton";
import { signOut } from "next-auth/react";

export default function Home() {

  return (
    <div className="page">
      <div className="flex items-center flex-col">
        <div className="w-full center-div flex-wrap gap-5">
          <MediaCounter media={'Movies'} count={372} route="/movie"/>
          <MediaCounter media={'Games'} count={294} route="/game"/>
          <MediaCounter media={'TV Shows'} count={420} route="/tv"/>
        </div>
      </div>
      <SignOutButton />
    </div>
  );
}
