import { Helmet } from "react-helmet";
import NotFoundLayout from "../sections/error/notFoundLayout";

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>Page Not Found | Glowpoint Events Australia</title>
            </Helmet>

            <NotFoundLayout />
        </>
    );
}

export default NotFoundPage;