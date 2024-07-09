import AboutUs from "../components/Home/AboutUs"
import Achivments from "../components/Home/Achivments"
import ChooseUs from "../components/Home/ChooseUs"
import HowStart from "../components/Home/HowStart"
import OurArticles from "../components/Home/OurArticles"
import OurPartners from "../components/Home/OurPartners"
import OurPricing from "../components/Home/OurPricing"
import OurService from "../components/Home/OurService"
import Start from "../components/Home/Start"
import Testimonial from "../components/Home/Testimonial"

const Home = () => {
  return (
    <>
      <Start/>
      <Achivments/>
      <AboutUs/>
      <OurService/>
      <ChooseUs/>
      <HowStart/>
      <Testimonial/>
      <OurPricing/>
      <OurPartners/>
      <OurArticles/>
    </>
  )
}

export default Home