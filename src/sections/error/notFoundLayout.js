import { useTranslation } from "react-i18next";
import NavigationBar from "../navigation/navigationBar";
import FooterLayout from '../footer/footerLayout';
import { Box, Stack, Typography, useTheme } from "@mui/material";
import CustomButton from '../../components/buttons/customButton';
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShinyTextEffect from "../../components/effects/shinyTextEffect";

const NotFoundLayout = () => {
    const theme = useTheme();
    const {t} = useTranslation();

    const navigate = useNavigate();

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <NavigationBar inverse/>

                <Stack
                    className="main-section-px main-section-pb navigation-section-spacing"
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    flex={1}
                >
                    <Typography
                        fontWeight={700}
                        fontSize={{xs: '64px', md: '144px'}}
                        lineHeight='100%'
                        letterSpacing='2%'
                        color={theme.palette.text.primary}
                        textAlign='center'
                        pb={{xs: '8px', md: '12px'}}
                    >
                        <ShinyTextEffect 
                            text={404}
                            color={theme.palette.text.primary}
                        />
                    </Typography>

                    <Typography
                        fontWeight={400}
                        fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                        lineHeight='150%'
                        letterSpacing='2%'
                        color={theme.palette.text.primary}
                        textAlign='center'
                        pb={{xs: '20px', md: '40px'}}
                    >
                        {t('notFound.description')}
                    </Typography>

                    <CustomButton 
                        label={t('notFound.home')}
                        onClick={() => navigate('/')}
                        sx={{
                            width: 'fit-content'
                        }}
                        endIcon={<HomeOutlinedIcon />}
                    />
                </Stack>

                <FooterLayout />
            </Box>
        </>
    );
}

export default NotFoundLayout;