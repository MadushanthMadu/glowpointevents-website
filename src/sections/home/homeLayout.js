import NavigationBar from "../navigation/navigationBar";
import AboutLayout from "./about/aboutLayout";
import HeroLayout from "./hero/heroLayout";
import ServicesLayout from "./services/servicesLayout";

const HomeLayout = () => {
    return (
        <>
            <NavigationBar />

            <HeroLayout />

            <AboutLayout />

            <ServicesLayout />
        </>
    );
}

export default HomeLayout;