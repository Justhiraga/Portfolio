import GlassCard from "../molecules/GlassCard";
import photo_profil from "../../assets/img/photo_profil.jpg";
import github_logo from "../../assets/img/github_logo.png";
import linkedin_logo from "../../assets/img/linkedin_logo.png";
import Titles from "../atoms/titles";


export default function Profil() {
    return (
        <div id="profil">
            <div className="min-h-[57vh] flex flex-col items-center pt10 bg-[#1a1622]">
                <Titles title={"ABADIE Patrick"} />
                <GlassCard imageSrc={photo_profil} alt={"image123"} />
                <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-[#ffffff] text-[25px] m-6" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod</p>
                <div className="flex items-center">
                    <a href="https://github.com/Justhiraga">
                        <img src={github_logo} alt="profil github" className="w-10 h-10 m-3 "/>
                    </a>
                    <a href="https://www.linkedin.com/in/patrick-abadie-9553a4339/?skipRedirect=true">
                        <img src={linkedin_logo} alt="profil github" className="w-10 h-10 m-3 "/>
                    </a>
                </div>
            </div>
        </div>
    )
}