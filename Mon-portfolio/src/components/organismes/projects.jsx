import GlassCard from "../molecules/GlassCard";
import image123 from "../../assets/img/image123.png";
import Titles from "../atoms/titles";


export default function Projects() {
    return (
    <div id="project">
        <div className="h-[60vh] flex items-center justify-center flex-col gap-10 bg-[#1a1622]">
            <Titles title={"Projets 1"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
        </div>
        <div className="h-[60vh] flex items-center justify-center flex-col gap-10 bg-[#ad3d98]">
            <Titles title={"Projets 2"} />
            <GlassCard imageSrc={image123} alt={"image123"}/>
        </div>
        <div className="h-[60vh] flex items-center justify-center flex-col gap-10 bg-[#1a1622]">
            <Titles title={"Projets 3"} />
            <GlassCard imageSrc={image123} alt={"image123"} />
        </div>
    </div>
    )
}