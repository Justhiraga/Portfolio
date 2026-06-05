import Footer from "../components/molecules/footer";
import Header from "../components/molecules/header";
import GlassCard from "../components/molecules/GlassCard";
import github_logo from "../assets/img/github_logo.png";
import figmm_logo from "../assets/img/figma_logo.png";
import ohmyfood from "../assets/img/ohmyfood.png";
import Titles from "../components/atoms/titles";
import { BookOpenText } from "lucide-react";
import { useEffect } from "react";



export default function Project1() {
    useEffect(() => {
        document.title = "Projet ohmyfood";
    })
    return (
        <div>
            <Header  />
            <div className="min-h-[57vh] flex flex-col items-center pt10 bg-[#1a1622]">
                            <Titles title={"Projet : Oh My Food"} />
                            <GlassCard imageSrc={ohmyfood} alt={"projet ohmyfood"} />
                            <div className="flex items-center">
                                <a href="https://github.com/Justhiraga/Ohmyfood">
                                    <img src={github_logo} alt="projet github" className="w-10 h-10 m-3 "/>
                                </a>
                                <a href="https://justhiraga.github.io/ohmyfood/">
                                    <BookOpenText size={40} className="w-10 h-10 m-3" color="#ffffff" alt="github pages" />
                                </a>
                                <a href="https://www.figma.com/design/t4449fzDnwGYmzuwQdu87V/Maquettes-Ohmyfood--mobile-et-desktop-?node-id=0-1&p=f&t=5L0PXeE0sAVdX89r-0">
                                    <img src={figmm_logo} alt="maquette figma" className="w-10 h-10 m-3 "/>
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