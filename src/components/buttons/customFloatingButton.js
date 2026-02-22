import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import generalData from '../../data/general.json';

const CustomFloatingButton = () => {
    return (
        <>
            <Box 
                sx={{ 
                    position: 'fixed',
                    bottom: {xs: 20, md: 30},
                    right: {xs: 20, md: 30},
                    zIndex: 10
                }}
            >
                <Link
                    to={generalData.social.whatsapp}
                    target="_blank"
                    style={{
                        textDecoration: 'none'
                    }}
                >
                    <Box
                        sx={{
                            width: {xs: '50px', md: '70px'}
                        }}
                    >
                        <img 
                            src="/images/Contact/whatsapp-colored.png" 
                            alt="Whatsapp" 
                            width='100%'
                            style={{
                                animation: 'bounceAnimation 0.5s infinite'
                            }}
                        />
                    </Box>
                </Link>
            </Box>
        </>
    );
}

export default CustomFloatingButton;