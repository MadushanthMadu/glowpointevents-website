import { Helmet } from "react-helmet";
import PortfolioLayout from '../sections/portfolio/portfolioLayout';

const PortfolioPage = () => {
    return (
        <>
            <Helmet>
                <title>Portfolio</title>
                <meta name="description" content="Description here..." />
                <meta name="keywords" content="Keywords separated with comma here..." />
            </Helmet>

            <PortfolioLayout />
        </>
    );
}

export default PortfolioPage;