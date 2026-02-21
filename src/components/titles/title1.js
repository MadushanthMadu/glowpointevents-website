import { Stack, Typography, useTheme } from "@mui/material";

const getTitle = (title, highLightedTextPosition) => {
    if(highLightedTextPosition === 0) return [...title];

    return title.split(' ');
}

const Title1 = ({
    title,
    fullWidth=false,
    highLightedTextPosition=0,
    alignment="left"
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
                        />
                    })
                    :
                    <TitleText 
                        title={title}
                    />
                }
            </Stack>
        </>
    );
}

export default Title1;

const TitleText = ({
    title,
    needHighlight=false
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
                {title}
            </Typography>
        </>
    );
}