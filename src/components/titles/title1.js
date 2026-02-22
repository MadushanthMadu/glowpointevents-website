import { Stack, Typography, useTheme } from "@mui/material";
import ShinyTextEffect from '../effects/shinyTextEffect';

const getTitle = (title, highLightedTextPosition) => {
    if(highLightedTextPosition === 0) return [...title];

    return title.split(' ');
}

const Title1 = ({
    title,
    fullWidth=false,
    highLightedTextPosition=0,
    alignment="left",
    showShinyEffect=true
}) => {
    return (
        <>
            <Stack
                direction='row'
                justifyContent={{xs: 'center', md: alignment}}
                alignItems='center'
                sx={{
                    width: {xs: '100%', md: fullWidth ? '100%' : '50%', lg: fullWidth ? '100%' : '75%'},
                    flexWrap: 'wrap',
                    pb: {xs: '16px', md: '32px'}
                }}
                gap={{xs: '8px', md: '12px'}}
                data-aos="fade-up"
            >
                {
                    highLightedTextPosition > 0
                    ?
                    getTitle(title, highLightedTextPosition).map((wording, index) => {
                        return <TitleText 
                            key={index}
                            title={wording}
                            needHighlight={index + 1 === highLightedTextPosition}
                            showShinyEffect
                        />
                    })
                    :
                    <TitleText 
                        title={title}
                        showShinyEffect={false}
                    />
                }
            </Stack>
        </>
    );
}

export default Title1;

const TitleText = ({
    title,
    needHighlight=false,
    showShinyEffect=true
}) => {
    const theme = useTheme();

    return (
        <>
            <Typography
                fontWeight={700}
                fontFamily='Inter'
                fontSize={{xs: '32px', md: '42px', lg: '72px'}}
                lineHeight='100%'
                letterSpacing='2%'
                color={needHighlight ? theme.palette.primary.light : theme.palette.text.primary}
                textAlign={{xs: 'center', md: 'left'}}
            >
                {
                    showShinyEffect
                    ?
                    <ShinyTextEffect 
                        text={title}
                        color={needHighlight ? theme.palette.primary.light : theme.palette.text.primary}
                        speed={4}
                        shineColor={needHighlight ? theme.palette.background.default : theme.palette.text.primary}
                    />
                    :
                    {title}
                }
            </Typography>
        </>
    );
}