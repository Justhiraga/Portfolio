import Footer from "../components/molecules/footer";
import Header from "../components/molecules/header";
import GlassCard from "../components/molecules/GlassCard";
import github_logo from "../assets/img/github_logo.svg";
import figmm_logo from "../assets/img/figma_logo.svg";
import Print_js from "../assets/img/Print_js.webp";
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
                <div className="flex flex-col items-center bg-secondary border-t-2 border-quaternary w-full p-20">
                    <Titles title={"Contexte : Situation et enjeux du projet"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                       dynamiser un site web statique pour l'imprimerie "Print it." <br /><br />

                       L'enjeu est de rendre le site plus interactif et attractif en intégrant un carrousel d'images, ce qui améliore l'expérience utilisateur.<br /><br />
                        
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full p-20">
                    <Titles title={" Objectifs : Buts à atteindre et problématiques à résoudre"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        - Ajouter un carrousel avec navigation visuelle (flèches, bullet points).<br /><br /> 

                        - Rendre le carrousel interactif via JavaScript (gestion des événements, changement d'images et de texte).<br /><br /> 

                        - Mettre en place un défilement infini pour une navigation fluide.<br /><br /> 

                        - Utiliser HTML, CSS et JavaScript en complément.<br /><br /> 

                        - Gérer proprement la manipulation du DOM<br /><br /> 

                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary w-full p-20">
                    <Titles title={"Stack technique : Technologies et outils utilisés"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        - Langage : JavaScript (manipulation du DOM, gestion d'événements).<br /><br /> 

                        - HTML/CSS pour la structure et le style du site.<br /><br /> 

                        - Visual Studio Code pour l'édition du code.<br /><br /> 

                        - GitHub pour le versionnement et la collaboration.<br /><br /> 

                        - GitHub Pages pour héberger et publier le site.<br /><br /> 
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary max-w-full p-20">
                    <Titles title={" Compétences développées : Apprentissages et défis relevés"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        - Compréhension et intégration de fichiers JS dans un projet web.<br /><br /> 

                        - Manipulation du DOM pour dynamique les contenus.<br /><br /> 

                        - Ajout des Event Listeners pour interactions utilisateurs.<br /><br /> 

                        - Mise en place d'une navigation fluide (bouclage du carrousel).<br /><br /> 

                        - Bonne pratique de gestion de versions avec GitHub.<br /><br /> 

                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary w-full p-20">
                    <Titles title={"Résultats et impact : Livrables et métriques de réussite"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        - Un carrousel fonctionnel avec navigation par flèches et points.<br /><br /> 

                        - Code hébergé sur un repo GitHub accessible.<br /><br /> 

                        - Publication du site via GitHub Pages avec le carrousel dynamique en direct.<br /><br /> 

                        - Validation technique lors de la session bilan avec le mentor.<br /><br /> 
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full p-20">
                    <Titles title={"Perspectives d'amélioration : Points d'optimisation identifiés"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        - Optimiser le design du carrousel pour plus de fluidité ou réactivité.<br /><br /> 

                        - Ajouter une navigation tactile pour mobiles.<br /><br /> 

                        - Intégrer des animations plus avancées (transitions, effets).<br /><br /> 

                        - Rendre le carrousel accessible (compatibilité lecteurs d'écran).<br /><br /> 
                        
                        - Améliorer la gestion d'erreurs ou cas limites dans le code JS.<br /><br /> 
            
                        Y a-t-il des idées pour aller plus loin dans ce projet ?<br /> <br />

                        (Non le projet est fini)
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}