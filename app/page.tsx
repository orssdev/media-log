import AuthButton from "@/components/AuthButton";
import MediaCounter from "@/components/MediaCounter";

export default function Home() {

  return (
    <div className="page">
      <div className="flex items-center flex-col py-[50px]">
        <div className="w-full center-div flex-wrap gap-5 mb-[50px]">
          <MediaCounter media={'Movies'} count={372} route="/movie"/>
          <MediaCounter media={'Games'} count={294} route="/game"/>
          <MediaCounter media={'TV Shows'} count={420} route="/tv"/>
        </div>
      <AuthButton />
      </div>
    </div>
  );
}
