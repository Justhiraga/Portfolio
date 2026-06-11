import GlassCard from "../molecules/GlassCard";
import image123 from "../../assets/img/image123.png";
import image456 from "../../assets/img/image456.png";
import react_logo from "../../assets/img/react_logo.png";
import react_router_logo from "../../assets/img/react_router_logo.png";
import sass_logo from "../../assets/img/sass_logo.png";
import redux_logo from "../../assets/img/redux_logo.png";
import javascript_logo from "../../assets/img/javascript_logo.png";
import HTML5_logo from "../../assets/img/HTML5_logo.png";
import CSS3_logo from "../../assets/img/CSS3_logo.png";
import yarn_logo from "../../assets/img/yarn_logo.png";
import jest_logo from "../../assets/img/jest_logo.png";
import postman_logo from "../../assets/img/postman_logo.png";
import Swagger_logo from "../../assets/img/Swagger_logo.png";
import lighthouse_logo from "../../assets/img/lighthouse_logo.png";
import ohmyfood from "../../assets/img/ohmyfood.png";
import events724 from "../../assets/img/events724.png";
import ArgentBank from "../../assets/img/argentBank.png";
import Ninacarducci from "../../assets/img/ninacarducci.png";
import Appreact from "../../assets/img/Appreact.png";
import Print_js from "../../assets/img/Print_js.png";
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
            <Collapse Repo="https://github.com/Justhiraga/Ohmyfood" Gpages="https://justhiraga.github.io/ohmyfood/" pages="/Project-oh-my-food" technologies={[{ src: sass_logo, alt: "sass logo"}, { src: HTML5_logo, alt: "HTML5 logo"}]}/>
        </div>
        <div className="flex flex-col items-center p-5 bg-secondary">
            <Titles title={"724Events"} />
            <GlassCard imageSrc={events724} alt={"projet events724"}/>
            <Collapse Repo="https://github.com/Justhiraga/Debuggez-une-application-React.JS" Gpages="" pages="/Project-events724" technologies={[{ src: react_logo, alt: "react logo"}, { src : yarn_logo, alt: "yarn logo" }, {src: jest_logo, alt: "jest logo"}]} />
        </div>
        <div className="flex flex-col items-center p-5 bg-primary">
            <Titles title={"Argent Bank"} />
            <GlassCard imageSrc={ArgentBank} alt={"projet argentBank"} />
            <Collapse Repo="https://github.com/Justhiraga/ArgentBank-Frontend" Gpages="" pages="Project-argentBank" technologies={[{ src: javascript_logo, alt: "javascript logo"}, {src: redux_logo, alt:"redux logo"}, {src: postman_logo, alt:"postman logo"},{src: Swagger_logo, alt:"Swagger logo"},{src: react_router_logo, alt:"react router logo"} ]} />
        </div>
        <div className="flex flex-col items-center text-center p-5 bg-secondary">
            <Titles title={" Optimiser le référencement d'un site "} />
            <GlassCard imageSrc={Ninacarducci} alt={"projet ninacarducci"} />
            <Collapse Repo="https://github.com/Justhiraga/Optimiser-site-main" Gpages="https://justhiraga.github.io/Optimiser-site-main/" pages="Project-nina-carducci" technologies={[{ src: lighthouse_logo , alt: "lighthouse logo"}, { src: HTML5_logo, alt: "HTML5 logo"}] } />
        </div>
        <div className="flex flex-col items-center p-5 bg-primary">
            <Titles title={"App React"} />
            <GlassCard imageSrc={Appreact} alt={"projet appreact"} />
            <Collapse Repo="https://github.com/Justhiraga/Appli-Web-React" Gpages="" pages="Project-appreact" technologies={[{ src: react_logo, alt: "react logo"}, {src: CSS3_logo, alt:"css logo"}, {src: react_router_logo, alt:"react router logo"}]} />
        </div>
        <div className="flex flex-col items-center p-5 bg-secondary">
            <Titles title={"Print js"} />
            <GlassCard imageSrc={Print_js} alt={"projet print js"} />
            <Collapse Repo="https://github.com/Justhiraga/Print_it_Javascript" Gpages="https://justhiraga.github.io/Print_it_Javascript/" pages="Project-printjs" technologies={[{ src: javascript_logo, alt: "javascript logo"}, {src: HTML5_logo, alt:"HTML5 logo"}, {src: CSS3_logo, alt:"CSS3 logo"}]} />
        </div>
    </div>
    )
}