import { Helmet } from "react-helmet";
import PoliciesLayout from '../sections/policies/policiesLayout';
import termsAndConditionsData from '../data/policies/termsAndConditions.json';

const TermsAndConditionsPage = () => {
    return (
        <>
            <Helmet>
                <title>Terms and Conditions | Glowpoint Events Australia</title>
                <meta name="description" content="View the terms and conditions for Glowpoint Events’ services, outlining booking policies, responsibilities, and guidelines for event management across Australia." />
                <meta name="keywords" content="Glowpoint Events terms,event booking terms Australia,event management conditions,service agreement events" />
            </Helmet>

            <PoliciesLayout json={termsAndConditionsData}/>
        </>
    );
}

export default TermsAndConditionsPage;