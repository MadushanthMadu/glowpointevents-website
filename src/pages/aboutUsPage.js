import { Helmet } from "react-helmet";
import AboutUsLayout from "../sections/aboutUs/aboutUsLayout";

const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>About Glowpoint Events | Elegant Event Planners in Australia</title>
                <meta name="description" content="Learn about Glowpoint Events, an Australian event management team dedicated to creating elegant, culturally respectful, and uniquely memorable celebrations." />
                <meta name="keywords" content="about Glowpoint Events,Australian event planners,professional event management Australia,luxury celebration planners,culturally respectful events" />
            </Helmet>

            <AboutUsLayout />
        </>
    );
}

export default AboutUsPage;