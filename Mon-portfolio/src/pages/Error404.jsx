import { NavLink } from "react-router";
import Footer from "../components/molecules/footer";



export default function Error404() {
    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
            <h1 className="flex items-center font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[200px] m-1">404</h1>
            <NavLink to="/" className="flex items-center justify-center ">
                <p className="flex items-center justify-center font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[50px] m-7 ">accueil</p>
            </NavLink>
        </div>
        <Footer />
        </>
    );
}