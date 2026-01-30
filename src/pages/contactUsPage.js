import { Helmet } from "react-helmet";
import ContactUsLayout from "../sections/contactUs/contactUsLayout";

const ContactUsPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Glowpoint Events | Book Your Event Planner in Australia</title>
                <meta name="description" content="Get in touch with Glowpoint Events to plan your wedding or special celebration. We provide premium event management services across Australia." />
                <meta name="keywords" content="contact Glowpoint Events,event planner contact Australia,book wedding planner Australia,event management enquiry" />
            </Helmet>

            <ContactUsLayout />
        </>
    );
}

export default ContactUsPage;