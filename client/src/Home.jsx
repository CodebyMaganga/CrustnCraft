import "./App.css";
import Navbar from "./components/navbar";
import TopHero from "./components/topHero";
import Pizzas from "./components/pizzas";
import Restaurants from "./components/restaurants";
import About from "./components/About";
import FooterApp from "./components/footer";
import ContactForm from "./components/ContactForm";

function Home() {
  return (
    <>
      <Navbar />
      <TopHero />
      <Pizzas />
      <Restaurants />
      <About />
      <ContactForm />
      <FooterApp />
    </>
  );
}

export default Home;
