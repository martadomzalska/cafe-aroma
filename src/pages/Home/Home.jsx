import React from "react";
import { useNavigate } from "react-router-dom";
import promotionsData from "../../data/promotionsData";
import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import Promotions from "../../components/HomePageComponents/Promotions/Promotions";
import CallToAction from "../../components/HomePageComponents/CallToAction/CallToAction";
import css from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <div className={css.home}>
      <HeroSection onButtonClick={() => handleNavigation("/menu")} />
      <Promotions promotions={promotionsData} />
      <CallToAction onButtonClick={() => handleNavigation("/contact")} />
    </div>
  );
};

export default Home;
