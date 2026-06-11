import Footer from "../components/molecules/footer";
import Header from "../components/molecules/header";
import GlassCard from "../components/molecules/GlassCard";
import github_logo from "../assets/img/github_logo.png";
import figmm_logo from "../assets/img/figma_logo.png";
import Print_js from "../assets/img/Print_js.png";
import Titles from "../components/atoms/titles";
import { BookOpenText } from "lucide-react";
import { useEffect } from "react";



export default function Project6() {
    useEffect(() => {
        document.title = "Projet : Premiers pas sur le langage JavaScript  ";
    })
    return (
        <div>
            <Header  />
            <div className="min-h-[57vh] flex flex-col items-center pt10 bg-primary">
                <Titles title={"Projet : Print js"} />
                <GlassCard imageSrc={Print_js} alt={"projet print js"} />
                <div className="flex items-center">
                    <a href="https://github.com/Justhiraga/Print_it_Javascript">
                        <img src={github_logo} alt="projet github" className="w-10 h-10 m-3 "/>
                    </a>
                    <a href="https://justhiraga.github.io/Print_it_Javascript/">
                        <BookOpenText size={40} className="w-10 h-10 m-3" color="#ffffff" alt="github pages" />
                    </a>
                </div>
                <div className="flex flex-col items-center bg-secondary border-t-2 border-quaternary">
                    <Titles title={"Contexte : Situation et enjeux du projet"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 " >

                       dynamiser un site web statique pour l'imprimerie "Print it." <br /><br />

                       L'enjeu est de rendre le site plus interactif et attractif en intégrant un carrousel d'images, ce qui améliore l'expérience utilisateur.<br /><br />
                        
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary">
                    <Titles title={" Objectifs : Buts à atteindre et problématiques à résoudre"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6" >

                        - Ajouter un carrousel avec navigation visuelle (flèches, bullet points).<br />

                        - Rendre le carrousel interactif via JavaScript (gestion des événements, changement d'images et de texte).<br />

                        - Mettre en place un défilement infini pour une navigation fluide.<br />

                        - Utiliser HTML, CSS et JavaScript en complément.<br />

                        - Gérer proprement la manipulation du DOM<br />

                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary">
                    <Titles title={"Stack technique : Technologies et outils utilisés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6" >

                        - Langage : JavaScript (manipulation du DOM, gestion d'événements).<br />

                        - HTML/CSS pour la structure et le style du site.<br />

                        - Visual Studio Code pour l'édition du code.<br />

                        - GitHub pour le versionnement et la collaboration.<br />

                        - GitHub Pages pour héberger et publier le site.<br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary">
                    <Titles title={" Compétences développées : Apprentissages et défis relevés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6" >

                        - Compréhension et intégration de fichiers JS dans un projet web.<br />

                        - Manipulation du DOM pour dynamique les contenus.<br />

                        - Ajout des Event Listeners pour interactions utilisateurs.<br />

                        - Mise en place d'une navigation fluide (bouclage du carrousel).<br />

                        - Bonne pratique de gestion de versions avec GitHub.<br />

                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary">
                    <Titles title={"Résultats et impact : Livrables et métriques de réussite"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6" >

                        - Un carrousel fonctionnel avec navigation par flèches et points.<br />

                        - Code hébergé sur un repo GitHub accessible.<br />

                        - Publication du site via GitHub Pages avec le carrousel dynamique en direct.<br />

                        - Validation technique lors de la session bilan avec le mentor.<br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary">
                    <Titles title={"Perspectives d'amélioration : Points d'optimisation identifiés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6" >

                        - Optimiser le design du carrousel pour plus de fluidité ou réactivité.<br />

                        - Ajouter une navigation tactile pour mobiles.<br />

                        - Intégrer des animations plus avancées (transitions, effets).<br />

                        - Rendre le carrousel accessible (compatibilité lecteurs d'écran).<br />
                        
                        - Améliorer la gestion d'erreurs ou cas limites dans le code JS.<br />
            
                        Y a-t-il des idées pour aller plus loin dans ce projet ?<br /> <br />

                        (Non le projet est fini)
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}