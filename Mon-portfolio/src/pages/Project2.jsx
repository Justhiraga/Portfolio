import Footer from "../components/molecules/footer";
import Header from "../components/molecules/header";
import GlassCard from "../components/molecules/GlassCard";
import github_logo from "../assets/img/github_logo.svg";
import events724 from "../assets/img/events724.webp";
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
                </div>
                <div className="flex flex-col items-center bg-secondary border-t-2 border-quaternary w-full p-20">
                    <Titles title={"Contexte : Situation et enjeux du projet"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center " >

                       Quelle est la situation de l'agence 724events au moment du projet ? <br /><br />

                        (site d'events, besoin de correction de bugs.)<br /><br />

                        Quels sont les enjeux liés à la finalisation rapide et fiable du site web ?<br /><br />

                        (résolution des bugs)<br /><br />
                        
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full p-20">
                    <Titles title={" Objectifs : Buts à atteindre et problématiques à résoudre"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        Quel est l'objectif principal du projet ? <br /> <br />

                        (Ex : corriger les bugs identifiés pour rendre le site fonctionnel et conforme aux attentes.) <br /> <br />

                        Quelles problématiques techniques spécifiques doivent être résolues ? <br /> <br />

                        (Ex : bugs dans le Slider, gestion des dépendances, tests automatisés.)<br /> <br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary w-full p-20">
                    <Titles title={"Stack technique : Technologies et outils utilisés"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        Quelles technologies sont utilisées ? <br /> <br />

                        (JavaScript, React, Node.js, Yarn.)<br /> <br />

                        Quels outils d'analyse et de test sont mis en œuvre ? <br /> <br />

                        (Chrome DevTools, React Developer Tools, Yarn test, VS Code.)
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full p-20">
                    <Titles title={" Compétences développées : Apprentissages et défis relevés"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center">

                        Quelles compétences techniques clés ont eu lieu ?<br /> <br />

                        (Débogage avec outils spécifiques, écriture et exécution de tests unitaires et fonctionnels, gestion de projet avec GitHub.)<br /> <br />

                        Défis rencontrés lors du débogage ?<br /> <br />

                        (Ex : bugs dans le Slider, gestion des dépendances, tests automatisés.)
                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary w-full p-20">
                    <Titles title={"Résultats et impact : Livrables et métriques de réussite"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        Quels sont les livrables finaux ?<br /> <br />

                        (Code corrigé, dépôt GitHub, présentation finale.)<br /> <br />

                        Evaluation de la réussite de la mission ?<br /> <br />

                        (Stabilité du site, passage réussi des tests, qualité des correctifs.)
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full p-20">
                    <Titles title={"Perspectives d'amélioration : Points d'optimisation identifiés"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        Quels éléments pourraient être améliorés ou ajoutés ?<br /> <br />

                        (Ajout de tests supplémentaires, optimisation du code, amélioration de la couverture de tests.)<br /> <br />

                        Y a-t-il des idées pour aller plus loin dans ce projet ?<br /> <br />

                        (Non le projet est fini)
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}