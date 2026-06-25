import Footer from "../components/molecules/footer";
import Header from "../components/molecules/header";
import GlassCard from "../components/molecules/GlassCard";
import github_logo from "../assets/img/github_logo.svg";
import figmm_logo from "../assets/img/figma_logo.svg";
import Ninacarducci from "../assets/img/Ninacarducci.webp";
import Titles from "../components/atoms/titles";
import { BookOpenText } from "lucide-react";
import { useEffect } from "react";



export default function Project4() {
    useEffect(() => {
        document.title = "Optimiser le référencement d'un site";
    })
    return (
        <div>
            <Header  />
            <div className="min-h-[57vh] flex flex-col items-center pt10 bg-primary">
                <Titles title={"Projet : Optimiser le référencement d'un site"} />
                <GlassCard imageSrc={Ninacarducci} alt={"projet ninacarducci"} />
                <div className="flex items-center">
                    <a href="https://github.com/Justhiraga/Optimiser-site-main">
                        <img src={github_logo} alt="projet github" className="w-10 h-10 m-3 "/>
                    </a>
                    <a href="https://justhiraga.github.io/Optimiser-site-main/">
                        <BookOpenText size={40} className="w-10 h-10 m-3" color="#ffffff" alt="github pages" />
                    </a>
                </div>
                <div className="flex flex-col items-center bg-secondary border-t-2 border-quaternary w-full">
                    <Titles title={"Contexte : Situation et enjeux du projet"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center " >

                        Quelle est la situation de Nina Carducci et son site web avant optimisation ? <br /><br />

                        (SEO de 70, très mauvaise performance.)<br /><br />

                       Quels enjeux SEO, de performance et d'accessibilité motivent ce projet ?<br /><br />

                        (Ex : amélioration de la performance, amélioration de l'accessibilité, amélioration du SEO.)<br /><br />
                        
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={" Objectifs : Buts à atteindre et problématiques à résoudre"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        Quels sont les objectifs précis ? <br /> <br />

                        (ex : améliorer la vitesse de chargement, corriger les problèmes SEO, optimiser l'accessibilité.) <br /> <br />

                        Quelles problématiques principales soulevent ce projet ? <br /> <br />

                        (images lourdes, balisage insuffisant, absence de SEO local.)<br /> <br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary w-full">
                    <Titles title={"Stack technique : Technologies et outils utilisés"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        - Audit avec Lighthouse, Wave pour la performance et l'accessibilité, GTMetrix.<br />

                        - Modification du code HTML, CSS, optimisation des images.<br />

                        - Ajout de balises Schema.org et méta-tags pour SEO local et réseaux sociaux.<br />
                        
                        - Utilisation de Git/GitHub pour versionner le code.<br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={" Compétences développées : Apprentissages et défis relevés"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        - Analyse et interprétation des rapports d'audit.<br />

                        - Optimisation des performances front-end (compression, lazy loading).<br />

                        - Mise en œuvre des bonnes pratiques SEO technique (balises, structure sémantique).<br />

                        - Amélioration de l'accessibilité (contraste, navigation clavier).<br />

                        - Défis : équilibrer optimisation et qualité visuelle, apprendre à utiliser des outils d'audit.<br />

                    </p>
                </div>
                <div className="flex flex-col items-center bg-secondary w-full">
                    <Titles title={"Résultats et impact : Livrables et métriques de réussite"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        - Site optimisé avec score Lighthouse ≥ 90% en performance, SEO et accessibilité.<br />

                        - Rapport complet comparant avant/après avec captures et explications.<br />

                        - Code source mis à jour sur GitHub.<br />

                        - Impact : amélioration du référencement naturel, meilleure expérience utilisateur, augmentation probable du trafic.<br />
                    </p>
                </div>
                <div className="flex flex-col items-center bg-primary w-full">
                    <Titles title={"Perspectives d'amélioration : Points d'optimisation identifiés"} />
                    <p className="font-[Roboto] text-white text-[25px] m-6 text-center" >

                        Quels éléments pourraient être améliorés ou ajoutés ?<br /> <br />

                        - Approfondir SEO local avec plus de données structurées.<br />

                        - Ajouter des tests de performance automatisés.<br />

                        - Continuer l'optimisation des images et du code.<br />

                        - Travailler l'accessibilité au-delà des critères standards.<br /><br />


                        Y a-t-il des idées pour aller plus loin dans ce projet ?<br /> <br />

                        (Non le projet est fini)
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}