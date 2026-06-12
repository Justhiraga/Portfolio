import GlassCard from "../molecules/GlassCard";
import photo_profil from "../../assets/img/photo_profil.jpg";
import github_logo from "../../assets/img/github_logo.png";
import linkedin_logo from "../../assets/img/linkedin_logo.png";
import Titles from "../atoms/titles";
import Comp from "../molecules/comp";


export default function Profil() {
    return (
        <div id="profil">
            <div className="min-h-[57vh] flex flex-col items-center pt10 bg-primary">
                <Titles title={"ABADIE Patrick"} />
                <GlassCard imageSrc={photo_profil} alt={"Photo de profil"} />
                <div className="flex items-center">
                    <a href="https://github.com/Justhiraga">
                        <img src={github_logo} alt="profil github" className="w-10 h-10 m-3 "/>
                    </a>
                    <a href="https://www.linkedin.com/in/patrick-abadie-9553a4339/?skipRedirect=true">
                        <img src={linkedin_logo} alt="profil github" className="w-10 h-10 m-3 "/>
                    </a>
                </div>
                <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-center text-white text-[25px] m-6" >
                    Passionné par le développement web, j'exercé des métiers dans l'environnement SAPAT, mais je me suis reconverti en 2024 dans le développement web. <br /> <br />   

                    J'ai donc décidé d'intégrer la formation d'intégrateur web niveau bac +2 chez Openclassrooms suite à laquelle j'ai appris et aquis des compétences indispensables au développement web tel que :<br /> <br />  
                    
                    HTML, CSS, JavaScript, React, React-router, Redux, Sass css et tailindcss.<br /> <br /> Je suis très enthousiaste de poursuivre mes apprentissages dans le domaine du web et de découvrir de nouvelles opportunités.</p>
            </div>
            <Comp />
        </div>
    )
}