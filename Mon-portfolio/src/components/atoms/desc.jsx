import { FolderGit2 } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { NavLink } from "react-router";



export default function Desc( { Repo, Gpages, pages, technologies = [] } ) {
    console.log(technologies);
    return (
        <div className="p-4 bg-zinc-800 rounded-xl flex flex-col items-center">
            <div className="flex">
                <a href={Repo} className="inline-block mt-3 text-purple-400 hover:underline">
                    <div className="flex items-center">
                        <FolderGit2 />
                        <span className="ml-2">Repo Github</span>
                    </div>
                </a>
            </div>
            <div className="flex">
                <a href={Gpages} className="inline-block mt-3 text-purple-400 hover:underline">
                    <div className="flex items-center">
                        <BookOpenText />
                        <span className="ml-2">Github Pages</span>
                    </div>
                </a>
            </div>
            <div className="flex">
                <div className="inline-block mt-3 text-purple-400">
                    <p className="ml-2 text-center">Technologies utilisées :</p>
                    <div className="flex items-center justify-center">
                        <div className="ml-2 flex items-center justify-center g-2 ">
                            {technologies.map((tech, index) => (
                                <img 
                                key={index}
                                src={tech.src} 
                                alt={tech.alt}
                                className="w-12 h-12 object-contain m-2"/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <NavLink to={pages} className="inline-block mt-3 text-purple-400 hover:underline">
                    <div className="flex items-center">
                        <span className="ml-2">En savoir plus</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}