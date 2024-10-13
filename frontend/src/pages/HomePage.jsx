import ContactUsSection from "../components/Home/ContactUsSection";
import FistPart from "../components/Home/FirstPart";
import PopularCategoriesSection from "../components/Home/PopularCategoriesSection";
import TrendingProductsSection from "../components/Home/TrendingProductsSection";

const HomePage = () => {
    return (

        <div>
            <FistPart />
            <PopularCategoriesSection />
            <TrendingProductsSection />
            <ContactUsSection />
        </ div>

    );
};
export default HomePage;