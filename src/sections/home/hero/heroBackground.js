import { Box } from "@mui/material";

const HeroBackground = ({
    children
}) => {
    return (
        <>
            <Box
                sx={{
                    backgroundImage:
                    `
                        linear-gradient(
                            to right,
                            rgba(0,0,0,1) 0%,
                            rgba(0,0,0,0.5) 15%,
                            rgba(0,0,0,0.25) 75%,
                            rgba(0,0,0,0) 100%
                        ),
                        url(/images/Hero/hero.jpg)
                    `,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: {xs: "20% center", md: "25% center", lg: "90% center"}
                }}
            >
                {children}
            </Box>
        </>
    );
}

export default HeroBackground;