import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

const servicesLocales = "services";

const iconsList = [
    <RemoveRedEyeOutlinedIcon />,
    <SpaOutlinedIcon />,
    <WhatshotOutlinedIcon />,
    <VolunteerActivismOutlinedIcon />
];

const ServicesBody = () => {
    const theme = useTheme();
    const {t} = useTranslation();

    const servicesList = t(`${servicesLocales}.services`, { returnObjects: true });

    return (
        <>
            <Grid
                container
                spacing='12px'
                alignItems="stretch"
            >
                {/* Image and Description */}
                <Grid
                    size={{xs: 12, md: 6}}
                    sx={{ display: 'flex' }}
                >
                    <ServiceBox>
                        <Stack
                            direction='column'
                            width='100%'
                            height='100%'
                            spacing='8px'
                        >
                            {/* Image */}
                            <Box
                                sx={{
                                    width: '100%',
                                    flexGrow: 1
                                }}
                            >
                                <img 
                                    src="/images/Services/services.jpg" 
                                    alt="About us" 
                                    width='100%' 
                                    style={{
                                        borderRadius: '16px',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Box>
                            
                            {/* Description */}
                            <Typography
                                fontWeight={400}
                                fontSize={{xs: '12px', lg: '14px'}}
                                lineHeight='150%'
                                letterSpacing='2%'
                                color={theme.palette.text.primary}
                                textAlign={{xs: 'center', md: 'left'}}
                            >
                                {t(`${servicesLocales}.description`)}
                            </Typography>
                        </Stack>
                    </ServiceBox>
                </Grid>

                {/* Services */}
                <Grid
                    size={{xs: 12, md: 6}}
                    container
                >
                    {
                        servicesList.map((service, index) => {
                            return <Grid
                                key={index}
                                size={{xs: 12, md: 6}}
                                sx={{ display: 'flex' }}
                            >
                                <ServiceDetails 
                                    icon={iconsList[index]}
                                    title={service?.title}
                                    description={service?.description}
                                />
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </>
    );
}

export default ServicesBody;

const ServiceDetails = ({
    icon,
    title,
    description
}) => {
    const theme = useTheme();

    return (
        <>
            <ServiceBox>
                <Stack
                    direction='column'
                >
                    {/* Icon */}
                    {icon}

                    {/* Title */}
                    <Typography
                        fontWeight={600}
                        fontSize={{xs: '14px', lg: '24px'}}
                        lineHeight='120%'
                        letterSpacing='2%'
                        color={theme.palette.text.primary}
                        textAlign='left'
                        pt='8px'
                        pb={{xs: '16px', md: '24px'}}
                    >
                        {title}
                    </Typography>

                    {/* Description */}
                    <Typography
                        fontWeight={400}
                        fontSize={{xs: '12px', lg: '14px'}}
                        lineHeight='150%'
                        letterSpacing='2%'
                        color={theme.palette.text.primary}
                        textAlign='left'
                    >
                        {description}
                    </Typography>
                </Stack>
            </ServiceBox>
        </>
    );
}

const ServiceBox = ({
    children
}) => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: '16px',
                    p: '16px'
                }}
            >
                {children}
            </Box>
        </>
    );
}