import {
    Box,
    Button,
    Stack,
    Typography,
    useTheme
} from '@mui/material';

const HomeLayout = () => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    backgroundImage:
                    `
                        linear-gradient(
                            to right,
                            rgba(0,0,0,0.65) 0%,
                            rgba(0,0,0,0.75) 15%,
                            rgba(0,0,0,0.5) 75%,
                            rgba(0,0,0,0) 100%
                        ),
                        url(/images/temp/underConstruction.jpg)
                    `,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "90% center",
                    backgroundAttachment: 'fixed',
                    minHeight: '100vh'
                }}
            >
                <Stack
                    direction='column'
                    justifyContent='center'
                    height='100vh'
                    px={{xs: '15px', md: '30px', lg: '60px'}}
                    spacing={{xs: '12px', lg: '24px'}}
                    width='100%'
                >
                    <Typography
                        fontWeight={900}
                        fontSize={{xs: '12px', md: '24px', lg: '32px'}}
                        textTransform='uppercase'
                        color={theme.palette.primary.light}
                    >
                        <span style={{fontFamily: 'Inter', backgroundColor: theme.palette.background.paper, padding: '4px'}}>Glowpoint Events</span>
                        <span style={{fontFamily: 'Inter', color: theme.palette.text.secondary}}> is under construction</span>
                    </Typography>

                    <Typography
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize={{xs: '12px', md: '14px', lg: '16px'}}
                        color={theme.palette.text.secondary}
                    >
                        Glowpoint Events is preparing something truly special. Our new website will soon showcase our premium weddings and celebrations across Australia. We look forward to creating unforgettable moments with you.
                    </Typography>

                    <Button 
                        variant="contained"
                        sx={{
                            fontFamily: 'Inter',
                            width: 'fit-content',
                            px: 4,
                            py: 1,
                            borderRadius: '50px',
                            textTransform: 'none',
                            '&: hover': {
                                transform: 'scale(0.95)'
                            }
                        }}
                        onClick={() => {
                            window.location.href = 'mailto:hello@glowpointevents.com';
                        }}
                    >
                        Contact Us
                    </Button>

                    <Stack
                        direction='row'
                        justifyContent='center'
                        position='absolute'
                        bottom={30}
                    >
                        <Typography
                            fontFamily='Inter'
                            fontWeight={400}
                            fontSize={{xs: '12px', md: '14px'}}
                            color={theme.palette.text.secondary}
                        >
                            © 2026 Glowpoint Events. All Rights Reserved
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default HomeLayout;