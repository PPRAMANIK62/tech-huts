import styled from "styled-components";
import Copyright from "../components/footer/Copyright";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/Navbar";
import Pricing from "../components/pricing/Pricing";
import Services from "../components/services/Services";
import { useRef } from "react";

const Div = styled.div`
  margin-top: 150px;
`;

function AppLayout() {
  const homeRef = useRef(null);
  const storeRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <NavBar refs={{ homeRef, storeRef, pricingRef, aboutRef }} />
      <Div>
        <Header />

        <Services refs={storeRef} />
        <Pricing refs={pricingRef} />

        <Footer refs={aboutRef} />
        <Copyright />
      </Div>
    </>
  );
}

export default AppLayout;
