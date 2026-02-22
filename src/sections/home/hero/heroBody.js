import {
    alpha,
    Grid,
    Stack,
    Typography,
    useTheme
} from "@mui/material";
import { useTranslation } from "react-i18next";
import data from '../../../data/general.json';
import StarIcon from '@mui/icons-material/Star';
import CountUpEffect from "../../../components/effects/countUpEffect";
import ShinyTextEffect from "../../../components/effects/shinyTextEffect";

const heroLocales = "hero";

const HeroBody = () => {
    const theme = useTheme();
    const {t} = useTranslation();

    return (
        <>
            <Grid
                direction='row'
                justifyContent='space-between'
                alignItems='end'
                container
                className='main-section-px'
                pt={{xs: '200px', md: '350px', lg: '400px'}}
                pb={{xs: '40px', md: '60px'}}
            >
                <Grid
                    size={{xs: 12, md: 12, lg: 9}}
                >
                    {/* Title */}
                    <Typography
                        fontWeight={600}
                        fontSize={{xs: '32px', md: '42px', lg: '72px'}}
                        lineHeight='100%'
                        letterSpacing='-1%'
                        color={theme.palette.text.secondary}
                        pb='16px'
                        data-aos="fade"
                    >
                        <ShinyTextEffect 
                            text={t(`${heroLocales}.title`)}
                            color={theme.palette.text.secondary}
                            shineColor={alpha(theme.palette.secondary.light, 0)}
                        />
                    </Typography>

                    {/* Description */}
                    <Typography
                        fontWeight={300}
                        fontFamily='Inter'
                        fontSize={{xs: '14px', md: '16px', lg: '24px'}}
                        lineHeight='150%'
                        letterSpacing='2%'
                        color={theme.palette.text.secondary}
                        data-aos="fade"
                        data-aos-delay="100"
                    >
                        {t(`${heroLocales}.description`)}
                    </Typography>

                    {/* Stats */}
                    <Stack
                        direction='row'
                        alignItems='center'
                        pt={{xs: '20px', md: '40px'}}
                        spacing='10px'
                        data-aos="fade"
                        data-aos-delay="200"
                    >
                        <Stats 
                            label={t(`${heroLocales}.events`)}
                            value={`${data?.stats?.totalEvents}+`}
                            suffix='+'
                        />

                        <Stats 
                            label={t(`${heroLocales}.satisfaction`)}
                            value={`${data?.stats?.satisfactionRate}%`}
                            suffix='%'
                        />

                        <Stats 
                            label={t(`${heroLocales}.rating`)}
                            value={data?.stats?.rating}
                            suffix={
                                <StarIcon 
                                    sx={{
                                        transform: 'translateY(2px)',
                                        fontSize: {xs: "15px", md: "20px", lg: "30px"}
                                    }}
                                />
                            }
                        />
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}

export default HeroBody;

const Stats = ({
    label,
    value,
    suffix
}) => {
    const theme = useTheme();

    return (
        <>
            <Stack
                direction='column'
                sx={{
                    borderRadius: '8px',
                    backgroundColor: alpha(theme.palette.background.default, 0.2),
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    py: '12px',
                    px: '24px'
                }}
                spacing='8px'
            >
                {/* Value */}
                <Typography
                    fontWeight={600}
                    fontFamily='Inter'
                    fontSize={{xs: '16px', md: '24px', lg: '32px'}}
                    lineHeight='100%'
                    letterSpacing='-1%'
                    color={theme.palette.text.secondary}
                >
                    <CountUpEffect from={0} to={value}/>
                    {suffix}
                </Typography>

                {/* Label */}
                <Typography
                    fontWeight={300}
                    fontFamily='Inter'
                    fontSize={{xs: '12px', md: '14px'}}
                    lineHeight='120%'
                    letterSpacing='-1%'
                    color={theme.palette.text.secondary}
                >
                    {label}
                </Typography>
            </Stack>
        </>
    );
}