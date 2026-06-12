import Footer from "../components/molecules/footer";
import Header from "../components/molecules/header";
import GlassCard from "../components/molecules/GlassCard";
import github_logo from "../assets/img/github_logo.png";
import figmm_logo from "../assets/img/figma_logo.png";
import ohmyfood from "../assets/img/ohmyfood.png";
import Titles from "../components/atoms/titles";
import { BookOpenText } from "lucide-react";
import { useEffect } from "react";



export default function Project1() {
    useEffect(() => {
        document.title = "Projet ohmyfood";
    })
    return (
        <div>
            <Header  />
            <div className="flex flex-col items-center pt10 bg-primary">
                <Titles title={"Projet : Oh My Food"} />
                <GlassCard imageSrc={ohmyfood} alt={"projet ohmyfood"} />
                <div className="flex items-center">
                    <a href="https://github.com/Justhiraga/Ohmyfood">
                        <img src={github_logo} alt="projet github" className="w-10 h-10 m-3 "/>
                    </a>
                    <a href="https://justhiraga.github.io/ohmyfood/">
                        <BookOpenText size={40} className="w-10 h-10 m-3" color="white" alt="github pages" />
                    </a>
                    <a href="https://www.figma.com/design/t4449fzDnwGYmzuwQdu87V/Maquettes-Ohmyfood--mobile-et-desktop-?node-id=0-1&p=f&t=5L0PXeE0sAVdX89r-0">
                        <img src={figmm_logo} alt="maquette figma" className="w-10 h-10 m-3 "/>
                    </a>
                </div>
                <div className="flex flex-col items-center bg-secondary border-t-2 border-quaternary w-full">
                    <Titles title={"Contexte : Situation et enjeux du projet"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center " >

                        Quelle est la situation de la start-up Ohmyfood et pourquoi ce site est-il important ? <br /><br />

                        (site de restauration en ligne, besoin de mettre en place une application mobile-first.)<br /><br />

                        Quels sont les enjeux liés à la mise en œuvre d'un site mobile-first avec animations pour une start-up dans la restauration ?<br /><br />

                        (Par exemple : implanter la start-up à Paris après New York, améliorer l'expérience utilisateur sur mobile.)
                        
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={" Objectifs : Buts à atteindre et problématiques à résoudre"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        Quel est l'objectif principal du projet ? <br /> <br />

                        (Ex : créer une interface mobile-first avec animations CSS et responsive.) <br /> <br />

                        Quelles problématiques techniques ou UX devez-vous résoudre ? <br /> <br />

                        (Ex : intégration fidèle des maquettes, adaptation aux différents formats d'écrans, fluidité des animations.)<br /> <br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary w-full">
                    <Titles title={"Stack technique : Technologies et outils utilisés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        Quels langages et outils sont employés ? <br /> <br />

                        (Sass pour le CSS, animations CSS, Git et GitHub pour le versionnement, GitHub Pages pour le déploiement.)<br /> <br />

                        Avez-vous recours à des validateurs ou des outils spécifiques pour la qualité ?<br /> <br />

                        (Ex : W3C Markup Validator, W3C CSS Validator, Google Lighthouse, etc.)
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={" Compétences développées : Apprentissages et défis relevés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        Quelles compétences techniques avez-vous améliorées ?<br /> <br />

                        (Ex : gestion du responsive, usage de Sass, implémentation d'animations CSS, gestion de version avec Git.)<br /> <br />

                        Quels défis avez-vous rencontrés et surmontés ?<br /> <br />

                        (première ulitisation des animations CSS, gestion du responsive et première utilisation de SASS )
                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary w-full">
                    <Titles title={"Résultats et impact : Livrables et métriques de réussite"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        Quels sont les livrables finaux ?<br /> <br />

                        (Ex : site mobile-first fonctionnel publié sur GitHub Pages, code source versionné sur GitHub.)<br /> <br />

                        Comment mesurez-vous le succès ? Fidelité avec les maquettes, validation W3C, compatibilité multi-écrans ?<br /> <br />

                        (Ex : validation W3C, compatibilité multi-écrans, fidelité avec les maquettes.)
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={"Perspectives d'amélioration : Points d'optimisation identifiés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

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