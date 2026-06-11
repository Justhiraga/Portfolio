import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import GlassCard from "../components/molecules/GlassCard";
import github_logo from "../assets/img/github_logo.png";
import figmm_logo from "../assets/img/figma_logo.png";
import argentBank from "../assets/img/argentBank.png";
import Titles from "../components/atoms/Titles";
import { BookOpenText } from "lucide-react";
import { useEffect } from "react";



export default function Project3() {
    useEffect(() => {
        document.title = "Projet Argent Bank";
    })
    return (
        <div>
            <Header  />
            <div className="min-h-[57vh] flex flex-col items-center pt10 bg-primary">
                <Titles title={"Projet : Argent Bank"} />
                <GlassCard imageSrc={argentBank} alt={"projet argentBank"} />
                <div className="flex items-center">
                    <a href="https://github.com/Justhiraga/ArgentBank-Frontend">
                        <img src={github_logo} alt="projet github" className="w-10 h-10 m-3 "/>
                    </a>
                </div>
                <div className="flex flex-col items-center bg-secondary border-t-2 border-quaternary w-full">
                    <Titles title={"Contexte : Situation et enjeux du projet"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                       Quelle est la situation initiale du projet ? <br /><br />

                        (besoin de créer une application bancaire front-end)<br /><br />

                        Quels enjeux justifient ce développement ?<br /><br />

                        (ex : offrir une expérience utilisateur réactive, sécurisée, intégrée à un back-end REST.)<br /><br />
                        
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={" Objectifs : Buts à atteindre et problématiques à résoudre"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        Quels sont les objectifs fonctionnels et techniques à réaliser ?<br /> <br />

                        (authentification, gestion des transactions, intégration API, performance, praticité.) <br /> <br />

                        Quelles problématiques techniques spécifiques doivent être résolues ? <br /> <br />

                        (par exemple : gestion du state global avec Redux, sécurisation des données utilisateur, développement responsive.)<br /> <br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary w-full">
                    <Titles title={"Stack technique : Technologies et outils utilisés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        Quelles technologies sont utilisées ? <br /> <br />

                        (- React & Redux pour le front-end.<br /> 
                        - Node.js côté serveur.<br /> 
                        - Swagger pour la documentation API. <br /> 
                        - API REST pour la communication front/back. <br /> 
                        - Outils d'optimisation Green Code pour images et composants.)<br /> <br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={" Compétences développées : Apprentissages et défis relevés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        Quelles sont les principales compétences acquises ?<br /> <br />

                        - Maîtrise de React avancé et Redux pour la gestion globale des états.<br /> 

                        - Mise en place de l'authentification sécurisée et modification utilisateur.<br />

                        - Intégration de l'appels API REST via Swagger.<br />

                        - Développement d'une application responsive.<br />

                        - Pratiques d'optimisation de code (Green Code).<br />

                        - Défis techniques rencontrés comme la garantie de sécurité, la gestion des appels asynchrones, ou l'optimisation des performances.
                                                
                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary w-full">
                    <Titles title={"Résultats et impact : Livrables et métriques de réussite"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        Quels sont les livrables finaux ?<br /> <br />
                        
                        - Application front-end complète et fonctionnelle, intégrée côté serveur.<br />

                        - Authentification sécurisée et gestion des utilisateurs opérationnelle.<br />

                        - Visualisation et gestion des transactions implémentées.<br />

                        - Documentation Swagger respectée et maintenable.<br />

                        - Tests et déploiement local réalisés.<br />

                        - Critères de réussite : fonctionnement sans bug, expérience utilisateur fluide, respect des maquettes et normes de sécurité.<br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={"Perspectives d'amélioration : Points d'optimisation identifiés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        Quels éléments pourraient être améliorés ou ajoutés ?<br /> <br />

                        (Ajout de tests supplémentaires, optimisation du code.)<br /> <br />

                        Y a-t-il des idées pour aller plus loin dans ce projet ?<br /> <br />

                        (Non le projet est fini)
                    </p>
                </div>                           
            </div>
            <Footer />
        </div>
    );
}