import competences from "../../assets/img/competences.webp";


export default function Comp() {
    return (
        <div className="flex justify-center flex-col items-center bg-primary border-b-2 border-quaternary">
            <p className="flex items-center font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[50px] m-7 ">
                Compétences
            </p>
             <img src={competences} alt="Compétences" className="w-auto h-auto "/>
        </div>
    )
}