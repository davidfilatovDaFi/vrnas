import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '../Container'
import SectionTitle from '../SectionTitle'
import Button from '../UI/Button/Button'
import arrow from '../../assets/home/our-articles/arrow.svg'

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/navigation';
import { Autoplay, Pagination } from 'swiper/modules'
import { articlesItems, articlesSlider } from '../../constants/home'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css';

const OurArticles = () => {

  return (
    <section className='mb-[100px] md:mb-[150px]'>
      <Container>
        <div className='flex items-end justify-between'>
          <SectionTitle
            title='OUR ARTICLES'
            text='Stay Up-to-Date with Our VR Insights'
          />
          <Button className='hidden md:block' type='transparent'>
            SEE ALL
          </Button>
        </div>
        <div className='w-full flex flex-col lg:flex-row items-center gap-[50px] mt-[90px]'>
          <div className='w-full lg:w-auto flex-[0_1_55%] overflow-hidden'>
            <Swiper
              autoplay={{delay: 3000}}
              centeredSlides={true}
              grabCursor={true}
              modules={[Pagination, Autoplay]}
              className='swiper-container'
              pagination={{el: '.swiper-pagination', clickable: true}}
            >
              {articlesSlider.map((slide, i) => (
                <SwiperSlide key={i} className='w-[636px] h-[425px] p-6 flex flex-col justify-end items-start gap-3'>
                  <div className='text-[14px] font-medium px-[10px] py-[2px] bg-white/30 rounded-full relative z-10'>{slide.title}</div>
                  <div className='flex justify-between items-center relative z-10'>
                    <p className='text-[20px] sm:text-[32px] font-semibold leading-[41px]'>{slide.text}</p>
                    <Button className='ml-3 flex items-center justify-center p-4' type='transparent'>
                      <img className='min-w-4 min-h-4' src={arrow} alt="arrow" />
                    </Button>
                  </div>
                  <img className='w-full h-full object-cover absolute left-0 top-0' src={slide.image} alt="" />
                </SwiperSlide>
              ))}
              <div className='w-full flex justify-center mt-10'>
                <div className='swiper-pagination'>
                </div>
              </div>
            </Swiper>
          </div>
          <div className='w-full lg:w-auto lg:flex-[0_1_45%] relative p-4 lg:p-0'>
            <div className='absolute w-full lg:w-[400%] h-[calc(100%+30px)] -top-[30px] left-0 lg:-left-[97px] p-[1px] bg-[linear-gradient(90deg,_rgba(255,_255,_255,_.3)_0,_transparent_100%)]'>
              <div className='bg-[#252532] w-full h-full'>

              </div>
            </div>
            <h2 className='text-[28px] font-semibold mb-8 relative z-10'>Recent Article</h2>
            <SimpleBar style={{ height: '500px' }}>
              <ul className='space-y-8 mr-8 xl:mr-0'>
                {articlesItems.map((item, i) =>
                  <li key={i} className='flex items-center pb-[44px] sm:pb-8 border-transparent border-b-white/15 border-[1px]'>
                    <img className='w-[110px] extra_sm:w-[142px] h-[70px] extra_sm:h-[91px]' src={item.image} alt="article" />
                    <div className='max-h-[91px] ml-5 flex flex-col gap-2 items-start'>
                      <div className='py-[2px] px-[10px] bg-white/30 text-[14px] font-medium rounded-full'>{item.title}</div>
                      <p className='text-[14px] extra_sm:text-[16px] font-semibold md:font-normal md:text-[18px] leading-[20px] md:leading-[23px]'>{item.text}</p>
                    </div>
                    <Button className='hidden ml-auto lg:ml-0 sm:flex items-center justify-center p-4' type='transparent'>
                      <img className='min-w-4 min-h-4' src={arrow} alt="arrow" />
                    </Button>
                  </li>
                )}
              </ul>
            </SimpleBar>
          </div>
        </div>
        <div className='w-full flex items-center mt-8'>
          <Button className='mx-auto md:hidden px-8' type='transparent'>
            SEE ALL
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default OurArticles