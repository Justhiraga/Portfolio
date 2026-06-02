import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Collapse() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Bouton flèche */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center w-full mt-2"
      >
        <ChevronDown
          size={28}
          className={`text-[#7d3fb6] transition-transform duration-300 ${
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
        <div className="p-4 bg-zinc-800 rounded-xl">
          <h3 className="font-bold text-lg">Graves</h3>
          <p className="text-gray-300 mt-2">
            Projet réalisé avec React, TailwindCSS et Framer Motion.
          </p>

          <a
            href="#"
            className="inline-block mt-3 text-purple-400 hover:underline"
          >
            Voir le projet
          </a>
        </div>
      </div>
    </div>
  );
}