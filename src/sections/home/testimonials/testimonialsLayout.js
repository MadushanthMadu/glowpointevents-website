import { Stack } from "@mui/material";
import Title1 from "../../../components/titles/title1";
import { useTranslation } from "react-i18next";
import TestimonialsBody from "./testimonialsBody";
import CustomButton from '../../../components/customButton';
import generalData from '../../../data/general.json';
import { Link } from "react-router-dom";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const testimonialsLocales = "testimonials";

const TestimonialsLayout = () => {
    const {t} = useTranslation();

    return (
        <>
            <Stack
                direction='column'
                width='100%'
                className='main-section-px main-section-pb'
            >
                <Title1 
                    title={t(`${testimonialsLocales}.title`)}
                    highLightedTextPosition={3}
                    fullWidth
                    alignment="center"
                />

                <TestimonialsBody />

                <Stack
                    direction='row'
                    justifyContent='center'
                    pt={{xs: '50px', md: '75px'}}
                >
                    <Link
                        to={generalData.google.rating}
                        target="_blank"
                    >
                        <CustomButton 
                            label={t(`${testimonialsLocales}.action`)}
                            onClick={() => {}}
                            endIcon={<ThumbUpIcon />}
                        />
                    </Link>
                </Stack>
            </Stack>
        </>
    );
}

export default TestimonialsLayout;