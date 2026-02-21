import NavigationBar from "../navigation/navigationBar";
import AboutLayout from "./about/aboutLayout";
import HeroLayout from "./hero/heroLayout";
import LatestEventsLayout from "./latestEvents/latestEventsLayout";
import ServicesLayout from "./services/servicesLayout";

const HomeLayout = () => {
    return (
        <>
            <NavigationBar />

            <HeroLayout />

            <AboutLayout />

            <ServicesLayout />

            <LatestEventsLayout />
        </>
    );
}

export default HomeLayout;