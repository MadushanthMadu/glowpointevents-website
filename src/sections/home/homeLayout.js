import {
    Box,
    Button,
    Stack,
    Typography,
    useTheme,
    Grid
} from '@mui/material';

const HomeLayout = () => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    backgroundImage: 'url(/images/temp/underConstruction.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh'
                }}
            >
                <Stack
                    direction='column'
                    justifyContent='center'
                    height='100vh'
                    // px={{xs: '15px', md: '30px', lg: '60px'}}
                    // spacing={{xs: '12px', lg: '24px'}}
                    width='100%'
                >
                    <div 
                    style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '25px',
                        height: '100%',
                        margin: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <Grid container sx={{height: '100%'}}>
                            <Grid
                            size={{ xs: 12, md: 6 }} 
                            sx={{
                                pl: {xs: '10%', md:'5%'},
                                pr: {xs: '10%', md:'5%'},
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'nowrap',
                                justifyContent: 'center',
                                alignItems: {xs:'center', md:'start !important'}
                            }}>
                                <Typography
                                    fontFamily={theme.typography.fontFamily.primary}
                                    fontWeight={900}
                                    fontSize={{xs: '12px', md: '24px', lg: '32px'}}
                                    textTransform='uppercase'
                                    textAlign={{xs:'center', md:'left'}}
                                    color={theme.palette.primary.contrastText}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <span style={{backgroundColor: theme.palette.primary.main, padding: '8px 24px 8px 24px', borderRadius: '8px', letterSpacing:'2px', lineHeight: 'normal'}}>Glowpoint Events</span>
                                    {/* <span style={{letterSpacing:'2px'}}>Glowpoint Events</span> */}
                                </Typography>

                                {/* <Typography
                                    fontFamily={theme.typography.fontFamily.secondary}
                                    fontWeight={900}
                                    fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                                    textTransform='uppercase'
                                    textAlign='left'
                                    color={theme.palette.text.primary}
                                >
                                    <span style={{letterSpacing:'2px'}}>The new start is coming</span>
                                </Typography> */}

                                <Typography
                                    fontFamily='Inter'
                                    fontWeight={400}
                                    fontSize={{xs: '12px', md: '14px', lg: '16px'}}
                                    color={theme.palette.text.primary}
                                    textAlign={{xs:'center', md:'left'}}
                                >
                                    <span style={{color: theme.palette.primary.main, textTransform: 'uppercase', fontWeight: '900'}}>The new start is coming</span><br/>
                                    Glowpoint Events is preparing something truly special. Our new website will soon showcase our premium weddings and celebrations across Australia. We look forward to creating unforgettable moments with you.
                                </Typography>

                                <Button 
                                variant="contained"
                                sx={{
                                    backgroundColor: '#ffffff',
                                    boxShadow: 'none',
                                    borderColor: theme.palette.primary.main,
                                    border: '2px solid !important',
                                    color: theme.palette.primary.main,
                                    fontFamily: 'Inter',
                                    width: 'fit-content',
                                    px: 2,
                                    my: 1,
                                    py: 1,
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    '&: hover': {
                                        transform: 'scale(0.95)'
                                    }
                                }}
                                onClick={() => {
                                    window.location.href = 'https://forms.zohopublic.com/helloglowpoi1/form/GlowpointEventsWebContactForm/formperma/gBQtVTB03P7xZye5tnrjJA-d32LpDoJerDX3WB_sIYk';
                                }}
                                >
                                    Contact Us
                                </Button>
                            </Grid>

                            <Grid 
                            size={{ xs: 12, md: 6 }} 
                            sx={{
                                backgroundImage: 'url(/images/temp/side-panel.jpg)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX: 'center',
                                backgroundPositionY: 'center',
                                borderRadius: {xs:'0px 0px 25px 25px' , md:'0px 25px 25px 0px'},
                                border: '8px solid #FFFFFF'
                            }}
                            ></Grid>
                        </Grid>

                        <Stack
                            direction='row'
                            justifyContent='center'
                            position='absolute'
                            bottom={10}
                        >
                            <Typography
                                fontFamily='Inter'
                                fontWeight={400}
                                fontSize={{xs: '12px', md: '14px'}}
                                color={theme.palette.text.secondary}
                                sx={{
                                    ml: 'auto',
                                    mr: 'auto'
                                }}
                            >
                                © 2026 Glowpoint Events. All Rights Reserved
                            </Typography>
                        </Stack>
                    </div>
                </Stack>
            </Box>
        </>
    );
}

export default HomeLayout;