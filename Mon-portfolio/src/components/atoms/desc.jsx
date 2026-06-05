import { FolderGit2 } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { NavLink } from "react-router";


export default function Desc( { Repo, Gpages } ) {
    return (
        <div className="p-4 bg-zinc-800 rounded-xl flex flex-col items-center">
            <div className="flex">
                <a href={Repo} className="inline-block mt-3 text-purple-400 hover:underline">
                    <span className="flex items-center">
                        <FolderGit2 />
                        <span className="ml-2">Repo Github</span>
                    </span>
                </a>
            </div>
            <div className="flex">
                <a href={Gpages} className="inline-block mt-3 text-purple-400 hover:underline">
                    <span className="flex items-center">
                        <BookOpenText />
                        <span className="ml-2">Github Pages</span>
                    </span>
                </a>
            </div>
        </div>
    );
}