import NavigationBar from "../navigation/navigationBar";
import AboutLayout from "./about/aboutLayout";
import HeroLayout from "./hero/heroLayout";

const HomeLayout = () => {
    return (
        <>
            <NavigationBar />

            <HeroLayout />

            <AboutLayout />
        </>
    );
}

export default HomeLayout;