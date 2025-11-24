import Logo from "./Logo";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-(--hh) bg-black flex items-center justify-between border-b-2 border-(--color2) font-bs md:px-[50px] px-[25px]">
            <Logo />
        </header>
    );
}