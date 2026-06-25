import GlassCard from "../molecules/GlassCard";
import react_logo from "../../assets/img/react_logo.svg";
import react_router_logo from "../../assets/img/react_router_logo.svg";
import sass_logo from "../../assets/img/sass_logo.svg";
import redux_logo from "../../assets/img/redux_logo.svg";
import javascript_logo from "../../assets/img/javascript_logo.svg";
import HTML5_logo from "../../assets/img/HTML5_logo.svg";
import CSS3_logo from "../../assets/img/CSS3_logo.svg";
import yarn_logo from "../../assets/img/yarn_logo.svg";
import jest_logo from "../../assets/img/jest_logo.svg";
import postman_logo from "../../assets/img/postman_logo.svg";
import Swagger_logo from "../../assets/img/Swagger_logo.svg";
import lighthouse_logo from "../../assets/img/lighthouse_logo.svg";
import ohmyfood from "../../assets/img/ohmyfood.webp";
import events724 from "../../assets/img/events724.webp";
import ArgentBank from "../../assets/img/ArgentBank.webp";
import Ninacarducci from "../../assets/img/Ninacarducci.webp";
import Appreact from "../../assets/img/Appreact.webp";
import Print_js from "../../assets/img/Print_js.webp";
import Collapse from "../molecules/collapse";
import Titles from "../atoms/titles";
import { NavLink } from "react-router";
import { Omega } from "lucide-react";


export default function Projects() {
    return (
    <div id="project" className="flex flex-col min-[1044px]:grid min-[1044px]:grid-cols-3" >
        <div className="flex flex-col items-center p-5 bg-primary">
            <Titles title={"Oh My Food"} />
            <GlassCard imageSrc={ohmyfood} alt={"projet ohmyfood"} />
            <Collapse Infos={[{Repo:"https://github.com/Justhiraga/Ohmyfood"}]} Infos2={[{Gpages:"https://justhiraga.github.io/ohmyfood/"}]} pages="/Project-oh-my-food" technologies={[{ src: sass_logo, alt: "sass logo"}, { src: HTML5_logo, alt: "HTML5 logo"}]}/>
        </div>
        <div className="flex flex-col items-center p-5 bg-secondary">
            <Titles title={"724Events"} />
            <GlassCard imageSrc={events724} alt={"projet events724"}/>
            <Collapse Infos={[{Repo:"https://github.com/Justhiraga/Debuggez-une-application-React.JS"}]} pages="/Project-events724" technologies={[{ src: react_logo, alt: "react logo"}, { src : yarn_logo, alt: "yarn logo" }, {src: jest_logo, alt: "jest logo"}]} />
        </div>
        <div className="flex flex-col items-center p-5 bg-primary">
            <Titles title={"Argent Bank"} />
            <GlassCard imageSrc={ArgentBank} alt={"projet argentBank"} />
            <Collapse Infos={[{Repo:"https://github.com/Justhiraga/ArgentBank-Frontend"}]} pages="Project-argentBank" technologies={[{ src: javascript_logo, alt: "javascript logo"}, {src: redux_logo, alt:"redux logo"}, {src: postman_logo, alt:"postman logo"},{src: Swagger_logo, alt:"Swagger logo"},{src: react_router_logo, alt:"react router logo"} ]} />
        </div>
        <div className="flex flex-col items-center text-center p-5 bg-secondary">
            <Titles title={" Optimiser le référencement d'un site "} />
            <GlassCard imageSrc={Ninacarducci} alt={"projet ninacarducci"} />
            <Collapse Infos={[{Repo:"https://github.com/Justhiraga/Optimiser-site-main"}]} Infos2={[{Gpages:"https://justhiraga.github.io/Optimiser-site-main/"}]} pages="Project-nina-carducci" technologies={[{ src: lighthouse_logo , alt: "lighthouse logo"}, { src: HTML5_logo, alt: "HTML5 logo"}] } />
        </div>
        <div className="flex flex-col items-center p-5 bg-primary">
            <Titles title={"App React"} />
            <GlassCard imageSrc={Appreact} alt={"projet appreact"} />
            <Collapse Infos={[{Repo:"https://github.com/Justhiraga/Appli-Web-React"}]} Infos2={[{Gpages:"https://appli-web-react-dmgr.vercel.app"}]} pages="Project-appreact" technologies={[{ src: react_logo, alt: "react logo"}, {src: CSS3_logo, alt:"css logo"}, {src: react_router_logo, alt:"react router logo"}]} />
        </div>
        <div className="flex flex-col items-center p-5 bg-secondary">
            <Titles title={"Print js"} />
            <GlassCard imageSrc={Print_js} alt={"projet print js"} />
            <Collapse Infos={[{Repo:"https://github.com/Justhiraga/Print_it_Javascript"}]} Infos2={[{Gpages:"https://justhiraga.github.io/Print_it_Javascript/"}]} pages="Project-printjs" technologies={[{ src: javascript_logo, alt: "javascript logo"}, {src: HTML5_logo, alt:"HTML5 logo"}, {src: CSS3_logo, alt:"CSS3 logo"}]} />
        </div>
    </div>
    )
}