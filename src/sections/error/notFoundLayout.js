import { useTranslation } from "react-i18next";
import NavigationBar from "../navigation/navigationBar";
import FooterLayout from '../footer/footerLayout';

const NotFoundLayout = () => {
    const {t} = useTranslation();

    return (
        <>
            <NavigationBar inverse/>

            <FooterLayout />
        </>
    );
}

export default NotFoundLayout;