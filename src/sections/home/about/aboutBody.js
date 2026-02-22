import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomButton from '../../../components/buttons/customButton';
import { useNavigate } from "react-router-dom";
import CelebrationIcon from '@mui/icons-material/Celebration';

const aboutLocales = "about";

const AboutBody = () => {
    const theme = useTheme();
    const {t} = useTranslation();

    const description = t(`${aboutLocales}.description`, { returnObjects: true });

    const navigate = useNavigate();

    return (
        <>
            <Grid
                direction='row'
                justifyContent='space-between'
                container
                className='main-section-px main-section-py'
                spacing='50px'
            >
                {/* Description */}
                <Grid
                    size={{xs: 12, md: 6}}
                >
                    <Stack
                        direction='column'
                        alignItems={{xs: 'center', md: 'start'}}
                        spacing={{xs: '12px', md: '15px'}}
                    >
                        {
                            description.map((des, index) => {
                                return <Typography
                                    key={index}
                                    fontWeight={400}
                                    fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                                    lineHeight='150%'
                                    letterSpacing='2%'
                                    color={theme.palette.text.primary}
                                    textAlign={{xs: 'center', md: 'justify'}}
                                    data-aos="fade"
                                >
                                    {des}
                                </Typography>
                            })
                        }

                        <Box
                            sx={{
                                pt: {xs: '15px', md: '30px'}
                            }}
                            data-aos="fade"
                            data-aos-delay="100"
                        >
                            <CustomButton 
                                label={t(`${aboutLocales}.action`)}
                                onClick={() => navigate('/contact-us')}
                                endIcon={<CelebrationIcon />}
                            />
                        </Box>
                    </Stack>
                </Grid>

                {/* Image */}
                <Grid
                    size={{xs: 12, md: 6}}
                    sx={{
                        display: {xs: 'none', md: 'flex'}
                    }}
                >
                    <Box
                        sx={{
                            width: '100%'
                        }}
                        data-aos="zoom-in"
                        data-aos-delay="150"
                    >
                        <img 
                            src="/images/About/about.jpg" 
                            alt="About us" 
                            width='100%' 
                            style={{
                                borderRadius: '16px',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default AboutBody;