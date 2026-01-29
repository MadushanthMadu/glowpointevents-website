import { useTranslation } from "react-i18next";

const NotFoundLayout = () => {
    const {t} = useTranslation();

    return (
        <>
            <h1>{t('notFound.description')}</h1>
        </>
    );
}

export default NotFoundLayout;