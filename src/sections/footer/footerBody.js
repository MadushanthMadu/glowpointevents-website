import {
    Box,
    Divider,
    Grid,
    Stack,
    Typography,
    useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import portfolioData from '../../data/portfolio.json';
import generalData from '../../data/general.json';

const quickLinks = {
    title: "footer.quickLinks",
    list: [
        {label: "navigation.home", to: "/"},
        {label: "navigation.about", to: "/about-us"},
        {label: "navigation.portfolio", to: "/portfolio"},
        {label: "footer.contactUs", to: "/contact-us"}
    ]
};

const getEventsList = () => {
    const list = [];

    for(let i = 0; i < portfolioData.length; i++){
        let path = portfolioData[i].category.toLowerCase();
        path = path.replaceAll(' ', '-');
        path = path.replaceAll('&', 'and');

        list.push({label: portfolioData[i].category, to: `/portfolio/${path}`})
    }

    return list;
}

const socialMediaList = [
    {name: "Email", icon: "/images/Contact/mail.png", link: `mailto:${generalData.social.email}`},
    {name: "Whatsapp", icon: "/images/Contact/whatsapp.png", link: generalData.social.whatsapp},
    {name: "Instagram", icon: "/images/Contact/instagram.png", link: generalData.social.instagram},
    {name: "Facebook", icon: "/images/Contact/facebook.png", link: generalData.social.facebook},
    {name: "Tiktok", icon: "/images/Contact/tiktok.png", link: generalData.social.tiktok},
    {name: "Pinterest", icon: "/images/Contact/pinterest.png", link: generalData.social.pinterest},
    {name: "Google Business", icon: "/images/Contact/google.png", link: generalData.social.googleBusiness}
];

const FooterBody = () => {
    const theme = useTheme();
    const {t} = useTranslation();

    return (
        <>
            <Stack
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    p: {xs: '30px', md: '60px'}
                }}
                spacing={{xs: '30px', md: '40px'}}
            >
                {/* Quick links */}
                <Grid
                    justifyContent='start'
                    container
                    spacing={{xs: '30px', md: '40px'}}
                >
                    {/* Description */}
                    <Grid
                        size={{xs: 12, md: 3}}
                    >
                        <Box
                            direction='row'
                            justifyContent='center'
                            width={{md: '50px', lg: '75px'}}
                            display={{xs: 'none', md: 'flex'}}
                            pb='8px'
                        >
                            <img 
                                src='/images/Logo/GE-G.png' 
                                alt='Logo' 
                                width='100%' 
                            />
                        </Box>

                        <Typography
                            fontWeight={400}
                            fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                            lineHeight='150%'
                            letterSpacing='2%'
                            color={theme.palette.text.primary}
                            textAlign={{xs: 'center', md: 'left'}}
                        >
                            {t(`footer.description`)}
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid
                        size={{xs: 12, md: 2}}
                    >
                        <QuickLinkList 
                            title={quickLinks.title}
                            list={quickLinks.list}
                        />
                    </Grid>

                    {/* Events Links */}
                    <Grid
                        size={{xs: 12, md: 3}}
                    >
                        <QuickLinkList 
                            title={t('footer.events')}
                            list={getEventsList()}
                        />
                    </Grid>

                    {/* Location */}
                    <Grid
                        size={{xs: 12, md: 2}}
                    >
                        <QuickLinkTitle title={t('footer.location')}/>

                        {/* Address */}
                        <Box
                            pb='8px'
                        >
                            {
                                generalData.location.address.map((address, index) => {
                                    return <Typography
                                        key={index}
                                        fontWeight={400}
                                        fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                                        lineHeight='150%'
                                        letterSpacing='2%'
                                        color={theme.palette.text.primary}
                                    >
                                        {address}
                                    </Typography>
                                })
                            }
                        </Box>

                        {/* Map Button */}
                        <Link
                            to={generalData.location.googleMap}
                            target='_blank'
                            style={{
                                textDecoration: 'none'
                            }}
                        >
                            <Box
                                sx={{
                                    width: {xs: '25px', md: '40px'},
                                    '&: hover': {
                                        transform: 'scale(0.9)'
                                    }
                                }}
                            >
                                <img 
                                    src="/images/Contact/pin.png"
                                    alt="Pin"
                                    width='100%' 
                                />
                            </Box>
                        </Link>
                    </Grid>

                    {/* Social Media */}
                    <Grid
                        size={{xs: 12, md: 2}}
                    >
                        <QuickLinkTitle title={t('footer.socialMedia')}/>

                        <Stack
                            direction='row'
                            flexWrap='wrap'
                            gap='8px'
                            pt={{xs: '8px', md: '12px'}}
                        >
                            {
                                socialMediaList.map((item, index) => {
                                    return <Link
                                        key={index}
                                        to={item.link}
                                        target='_blank'
                                        style={{
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: {xs: '25px', md: '40px'},
                                                '&: hover': {
                                                    transform: 'scale(0.9)'
                                                }
                                            }}
                                        >
                                            <img 
                                                src={item.icon} 
                                                alt={item.name} 
                                                width='100%' 
                                            />
                                        </Box>
                                    </Link>
                                })
                            }
                        </Stack>
                    </Grid>
                </Grid>

                {/* Policies, Environment and Developer */}
                <Stack
                    direction={{xs: 'column-reverse', md: 'row'}}
                    justifyContent={{xs: 'start', md: 'space-between'}}
                    spacing={{xs: '30px', md: '40px'}}
                >
                    {/* Environment and Developer */}
                    <Stack
                        direction='column'
                    >
                        {/* Environment */}
                        <Typography
                            fontWeight={400}
                            fontSize={{xs: '12px', md: '14px', lg: '16px'}}
                            lineHeight='150%'
                            letterSpacing='2%'
                            color={theme.palette.text.primary}
                        >
                            {`${process.env.REACT_APP_ENV} v${process.env.REACT_APP_APP_VERSION}`}
                        </Typography>

                        {/* Developer */}
                        <Link
                            to="https://code3x.tech"
                            target='_blank'
                            style={{
                                textDecoration: 'none'
                            }}
                        >
                            <Typography
                                fontWeight={400}
                                fontSize={{xs: '12px', md: '14px', lg: '16px'}}
                                lineHeight='150%'
                                letterSpacing='2%'
                                color={theme.palette.secondary.light}
                                sx={{
                                    '&: hover': {
                                        transform: 'scale(0.95)'
                                    }
                                }}
                            >
                                Developed by code3x
                            </Typography>
                        </Link>
                    </Stack>

                    {/* Privacy Policy */}
                    <Stack
                        direction='row'
                        spacing={{xs: '12px', md: '24px'}}
                    >
                        {/* Privacy Policy */}                  
                        <Link
                            to="/privacy-policy"
                            style={{
                                textDecoration: 'none'
                            }}
                        >
                            <Typography
                                fontWeight={400}
                                fontSize={{xs: '12px', md: '14px', lg: '16px'}}
                                lineHeight='150%'
                                letterSpacing='2%'
                                color={theme.palette.secondary.light}
                                sx={{
                                    '&: hover': {
                                        transform: 'scale(0.95)'
                                    }
                                }}
                            >
                                {t('footer.privacyPolicy')}
                            </Typography>
                        </Link>

                        {/* Terms & Conditions */}                  
                        <Link
                            to="/terms-and-conditions"
                            style={{
                                textDecoration: 'none'
                            }}
                        >
                            <Typography
                                fontWeight={400}
                                fontSize={{xs: '12px', md: '14px', lg: '16px'}}
                                lineHeight='150%'
                                letterSpacing='2%'
                                color={theme.palette.secondary.light}
                                sx={{
                                    '&: hover': {
                                        transform: 'scale(0.95)'
                                    }
                                }}
                            >
                                {t('footer.terms')}
                            </Typography>
                        </Link>
                    </Stack>
                </Stack>

                <Divider />

                {/* Copyrights */}
                <Typography
                    fontWeight={400}
                    fontSize={{xs: '12px', md: '14px', lg: '16px'}}
                    lineHeight='150%'
                    letterSpacing='2%'
                    color={theme.palette.secondary.light}
                    textAlign='center'
                >
                    &copy; {`${new Date().getFullYear()} ${t('company')}. All Rights Reserved`}
                </Typography>
            </Stack>
        </>
    );
}

export default FooterBody;

const QuickLinkList = ({
    title,
    list
}) => {
    const theme = useTheme();
    const {t} = useTranslation();

    return (
        <>
            <Stack
                direction='column'
                spacing={{xs: '8px', md: '12px'}}
            >
                <QuickLinkTitle title={t(title)}/>

                {
                    list.map((item, index) => {
                        return <Link
                            key={index}
                            to={item.to}
                            style={{
                                textDecoration: 'none'
                            }}
                        >
                            <Typography
                                fontWeight={400}
                                fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                                lineHeight='150%'
                                letterSpacing='2%'
                                color={theme.palette.text.primary}
                                sx={{
                                    '&: hover': {
                                        transform: 'scale(0.95)'
                                    }
                                }}
                            >
                                {t(item.label)}
                            </Typography>
                        </Link>
                    })
                }
            </Stack>
        </>
    );
}

const QuickLinkTitle = ({
    title
}) => {
    const theme = useTheme();

    return (
        <>
            <Typography
                fontFamily='Inter'
                fontWeight={600}
                fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                lineHeight='150%'
                letterSpacing='2%'
                color={theme.palette.text.primary}
                pb='8px'
            >
                {title}
            </Typography>
        </>
    );
}