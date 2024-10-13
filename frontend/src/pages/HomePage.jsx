import ContactUsSection from "../components/Home/ContactUsSection";
import FistPart from "../components/Home/FirstPart";
import PopularCategoriesSection from "../components/Home/PopularCategoriesSection";
import TrendingProductsSection from "../components/Home/TrendingProductsSection";

const HomePage = () => {
    return (

        <div>
            <FistPart />
            <PopularCategoriesSection />
            <div className="h-[20px] w-full bg-gradient-to-b from-custom-light to-custom-dark"></div>
            <TrendingProductsSection />
            <div className="h-[20px] w-full bg-gradient-to-b from-custom-dark to-custom-light"></div>
            <ContactUsSection />
        </ div>

    );
};
export default HomePage;