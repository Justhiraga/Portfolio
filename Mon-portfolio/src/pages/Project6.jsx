import Footer from "../components/molecules/footer";
import Header from "../components/molecules/header";
import GlassCard from "../components/molecules/GlassCard";
import github_logo from "../assets/img/github_logo.png";
import figmm_logo from "../assets/img/figma_logo.png";
import Print_js from "../assets/img/Print_js.png";
import Titles from "../components/atoms/titles";
import { BookOpenText } from "lucide-react";
import { useEffect } from "react";



export default function Project6() {
    useEffect(() => {
        document.title = "Projet : Premiers pas sur le langage JavaScript  ";
    })
    return (
        <div>
            <Header  />
            <div className="min-h-[57vh] flex flex-col items-center pt10 bg-primary">
                            <Titles title={"Projet : Print js"} />
                            <GlassCard imageSrc={Print_js} alt={"projet print js"} />
                            <div className="flex items-center">
                                <a href="https://github.com/Justhiraga/Print_it_Javascript">
                                    <img src={github_logo} alt="projet github" className="w-10 h-10 m-3 "/>
                                </a>
                                <a href="https://justhiraga.github.io/Print_it_Javascript/">
                                    <BookOpenText size={40} className="w-10 h-10 m-3" color="#ffffff" alt="github pages" />
                                </a>
                            </div>
                            <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-[#ffffff] text-[25px] m-6" >
                                Description du projet
                            </p>
                        </div>
            <Footer />
        </div>
    );
}