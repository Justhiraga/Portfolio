import Footer from "../components/molecules/footer";
import Header from "../components/molecules/header";
import GlassCard from "../components/molecules/glassCard";
import github_logo from "../assets/img/github_logo.png";
import figmm_logo from "../assets/img/figma_logo.png";
import Appreact from "../assets/img/Appreact.png";
import Titles from "../components/atoms/titles";
import { BookOpenText } from "lucide-react";
import { useEffect } from "react";



export default function Project5() {
    useEffect(() => {
        document.title = "Projet : Créez une application web de location immobilière avec React ";
    })
    return (
        <div>
            <Header  />
            <div className="min-h-[57vh] flex flex-col items-center pt10 bg-primary">
                <Titles title={"Projet : Optimiser le référencement d'un site"} />
                <GlassCard imageSrc={Appreact} alt={"projet appreact"} />
                <div className="flex items-center">
                    <a href="https://github.com/Justhiraga/Appli-Web-React">
                        <img src={github_logo} alt="projet github" className="w-10 h-10 m-3 "/>
                    </a>
                    <a href="https://appli-web-react-dmgr.vercel.app"> 
                        <BookOpenText size={40} className="w-10 h-10 m-3" color="#ffffff" alt="github pages" />
                    </a>
                    <a href="https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1&p=f&t=zaLElgPSy2UsFTu9-0">
                        <img src={figmm_logo} alt="maquette figma" className="w-10 h-10 m-3 "/>
                    </a>
                </div>
                <div className="flex flex-col items-center bg-secondary border-t-2 border-quaternary w-full">
                    <Titles title={"Contexte : Situation et enjeux du projet"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center " >

                       Kasa, entreprise spécialisée dans la location immobilière, souhaite développer une application web front-end moderne <br /><br />

                       Le projet vise à remplacer ou créer une interface dynamique et compatible multi-pages, reprenant fidèlement des maquettes Figma<br /><br />
                        
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={" Objectifs : Buts à atteindre et problématiques à résoudre"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        - React pour le développement des composants et gestion de l'interface.<br />

                        - React Router pour la navigation entre pages.<br />

                        - Vite pour l'environnement de développement et build.<br />

                        - Node.js pour exécuter JavaScript côté serveur lors du développement.<br />

                        - Git et GitHub pour le versionnement du code.<br />

                        - Outils de design : maquettes Figma pour le suivi graphique.<br />

                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary  w-full">
                    <Titles title={"Stack technique : Technologies et outils utilisés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        - Audit avec Lighthouse, Wave pour la performance et l'accessibilité, GTMetrix.<br />

                        - Modification du code HTML, CSS, optimisation des images.<br />

                        - Ajout de balises Schema.org et méta-tags pour SEO local et réseaux sociaux.<br />
                        
                        - Utilisation de Git/GitHub pour versionner le code.<br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={" Compétences développées : Apprentissages et défis relevés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        - Création et gestion d'une application React multipages.<br />

                        - Mise en place du routage dynamique et gestion des paramètres d'URL.<br />

                        - Conception de composants fonctionnels et réutilisables (cards, bannière, carrousel, collapse).<br />

                        - Gestion des erreurs utilisateur et redirections vers une page d'erreur.<br />

                        - Respect strict d'une charte graphique via maquettes.<br />

                        - Défis liés à l'interactivité du carrousel et à la gestion des extrémités (navigation).<br />

                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary w-full">
                    <Titles title={"Résultats et impact : Livrables et métriques de réussite"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        - Application React pleinement fonctionnelle, conforme aux attentes du client et aux maquettes.<br />

                        - Navigation fluide entre pages, incluant page d'accueil, propriétés, à propos, et page d'erreur.<br />

                        - Composants interactifs comme carrousel et collapse intégrés avec animations.<br />

                        - Code du projet versionné sur GitHub, prêt à être présenté.<br />

                        - Mise en place d'un environnement stable via Vite.<br />

                        - Respect des critères de qualité fonctionnelle et visuelle.<br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={"Perspectives d'amélioration : Points d'optimisation identifiés"} />
                    <p className="font-[Oswald] [text-shadow:1px_0px_0_#ad3d98,2px_0px_0_#7c299d,3px_0px_0_#7d3fb6] text-white text-[25px] m-6 text-center" >

                        - Ajouter une connexion à un back-end réel pour récupérer les données en dynamique.<br />

                        - Optimiser les performances (lazy loading des composants, optimisation des images).<br />

                        - Ajouter des tests unitaires et d'intégration pour garantir la robustesse.<br />

                        - Améliorer l'accessibilité (a11y) et la responsivité sur tous types d'appareils.<br />

                        - Enrichir les animations et transitions pour une meilleure expérience utilisateur.<br />
            
                        Y a-t-il des idées pour aller plus loin dans ce projet ?<br /> <br />

                        (Non le projet est fini)
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}