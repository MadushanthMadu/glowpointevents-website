import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { alpha, Drawer, Stack, useScrollTrigger, useTheme } from '@mui/material';
import CustomButton from '../../components/customButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useTranslation } from 'react-i18next';

const navigationLocales = "navigation";

const pages = [
    {
        id: 0,
        label: `${navigationLocales}.home`,
        to: '/'
    }, 
    {
        id: 1,
        label: `${navigationLocales}.about`,
        to: '/about-us'
    }, 
    {
        id: 2,
        label: `${navigationLocales}.portfolio`,
        to: '/portfolio'
    }
];

function NavigationBar() {
    const theme = useTheme();
    const {t} = useTranslation();

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu  = useCallback((event) => {
        setAnchorElNav(event.currentTarget);
    }, []);
    const handleCloseNavMenu  = useCallback(() => {
        setAnchorElNav(null);
    }, []);

    const { pathname } = useLocation();
    const [selectedPageIndex, setSelectedPageIndex] = useState(-1);
    useEffect(() => {
        console.log(pathname);

        let index = -1;

        for(let i = 0; i < pages.length; i++){
            if(pathname === pages[i].to){
                index = i;
                break;
            }
        }
        
        setSelectedPageIndex(index);
    }, [pathname]);
    const selectAPage = useCallback((to) => {
        handleCloseNavMenu();
        navigate(to);
    }, []);

    const trigger = useScrollTrigger({
        // Disable the delay on scroll direction change
        disableHysteresis: true, 
        // Trigger as soon as scrolling starts (can adjust this value)
        // You can also pass the window object if needed: window: props.window
        threshold: 0
    });

    return (
        <AppBar 
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: trigger ? theme.palette.background.default : 'transparent',
                py: {xs: '12px', md: trigger ? '5px' : '15px'}
            }}
            className='main-section-px'
        >
            <Container 
                maxWidth="100%" 
                disableGutters
            >
                <Toolbar disableGutters>
                    {/* Logo - PC and Tab View */}
                    <Logo trigger={trigger}/>

                    {/* Navigation Options - Mobile View */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{color: trigger ? theme.palette.text.primary : theme.palette.background.default}}/>
                        </IconButton>

                        <Drawer
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                backgroundColor: alpha(theme.palette.primary.light, 0.5)
                            }}
                            slotProps={{
                                paper: {
                                    sx: {
                                        backgroundColor: theme.palette.primary.dark
                                    }
                                }
                            }}
                        >
                            <Stack
                                direction='column'
                                alignItems='center'
                                sx={{
                                    pt: '20px',
                                    px: '30px'
                                }}
                                spacing='20px'
                            >
                                {/* Logo */}
                                <Box
                                    sx={{
                                        width: '100px'
                                    }}
                                >
                                    <img 
                                        src='/images/Logo/GE-W-G.png' 
                                        alt='Logo' 
                                        width='100%' 
                                    />
                                </Box>

                                {/* Navigation Options */}
                                {
                                    pages.map((page, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => selectAPage(page.to)}
                                            sx={{ 
                                                textTransform: 'none',
                                                color: theme.palette.primary.contrastText, 
                                                display: 'block',
                                                fontSize: selectedPageIndex === page.id ? '18px' : '16px',
                                                fontWeight: selectedPageIndex === page.id ? 700 : 400,
                                                backgroundColor: 'transparent',
                                                '&: hover': {
                                                    transform: 'scale(0.95)',
                                                    backgroundColor: 'transparent'
                                                }
                                            }}
                                        >
                                            {t(page.label)}
                                        </Button>
                                    ))
                                }
                            </Stack>
                        </Drawer>
                    </Box>

                    {/* Navigation Options - PC and Tab View */}
                    <Stack 
                        direction='row'
                        justifyContent='center'
                        sx={{ 
                            flexGrow: 1, 
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <Stack
                            direction='row'
                            justifyContent='center'
                            spacing='48px'
                            sx={{
                                backgroundColor: alpha(theme.palette.background.default, 0.2),
                                boxShadow: trigger ? 'none' : '0 4px 30px rgba(0, 0, 0, 0.1)',
                                backdropFilter: trigger ? 'none' : 'blur(5px)',
                                WebkitBackdropFilter: trigger ? 'none' : 'blur(5px)',
                                py: trigger ? 0 : '12px',
                                px: '24px',
                                borderRadius: '100px'
                            }}
                        >
                            {
                                pages.map((page, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => selectAPage(page.to)}
                                        sx={{ 
                                            textTransform: 'none',
                                            color: trigger ? theme.palette.text.primary : theme.palette.primary.contrastText, 
                                            display: 'block',
                                            fontSize: selectedPageIndex === page.id ? '18px' : '16px',
                                            fontWeight: selectedPageIndex === page.id ? 700 : 400,
                                            backgroundColor: 'transparent',
                                            '&: hover': {
                                                transform: 'scale(0.95)',
                                                backgroundColor: 'transparent'
                                            }
                                        }}
                                    >
                                        {t(page.label)}
                                    </Button>
                                ))
                            }
                        </Stack>
                    </Stack>

                    {/* Contact Us */}
                    <Box sx={{ flexGrow: 0 }}>
                        <CustomButton 
                            label={t(`${navigationLocales}.contact`)}
                            onClick={() => navigate('/contact-us')}
                            endIcon={<ArrowOutwardIcon />}
                            sx={{
                                backgroundColor: trigger ? theme.palette.primary.main : theme.palette.background.default,
                                color: trigger ? theme.palette.primary.contrastText : theme.palette.primary.main,
                                fontWeight: 600
                            }}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavigationBar;

const Logo = ({
    trigger
}) => {
    return (
        <>
            <Link
                to='/'
                style={{
                    textDecoration: 'none'
                }}
            >
                <Box
                    sx={{
                        width: {xs: '50px', md: '90px'},
                        display: { xs: 'none', md: 'flex' }
                    }}
                >
                    <img 
                        src={trigger ? '/images/Logo/GE-T-G.png' : '/images/Logo/GE-W-G.png'}
                        alt='Logo' 
                        width='100%' 
                    />
                </Box>
            </Link>
        </>
    );
}