import Header from "../components/molecules/header";
import Projects from "../components/organismes/projects";
import Profil from "../components/organismes/profil";
import Footer from "../components/molecules/footer";
import Contact from "../components/organismes/Contact";


export default function Home() {
  return (
    <div>
      <Header />
      <Profil />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
