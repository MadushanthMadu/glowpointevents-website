import HeroBackground from "./heroBackground";
import HeroBody from "./heroBody";

const HeroLayout = () => {
    return (
        <>
            <HeroBackground>
                <HeroBody />
            </HeroBackground>
        </>
    );
}

export default HeroLayout;