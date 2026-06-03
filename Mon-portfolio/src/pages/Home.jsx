import Header from "../components/molecules/header";
import Projects from "../components/organismes/projects";
import Profil from "../components/organismes/profil";
import Footer from "../components/molecules/footer";


export default function App() {
  return (
    <div>
      <Header />
      <Profil />
      <Projects />
      <Footer />
    </div>
  );
}