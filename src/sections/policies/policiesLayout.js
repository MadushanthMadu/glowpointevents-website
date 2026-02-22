import NavigationBar from "../navigation/navigationBar";
import FooterLayout from '../footer/footerLayout';
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Title1 from '../../components/titles/title1';
import generalData from '../../data/general.json';

const PoliciesLayout = ({
    json: data
}) => {
    const theme = useTheme();
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavigationBar inverse/>

            {/* Body */}
            <Box
                className="main-section-px main-section-pb navigation-section-spacing"
                width='100%'
                sx={{
                    backgroundColor: theme.palette.background.default
                }}
            >
                <Stack
                    direction='column'
                >
                    {/* Title and Updated On */}
                    <Box
                        sx={{
                            pb: {xs: '16px', md: '32px'}
                        }}
                    >
                        {/* Title */}
                        <Typography
                            fontWeight={700}
                            fontFamily='Inter'
                            fontSize={{xs: '32px', md: '42px', lg: '72px'}}
                            lineHeight='100%'
                            letterSpacing='2%'
                            color={theme.palette.text.primary}
                            textAlign='left'
                            pb={{xs: '8px', md: '12px'}}
                        >
                            {data.title}
                        </Typography>

                        {/* Updated On */}
                        <Typography
                            fontWeight={400}
                            fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                            lineHeight='150%'
                            letterSpacing='2%'
                            color={theme.palette.text.primary}
                            textAlign='justify'
                        >
                            {data.updated}
                        </Typography>
                    </Box>

                    {/* Body */}
                    <Stack
                        direction='column'
                        justifyContent='start'
                        alignItems='center'
                        width='100%'
                        spacing={{xs: '20px', md: '40px'}}
                    >
                        {
                            data.content.map((item, index) => {
                                return <PolicyBody 
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                />
                            })
                        }
                    </Stack>

                    {/* Contact Details */}
                    <Stack
                        direction='column'
                        justifyContent='start'
                        alignItems='start'
                        width='100%'
                        pt={{xs: '20px', md: '40px'}}
                    >
                        {/* Company name */}
                        <Typography
                            fontWeight={600}
                            fontSize={{xs: '14px', lg: '24px'}}
                            lineHeight='120%'
                            letterSpacing='2%'
                            color={theme.palette.text.primary}
                            textAlign='left'
                            pb={{xs: '8px', md: '12px'}}
                        >
                            {t('company')}
                        </Typography>

                        {
                            generalData.location.address.map((add, index) => {
                                return <Typography
                                    key={index}
                                    fontWeight={400}
                                    fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                                    textAlign="justify"
                                    lineHeight='150%'
                                    letterSpacing='2%'
                                    color={theme.palette.text.primary}
                                >
                                    {add}
                                </Typography>
                            })
                        }

                        {/* Email */}
                        <Typography
                            fontWeight={400}
                            fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                            textAlign="justify"
                            lineHeight='150%'
                            letterSpacing='2%'
                            color={theme.palette.text.primary}
                        >
                            Email:<span style={{paddingRight: '5px'}}></span>
                            <Link
                                to={`mailto:${generalData.social.email}`}
                                target="_blank"
                                style={{
                                    textDecoration: 'none',
                                    color: theme.palette.text.primary
                                }}
                            >
                                {generalData.social.email}
                            </Link>
                        </Typography>

                        {/* Mobile */}
                        <Typography
                            fontWeight={400}
                            fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                            textAlign="justify"
                            lineHeight='150%'
                            letterSpacing='2%'
                            color={theme.palette.text.primary}
                        >
                            Contact:<span style={{paddingRight: '5px'}}></span>
                            <Link
                                to={generalData.social.whatsapp}
                                target="_blank"
                                style={{
                                    textDecoration: 'none',
                                    color: theme.palette.text.primary
                                }}
                            >
                                {generalData.social.mobile}
                            </Link>
                        </Typography>
                    </Stack>
                </Stack>
            </Box>

            <FooterLayout />
        </>
    );
}

export default PoliciesLayout;

const PolicyBody = ({
    title,
    description
}) => {
    const theme = useTheme();

    return (
        <>
            <Stack
                direction='column'
                justifyContent='start'
                alignItems='start'
                width='100%'
                spacing={{xs: '8px', md: '12px'}}
            >
                <Typography
                    fontWeight={600}
                    fontSize={{xs: '14px', lg: '24px'}}
                    lineHeight='120%'
                    letterSpacing='2%'
                    color={theme.palette.text.primary}
                    textAlign='left'
                >
                    {title}
                </Typography>

                <Typography
                    fontWeight={400}
                    fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                    lineHeight='150%'
                    letterSpacing='2%'
                    color={theme.palette.text.primary}
                    textAlign='justify'
                >
                    {description}
                </Typography>
            </Stack>
        </>
    );
}