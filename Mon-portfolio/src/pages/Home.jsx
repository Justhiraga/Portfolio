import Header from "../components/molecules/Header";
import Projects from "../components/organismes/Projects";
import Profil from "../components/organismes/Profil";
import Footer from "../components/molecules/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Profil />
      <Projects />
      <Footer />
    </div>
  );
}