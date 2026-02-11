import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout";

import HomePage from "../pages/homePage";

import AboutUsPage from "../pages/aboutUsPage";
import PortfolioPage from "../pages/portfolioPage";
import ContactUsPage from "../pages/contactUsPage";

import PrivacyPolicyPage from "../pages/privacyPolicyPage";
import TermsAndConditionsPage from "../pages/termsAndConditionsPage";

import NotFoundPage from "../pages/notFoundPage";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />

                {/* <Route path="about-us" element={<AboutUsPage />} />
                <Route path="portfolio" element={<PortfolioPage />} />
                <Route path="contact-us" element={<ContactUsPage />} />

                <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />

                <Route path="*" element={<NotFoundPage />} /> */}
            </Route>
        </Routes>
    );
};

export default Router;