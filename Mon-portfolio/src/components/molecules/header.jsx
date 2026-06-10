import { Link, useLocation, NavLink } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function Header() {
    const location = useLocation();

    return (
        <header className="flex justify-end p-5 bg-primary border-b-2 border-quaternary">
            <nav className="flex items-center font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[30px]">
                <ul className="flex gap-5">
                    {location.pathname === "/" ? (
                        <>
                            <li><a href="#project">Projets</a></li>
                            <li><a href="#profil">Profil</a></li>
                        </>
                    ) : (
                        <>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}