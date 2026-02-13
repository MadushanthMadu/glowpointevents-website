import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { alpha, Drawer, Stack, useTheme } from '@mui/material';
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

    return (
        <AppBar 
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: 'transparent',
                pt: {xs: '15px', md: '30px'}
            }}
            className='main-section-px'
        >
            <Container 
                maxWidth="100%" 
                disableGutters
            >
                <Toolbar disableGutters>
                    {/* Logo - PC and Tab View */}
                    <Logo />

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
                            <MenuIcon />
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
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                backdropFilter: 'blur(5px)',
                                WebkitBackdropFilter: 'blur(5px)',
                                py: '12px',
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
                    </Stack>

                    {/* Contact Us */}
                    <Box sx={{ flexGrow: 0 }}>
                        <CustomButton 
                            label={t(`${navigationLocales}.contact`)}
                            onClick={() => navigate('/contact-us')}
                            endIcon={<ArrowOutwardIcon />}
                            sx={{
                                backgroundColor: theme.palette.background.default,
                                color: theme.palette.primary.main,
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

const Logo = () => {
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
                        src='/images/Logo/GE-W-G.png' 
                        alt='Logo' 
                        width='100%' 
                    />
                </Box>
            </Link>
        </>
    );
}