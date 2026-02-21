import NavigationBar from "../navigation/navigationBar";
import AboutLayout from "./about/aboutLayout";
import HeroLayout from "./hero/heroLayout";
import LatestEventsLayout from "./latestEvents/latestEventsLayout";
import ServicesLayout from "./services/servicesLayout";
import TestimonialsLayout from "./testimonials/testimonialsLayout";

const HomeLayout = () => {
    return (
        <>
            <NavigationBar />

            <HeroLayout />

            <AboutLayout />

            <ServicesLayout />

            <LatestEventsLayout />

            <TestimonialsLayout />
        </>
    );
}

export default HomeLayout;