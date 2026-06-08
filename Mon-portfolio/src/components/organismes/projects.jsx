import GlassCard from "../molecules/GlassCard";
import image123 from "../../assets/img/image123.png";
import image456 from "../../assets/img/image456.png";
import react_logo from "../../assets/img/react_logo.png";
import react_router_logo from "../../assets/img/react_router_logo.png";
import sass_logo from "../../assets/img/sass_logo.png";
import redux_logo from "../../assets/img/redux_logo.png";
import javascript_logo from "../../assets/img/javascript_logo.png";
import HTML5_logo from "../../assets/img/HTML5_logo.png";
import ohmyfood from "../../assets/img/ohmyfood.png";
import Collapse from "../molecules/collapse";
import Titles from "../atoms/titles";
import { NavLink } from "react-router";
import { Omega } from "lucide-react";


export default function Projects() {
    return (
    <div id="project" >
        <div className="flex flex-col items-center p-5 bg-primary">
            <Titles title={"Oh My Food"} />
            <GlassCard imageSrc={ohmyfood} alt={"projet ohmyfood"} />
            <Collapse Repo="https://github.com/Justhiraga/Ohmyfood" Gpages="https://justhiraga.github.io/ohmyfood/" pages="/Project-oh-my-food" technologies={[{ src: sass_logo, alt: "sass logo"}, { src: HTML5_logo, alt: "HTML5 logo"}]}/>
        </div>
        <div className="flex flex-col items-center p-10 bg-secondary">
            <Titles title={"Projets 2"} />
            <GlassCard imageSrc={image456} alt={"image456"}/>
            <Collapse />
        </div>
        <div className="flex flex-col items-center p-10 bg-primary">
            <Titles title={"Projets 3"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
            <Collapse/>
        </div>
        <div className="flex flex-col items-center p-10 bg-secondary">
            <Titles title={"Projets 4"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
            <Collapse/>
        </div>
        <div className="flex flex-col items-center p-10 bg-primary">
            <Titles title={"Projets 5"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
            <Collapse/>
        </div>
        <div className="flex flex-col items-center p-10 bg-secondary">
            <Titles title={"Projets 6"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
            <Collapse/>
        </div>
    </div>
    )
}