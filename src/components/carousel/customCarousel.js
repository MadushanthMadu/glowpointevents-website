import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, useMediaQuery, useTheme } from "@mui/material";

const CustomCarousel = ({
    list,

    dots=true,
    centerMode=true,
    infinite=true,
    autoplay=true,
    autoplaySpeed=2000,
    pauseOnHover=true,
    slidesToShow=2,
    speed=500,
    fade=false,
    waitForAnimate=false,
    showArrows=false
}) => {
    const theme = useTheme();
    const isSmDevice = useMediaQuery(theme.breakpoints.down('md'));

    const NextArrow = (props) => {
        const { className, style, onClick } = props;

        return (
            <div
                className={className}
                style={{ 
                    ...style, 
                    display: "block", 
                    background: "#ffffff",
                    transform: 'translate(-35px, -15px)',
                    width: isSmDevice ? '18px' : '33px',
                    height: isSmDevice ? '18px' : '33px',
                    zIndex: 2
                }}
                onClick={onClick}
            >
                <ChevronRightIcon 
                    sx={{
                        color: '#767A85',
                        transform: isSmDevice ? 'translate(-2.5px, -22.5px)' : 'translate(4px, -16.5px)'
                    }}
                />
            </div>
        );
    }

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;

        return (
            <div
                className={className}
                style={{ 
                    ...style, 
                    display: "block", 
                    background: "#ffffff",
                    transform: 'translate(35px, -15px)',
                    width: isSmDevice ? '18px' : '33px',
                    height: isSmDevice ? '18px' : '33px',
                    zIndex: 2
                }}
                onClick={onClick}
            >
                <ChevronLeftIcon 
                    sx={{
                        color: '#767A85',
                        transform: isSmDevice ? 'translate(-2.5px, -22.5px)' : 'translate(4px, -16.5px)'
                    }}
                />
            </div>
        );
    }

    const settings = {
        dots: dots,

        className: "center",
        centerMode: centerMode,

        infinite: infinite,

        centerPadding: "100px",

        autoplay: autoplay,
        autoplaySpeed: autoplaySpeed,
        pauseOnHover: pauseOnHover,

        slidesToShow: slidesToShow,
        speed: speed,

        fade: fade,
        waitForAnimate: waitForAnimate,

        nextArrow: showArrows ? <NextArrow /> : null,
        prevArrow: showArrows ? <PrevArrow /> : null
    };

    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        list.map((item, index) => {
                            return <Box
                                key={index}
                            >
                                {item}   
                            </Box>
                        })
                    }
                </Slider>
            </div>
        </>
    );
}

export default CustomCarousel;