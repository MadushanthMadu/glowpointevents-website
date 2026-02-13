import { Helmet } from "react-helmet";
import HomeLayout from '../sections/home/homeLayout';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Glowpoint Events | Crafting Moments, Creating Memories</title>
                <meta name="description" content="Glowpoint Events delivers premium weddings and celebrations across Australia, blending tradition and modern elegance to create unforgettable, beautifully styled events." />
                <meta name="keywords" content="Glowpoint Events,luxury event planner Australia,wedding planner Australia,premium event management,engagement parties,birthday events,baby shower planner,cultural celebrations Australia" />
            </Helmet>

            <HomeLayout />
        </>
    );
}

export default HomePage;