import { Box, Dialog, Stack, useTheme } from "@mui/material";
import Title2 from "../../../components/titles/title2";
import { useTranslation } from "react-i18next";
import CustomCarousel from "../../../components/carousel/customCarousel";
import ImageViewer from 'react-simple-image-viewer';
import imagesData from "../../../data/portfolio.json";
import { useCallback, useState } from "react";

const latestEventsLocales = "latestEvents";

const getImagesList = (list) => {
    const imageList = [];

    let outerLeft = 0, outerRight = list.length - 1;

    while(outerLeft < outerRight){
        // Left Side
        let gallery = list[outerLeft].gallery;

        let innerLeft = 0, innerRight = gallery.length - 1;

        while(innerLeft < innerRight){
            if(gallery[innerLeft].latest) imageList.push(<EventImage img={gallery[innerLeft].img} />);
            if(gallery[innerRight].latest) imageList.push(<EventImage img={gallery[innerRight].img} />);

            innerLeft++;
            innerRight--;

            if(innerLeft === innerRight){
                if(gallery[innerLeft].latest) imageList.push(<EventImage img={gallery[innerLeft].img} />);
            }
        }

        // Right Side
        gallery = list[outerRight].gallery;

        innerLeft = 0;
        innerRight = gallery.length - 1;

        while(innerLeft < innerRight){
            if(gallery[innerLeft].latest) imageList.push(<EventImage img={gallery[innerLeft].img} />);
            if(gallery[innerRight].latest) imageList.push(<EventImage img={gallery[innerRight].img} />);

            innerLeft++;
            innerRight--;

            if(innerLeft === innerRight){
                if(gallery[innerLeft].latest) imageList.push(<EventImage img={gallery[innerLeft].img} />);
            }
        }

        outerLeft++;
        outerRight--;

        if(outerLeft === outerRight){
            gallery = list[outerLeft].gallery;

            innerLeft = 0;
            innerRight = gallery.length - 1;

            while(innerLeft < innerRight){
                if(gallery[innerLeft].latest) imageList.push(<EventImage img={gallery[innerLeft].img} />);
                if(gallery[innerRight].latest) imageList.push(<EventImage img={gallery[innerRight].img} />);

                innerLeft++;
                innerRight--;

                if(innerLeft === innerRight){
                    if(gallery[innerLeft].latest) imageList.push(<EventImage img={gallery[innerLeft].img} />);
                }
            }
        }
    }

    imageList.sort();

    return imageList;
}

const LatestEventsBody = () => {
    const theme = useTheme();
    const {t} = useTranslation();

    return (
        <>
            <Box className='main-section-pb'>
                <Box
                    sx={{
                        backgroundColor: theme.palette.background.paper,
                        mx: {xs: '10px', md: '20px'},
                        borderRadius: '16px'
                    }}
                >
                    <Stack
                        direction='column'
                        className="main-section-px"
                        py={{xs: '30px', md: '60px'}}
                    >
                        <Title2 
                            title={t(`${latestEventsLocales}.title`)}
                            description={t(`${latestEventsLocales}.description`)}
                            highLightedTextPosition={2}
                        />

                        {/* PC and Tab View */}
                        <Box
                            sx={{
                                display: {xs: 'none', md: 'block'}
                            }}
                        >
                            <CustomCarousel 
                                list={getImagesList(imagesData)}
                                dots={false}
                                autoplay={false}
                                showArrows
                            />
                        </Box>

                        {/* Mobile View */}
                        <Box
                            sx={{
                                display: {xs: 'block', md: 'none'}
                            }}
                        >
                            <CustomCarousel 
                                list={getImagesList(imagesData)}
                                dots={false}
                                autoplay={false}
                                slidesToShow={1}
                                centerMode={false}
                                showArrows
                            />
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}

export default LatestEventsBody;

const EventImage = ({
    img
}) => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback(() => {
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = useCallback(() => {
        setIsViewerOpen(false);
    }, []);

    return (
        <>
            <Box
                onClick={openImageViewer}
                sx={{
                    width: '100%',
                    px: {xs: '5px', md: '10px', lg: '30px'},
                    cursor: 'pointer'
                }}
                data-aos="fade"
            >
                <img 
                    src={img}
                    alt="Event" 
                    width='100%' 
                    style={{
                        borderRadius: '16px',
                        objectFit: 'cover'
                    }}
                />
            </Box>

            {
                isViewerOpen && (
                    <Dialog onClose={closeImageViewer} open={isViewerOpen}>
                        <ImageViewer
                            src={ [img] }
                            currentIndex={ 0 }
                            disableScroll={ true }
                            closeOnClickOutside={ true }
                            onClose={ closeImageViewer }
                            backgroundStyle={{
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                zIndex: 9999
                            }}
                        />
                    </Dialog>
                )
            }
        </>
    );
}