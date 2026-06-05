import GlassCard from "../molecules/GlassCard";
import image123 from "../../assets/img/image123.png";
import image456 from "../../assets/img/image456.png";
import ohmyfood from "../../assets/img/ohmyfood.png";
import Collapse from "../molecules/collapse";
import Titles from "../atoms/titles";
import { NavLink } from "react-router";


export default function Projects() {
    return (
    <div id="project">
        <div className="min-h-[57vh] flex flex-col items-center pt10 bg-[#1a1622]">
            <Titles title={"Oh My Food"} />
            <GlassCard imageSrc={ohmyfood} alt={"projet ohmyfood"} />
            <Collapse Repo="https://github.com/Justhiraga/Ohmyfood" Gpages="https://justhiraga.github.io/ohmyfood/" />
            <NavLink to="/Project-oh-my-food" className="flex  items-center text-purple-400 m-3 gap-2">
                En savoir plus
            </NavLink>
        </div>
        <div className="min-h-[57vh] flex flex-col items-center pt10 bg-[#251337]">
            <Titles title={"Projets 2"} />
            <GlassCard imageSrc={image456} alt={"image456"}/>
            <Collapse />
            <NavLink to="/" className="flex  items-center text-purple-400 m-3 gap-2">
                En savoir plus
            </NavLink>
        </div>
        <div className="min-h-[57vh] flex flex-col items-center pt10 bg-[#1a1622]">
            <Titles title={"Projets 3"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
            <Collapse/>
            <NavLink to="/" className="flex  items-center text-purple-400 m-3 gap-2">
                En savoir plus
            </NavLink>
        </div>
        <div className="min-h-[57vh] flex flex-col items-center pt10 bg-[#251337]">
            <Titles title={"Projets 4"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
            <Collapse/>
            <NavLink to="/" className="flex  items-center text-purple-400 m-3 gap-2">
                En savoir plus
            </NavLink>
        </div>
        <div className="min-h-[57vh] flex flex-col items-center pt10 bg-[#1a1622]">
            <Titles title={"Projets 5"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
            <Collapse/>
            <NavLink to="/" className="flex  items-center text-purple-400 m-3 gap-2">
                En savoir plus
            </NavLink>
        </div>
        <div className="min-h-[57vh] flex flex-col items-center pt10 bg-[#251337]">
            <Titles title={"Projets 6"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
            <Collapse/>
            <NavLink to="/" className="flex  items-center text-purple-400 m-3 gap-2">
                En savoir plus
            </NavLink>
        </div>
    </div>
    )
}