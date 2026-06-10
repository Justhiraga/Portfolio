import Footer from "../components/molecules/footer";
import Header from "../components/molecules/header";
import GlassCard from "../components/molecules/GlassCard";
import github_logo from "../assets/img/github_logo.png";
import figmm_logo from "../assets/img/figma_logo.png";
import events724 from "../assets/img/events724.png";
import Titles from "../components/atoms/titles";
import { BookOpenText } from "lucide-react";
import { useEffect } from "react";



export default function Project2() {
    useEffect(() => {
        document.title = "Projet 724Events";
    })
    return (
        <div>
            <Header  />
            <div className=" flex flex-col items-center pt10 bg-primary">
                <Titles title={"Projet : 724Events"} />
                <GlassCard imageSrc={events724} alt={"projet events724"} />
                <div className="flex items-center">
                    <a href="https://github.com/Justhiraga/Debuggez-une-application-React.JS">
                         <img src={github_logo} alt="projet github" className="w-10 h-10 m-3 "/>
                    </a>
                    <a href=""> 
                        <BookOpenText size={40} className="w-10 h-10 m-3" color="#ffffff" alt="github pages" />
                    </a>
                </div>
                <div className="flex flex-col items-center bg-secondary border-t-2 border-quaternary">
                    <Titles title={"Contexte : Situation et enjeux du projet"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 " >

                        Quelle est la situation de la start-up Ohmyfood et pourquoi ce site est-il important ? <br /><br />

                        (Ex : site de restauration en ligne, besoin de mettre en place une application mobile-first.)<br /><br />

                        Quels sont les enjeux liés à la mise en œuvre d'un site mobile-first avec animations pour une start-up dans la restauration ?<br /><br />

                        (Par exemple : implanter la start-up à Paris après New York, améliorer l'expérience utilisateur sur mobile.)
                        
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary">
                    <Titles title={" Objectifs : Buts à atteindre et problématiques à résoudre"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6" >

                        Quel est l'objectif principal du projet ? <br /> <br />

                        (Ex : créer une interface mobile-first avec animations CSS et responsive.) <br /> <br />

                        Quelles problématiques techniques ou UX devez-vous résoudre ? <br /> <br />

                        (Ex : intégration fidèle des maquettes, adaptation aux différents formats d'écrans, fluidité des animations.)<br /> <br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary">
                    <Titles title={"Stack technique : Technologies et outils utilisés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6" >

                        Quels langages et outils sont employés ? <br /> <br />

                        (Sass pour le CSS, animations CSS, Git et GitHub pour le versionnement, GitHub Pages pour le déploiement.)<br /> <br />

                        Avez-vous recours à des validateurs ou des outils spécifiques pour la qualité ?<br /> <br />

                        (Ex : W3C Markup Validator, W3C CSS Validator, Google Lighthouse, etc.)
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary">
                    <Titles title={" Compétences développées : Apprentissages et défis relevés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6" >

                        Quelles compétences techniques avez-vous améliorées ?<br /> <br />

                        (Ex : gestion du responsive, usage de Sass, implémentation d'animations CSS, gestion de version avec Git.)<br /> <br />

                        Quels défis avez-vous rencontrés et surmontés ?<br /> <br />

                        (première ulitisation des animations CSS, gestion du responsive et première utilisation de SASS )
                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary">
                    <Titles title={"Résultats et impact : Livrables et métriques de réussite"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6" >

                        Quels sont les livrables finaux ?<br /> <br />

                        (Ex : site mobile-first fonctionnel publié sur GitHub Pages, code source versionné sur GitHub.)<br /> <br />

                        Comment mesurez-vous le succès ? Fidelité avec les maquettes, validation W3C, compatibilité multi-écrans ?<br /> <br />

                        (Ex : validation W3C, compatibilité multi-écrans, fidelité avec les maquettes.)
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary">
                    <Titles title={"Perspectives d'amélioration : Points d'optimisation identifiés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6" >

                        Quels éléments pourraient être améliorés ou ajoutés ?<br /> <br />

                        (Ex : animations JavaScript, optimisation des performances, accessibilité.)<br /> <br />

                        Y a-t-il des idées pour aller plus loin dans ce projet ?<br /> <br />

                        (Non le projet est fini)
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}