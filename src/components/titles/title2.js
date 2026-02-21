import { Grid, Stack, Typography, useTheme } from "@mui/material";
import Title1 from "./title1";

const Title2 = ({
    title,
    description,
    highLightedTextPosition=0
}) => {
    const theme = useTheme();

    return (
        <>
            <Grid
                sx={{
                    width: '100%',
                    pb: {xs: '16px', md: '32px'}
                }}
                container
            >
                <Grid
                    size={{xs: 12, md: 8}}
                >
                    <Title1 
                        title={title}
                        highLightedTextPosition={highLightedTextPosition}
                        fullWidth
                    />
                </Grid>

                <Grid
                    size={{xs: 12, md: 4}}
                >
                    <Typography
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize={{xs: '14px', md: '16px', lg: '18px'}}
                        lineHeight='150%'
                        letterSpacing='2%'
                        color={theme.palette.text.primary}
                        textAlign={{xs: 'center', md: 'right'}}
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default Title2;