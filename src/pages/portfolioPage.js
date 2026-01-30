import { Helmet } from "react-helmet";
import PortfolioLayout from '../sections/portfolio/portfolioLayout';

const PortfolioPage = () => {
    return (
        <>
            <Helmet>
                <title>Our Event Portfolio | Glowpoint Events Australia</title>
                <meta name="description" content="Explore Glowpoint Events’ portfolio of beautifully styled weddings, birthdays, and cultural celebrations delivered with elegance and creativity across Australia." />
                <meta name="keywords" content="Glowpoint Events portfolio,event gallery Australia,wedding portfolio,event styling showcase,luxury events Australia" />
            </Helmet>

            <PortfolioLayout />
        </>
    );
}

export default PortfolioPage;