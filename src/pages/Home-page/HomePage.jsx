import Hero from "../../components/Home-components/hero/Hero";
import Categories from "../../components/Home-components/catergories/Categories";
import FirstBanner from "../../components/Home-components/banner/FirstBanner";
import Shopping from "../../components/Home-components/shopping/Shopping";
import Footer from "../../components/Home-components/footer/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FirstBanner />
      <Shopping />
      <Footer />
    </>
  );
};

export default HomePage;
