import { useEffect, useRef } from "react";
import styled from "styled-components";
import Copyright from "../components/footer/Copyright";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/Navbar";
import Pricing from "../components/pricing/Pricing";
import Services from "../components/services/Services";
import { Helmet } from "react-helmet";

const Div = styled.div`
  margin-top: 150px;

  @media (width < 600px) {
    margin-top: 50px;
  }
`;

const TITLE = "Tech Huts";

function AppLayout() {
  const homeRef = useRef(null);
  const storeRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
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
