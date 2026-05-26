


export default function Header() {
    return (
        <header className="flex justify-end p-5 bg-[#1a1622] border-b-2 rounded-b-[10px] border-[#ad3d98]">
            <nav className="flex items-center font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-[#ffffff] text-[30px]">
                <ul className="flex gap-5">
                    <li><a href="#project">Projets</a></li>
                    <li><a href="#profil">Profil</a></li>
                </ul>
            </nav>
        </header>
    );
}