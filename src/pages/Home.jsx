import AboutSection from "../components/AboutSection";
import AboutSection2 from "../components/AboutSection2";
import ElnecGroupsSection from "../components/ElnecGroupsSection";
import HeroBanner from "../components/HeroBanner";
import HeroSlider from "../components/HeroSlider";
import IntroSection from "../components/IntroSection";
import MemorableMoments from "../components/MemorableMoments";
import QuoteSection from "../components/QuoteSection";
import YoutubeVideos from "../components/YoutubeVideos";


export default function Home() {
  return (
    <>
        <HeroBanner type="image" src="/ELNEC-BUBBLES.mp4" />
        <HeroSlider/>
        <IntroSection/>
        {/* <GroupCarousel/> */}
        <ElnecGroupsSection/>
        {/* <AboutSection/>
        <AboutSection2/> */}
        <MemorableMoments/>
        <YoutubeVideos/>
        <QuoteSection/>
    </>
  )
}
