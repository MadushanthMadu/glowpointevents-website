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
                            rgba(0,0,0,0.65) 0%,
                            rgba(0,0,0,0.5) 15%,
                            rgba(0,0,0,0) 50%,
                            rgba(0,0,0,0) 100%
                        ),
                        url(/images/Hero/hero.jpg)
                    `,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "90% center",
                    backgroundAttachment: 'fixed',
                    minHeight: '846px'
                }}
            >
                {children}
            </Box>
        </>
    );
}

export default HeroBackground;