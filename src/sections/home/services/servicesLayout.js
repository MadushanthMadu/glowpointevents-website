import Stack from "@mui/material/Stack";
import Title1 from "../../../components/titles/title1";
import { useTranslation } from "react-i18next";
import ServicesBody from "./servicesBody";

const servicesLocales = "services";

const ServicesLayout = () => {
    const {t} = useTranslation();

    return (
        <>
            <Stack
                direction='column'
                width='100%'
                className='main-section-px main-section-pb'
            >
                <Title1 
                    title={t(`${servicesLocales}.title`)}
                    highLightedTextPosition={3}
                />

                <ServicesBody />
            </Stack>
        </>
    );
}

export default ServicesLayout;