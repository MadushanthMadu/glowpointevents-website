import { Helmet } from "react-helmet";
import PoliciesLayout from '../sections/policies/policiesLayout';
import privacyPolicyData from '../data/policies/privacyPolicy.json';

const PrivacyPolicyPage = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Glowpoint Events Australia</title>
                <meta name="description" content="Read the Glowpoint Events privacy policy to understand how we collect, use, and protect your personal information when planning your special events." />
                <meta name="keywords" content="Glowpoint Events privacy policy,event company privacy Australia,personal information protection events" />
            </Helmet>

            <PoliciesLayout json={privacyPolicyData}/>
        </>
    );
}

export default PrivacyPolicyPage;