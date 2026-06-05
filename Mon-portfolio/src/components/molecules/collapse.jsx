import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Desc from "../atoms/desc";

export default function Collapse( { Repo, Gpages } ) {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Bouton flèche */}
      <button
        id="dropdown-arrow"
        aria-label="dropdown-arrow"
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center w-full mt-2 cursor-pointer"
        
      >
        <ChevronDown
          size={28}
          className={`text-[#ffffff] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

  

      {/* Collapse */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 transform-translate-y-full" : "max-h-0 opacity-0 transform-translate-y-full"
        }`}
      >
        <Desc Repo={Repo} Gpages={Gpages} />
      </div>
    </div>
  );
}