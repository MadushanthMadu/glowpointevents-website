import { Avatar, Box, Rating, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomCarousel from "../../../components/carousel/customCarousel";
import testimonialData from '../../../data/testimonials.json';

const getTestimonialsList = (list) => {
    const testimonialList = [];

    let left = 0;

    while(left < list.length){
        testimonialList.push(<TestimonialCard order={left} details={list[left]}/>);

        left++;
    }

    return testimonialList;
}

const TestimonialsBody = () => {
    const theme = useTheme();

    const isMdDevice = useMediaQuery(theme.breakpoints.down('lg'));
    const isSmDevice = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <CustomCarousel 
                list={getTestimonialsList(testimonialData)}
                slidesToShow={isSmDevice ? 1 : isMdDevice ? 2 : 4}
                centerMode={false}
                autoplaySpeed={3000}
                dots={false}
            />
        </>
    );
}

export default TestimonialsBody;

const TestimonialCard = ({
    order,
    details
}) => {
    const theme = useTheme();

    const isInLightMode = () => order %2 === 0;

    return (
        <>
            <Box
                sx={{
                    backgroundColor: isInLightMode() ? theme.palette.background.paper : theme.palette.secondary.dark,
                    borderRadius: '16px',
                    p: '16px',
                    mx: '10px',
                    mb: '10px'
                }}
                data-aos="fade"
            >
                <Stack
                    direction='column'
                    minHeight={{xs: 0, md: '200px', lg: '300px'}}
                >
                    {/* Event type */}
                    <Typography
                        fontWeight={600}
                        fontSize={{xs: '14px', lg: '24px'}}
                        lineHeight='120%'
                        letterSpacing='2%'
                        color={isInLightMode() ? theme.palette.text.primary : theme.palette.primary.contrastText}
                        textAlign='left'
                        pt='8px'
                        pb={{xs: '16px', md: '24px'}}
                    >
                        {details?.eventType}
                    </Typography>

                    {/* Description */}
                    <Typography
                        fontWeight={400}
                        fontSize={{xs: '14px', lg: '16px'}}
                        lineHeight='150%'
                        letterSpacing='2%'
                        color={isInLightMode() ? theme.palette.text.primary : theme.palette.primary.contrastText}
                        textAlign='left'
                        pb='8px'
                    >
                        <q>{details?.review}</q>
                    </Typography>

                    {/* Rating */}
                    <Rating defaultValue={details?.rating} precision={0.5} readOnly />

                    <Stack
                        direction='row'
                        justifyContent='end'
                        alignItems='end'
                        flex={1}
                    >
                        <Avatar 
                            alt="Profile" 
                            src={details?.client} 
                            sx={{
                                width: '50px',
                                height: '50px'
                            }}
                        />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}