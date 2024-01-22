import { useRef } from "react";
import Copyright from "./components/footer/Copyright";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Services from "./components/services/Services";
import "./styles/styles.css";

function App() {
  const homeRef = useRef(null);
  const storeRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <NavBar refs={{ homeRef, storeRef, pricingRef, aboutRef }} />
      <Header />

      <Services refs={storeRef} />
      <Pricing refs={pricingRef} />

      <Footer refs={aboutRef} />
      <Copyright />
    </>
  );
}

export default App;
