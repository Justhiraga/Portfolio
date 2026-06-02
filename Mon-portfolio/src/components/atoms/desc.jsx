import { FolderGit2 } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { Atom } from "lucide-react";

export default function Desc() {
    return (
        <div className="p-4 bg-zinc-800 rounded-xl flex flex-col items-center">
            <div className="flex">
                <a href="#" className="inline-block mt-3 text-purple-400 hover:underline">
                    <span className="flex items-center">
                        <FolderGit2 />
                        <span className="ml-2">Repo Github</span>
                    </span>
                </a>
            </div>
            <div className="flex">
                <a href="#" className="inline-block mt-3 text-purple-400 hover:underline">
                    <span className="flex items-center">
                        <BookOpenText />
                        <span className="ml-2">Github Pages</span>
                    </span>
                </a>
            </div>
            <div className="flex">
    <span className="flex flex-col items-center text-purple-400">
        technologies utilisées:  <Atom /> 
    </span>
</div>
        </div>
    );
}