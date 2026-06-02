import GlassCard from "../molecules/GlassCard";
import image123 from "../../assets/img/image123.png";
import image456 from "../../assets/img/image456.png";
import Collapse from "../atoms/collapse";
import Titles from "../atoms/titles";
import { useState } from "react";
import { ChevronDown } from "lucide-react";


export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div id="project">
        <div className="min-h-[57vh] flex flex-col items-center pt10 bg-[#1a1622]">
            <Titles title={"Projets 1"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
            <Collapse/>
        </div>
        <div className="min-h-[57vh] flex flex-col items-center pt10 bg-[#251337]">
            <Titles title={"Projets 2"} />
            <GlassCard imageSrc={image456} alt={"image456"}/>
            <Collapse />
        </div>
        <div className="min-h-[57vh] flex flex-col items-center pt10 bg-[#1a1622]">
            <Titles title={"Projets 3"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
        </div>
    </div>
    )
}