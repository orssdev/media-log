import MediaCounter from "@/components/MediaCounter";

export default function Home() {

  return (
    <div className="bg-linear-to-b to-[#210304] from-[#000000] w-full min-h-[800px] h-auto bg-(--color1) flex items-center flex-col">
      <div className="w-full min-h-(--MediaCounter) h-auto flex justify-around">
        <MediaCounter media={'Movies'} count={372} route="/movie"/>
        <MediaCounter media={'Games'} count={294} route="/game"/>
        <MediaCounter media={'TV Shows'} count={420} route="/tv"/>
      </div>
    </div>
  );
}
