import React, { FC } from 'react'
import CN from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import 'swiper/scss/autoplay'
import Image from 'next/image'
import { A11y, Navigation, Pagination, Autoplay } from 'swiper'
import useViewport from 'utils/useViewport'

export interface TestimonialCarouselProps {
  [x: string]: any
}

const testimonials = [
  {
    id: 0,
    heading: 'Sumudu & Nethmi',
    description: `First of all, I want to say that you have turned the most beautiful day of our life into
    unforgettable beautiful memories. Brother Ruwin's specialty is to capture our natural
    moments in that way. He is a lifestyle photographer. 100% highly recommended to anyone.
    Anyway, thank you very much Meliora Lifestyle Weddings for doing our job beautifully.`,
    image: '/carousel/6.webp',
  },
  {
    id: 1,
    heading: 'Kasun & Hasini',
    description: `I highly recommend Meliora Lifestyle Weddings. They made our pre shoot exceptional by giving all the effort he could
    and the outcome is greater than we expected our pre- shoot to be. They are easy to work with,
    understanding and friendly. Meliora Lifestyle Weddings put much effort to find the best location and we absolutely
    loved the location. They captured every emotion making them feel precious to us. A real
    photographer with passion I must say. Thank you so much for capturing our moments.`,
    image: '/testimonials/kasun-hasini.jpeg',
  },
  {
    id: 2,
    heading: 'Harshana & Thanuja',
    description: `Thank you very much Meliora Lifestyle Weddings team for capturing the best moments of our very
    special day and for making memories with us. You captured every moment perfectly and
    it was a pleasure to have you as a part of our wedding . You have done a great job and
    pictures are really amazing with keeping the natural look. All the crew were really
    supportive, flexible and friendly to guide us through our big day.
    Also , Highly recommend.`,
    image: '/carousel/2.webp',
  },
  {
    id: 3,
    heading: 'Shan & Anju',
    description: `Highly recommended. 100% level of responsibility. Thank you so much for making our
    day unforgettable.`,
    image: '/anju-shan/1.png',
  },
  {
    id: 4,
    heading: 'Pramith & Tharuka',
    description: `Highly recommended as one of the best photographers with an unique eye to capture the
    most amazing moments. Friendly and easy to work with.
    It was a great pleasure for us to work with Meliora Lifestyle Weddings Photography.`,
    image: '/tharu-pramith/22.webp',
  },
]
export const TestimonialCarousel: FC<TestimonialCarouselProps> = ({
  className,
  ...restProps
}: TestimonialCarouselProps) => {
  const TestimonialCarouselClasses = CN(`testimonial-carousel `, className)
  const { isDesktop } = useViewport()

  return (
    <div className={TestimonialCarouselClasses} {...restProps}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoHeight={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}>
        {(testimonials || []).map(({ heading, image, description }: any, index: number) => (
          <SwiperSlide key={index}>
            <div className='flex lg:pl-[140px] md:h-[600px] pb-[40px]'>
              <div className='flex flex-col md:flex-row h-full relative'>
                {/* Testimonial image */}
                <div className='h-[200px] md:h-[368px] w-full md:w-[480px]'>
                  <Image
                    src={image}
                    alt='photography images'
                    width={480}
                    height={368}
                    className='object-cover object-center rounded-[8px] w-full h-[200px] md:h-[368px]'
                    priority
                  />
                </div>

                <div className='lg:w-[576px] lg:h-[400px] md:w-[480px] rounded-[8px] bg-B-50/60 backdrop-opacity-2 backdrop-blur-lg lg:backdrop-blur-sm md:absolute md:top-[280px] top-[140px] md:left-[200px] lg:left-[360px] lg:top-[100px] px-[24px] py-[24px] lg:px-[60px] lg:pb-[40px] lg:pt-[90px] mt-[-20px] lg:mt-0'>
                  {/* Quotation icon on the description */}
                  <div className='absolute left-[340px] top-[-12px] md:top-[-20px] md:left-[360px] lg:left-[440px] lg:top-[-28px]'>
                    <Image
                      src='/icons/quotation.svg'
                      alt='photography images'
                      width={(isDesktop && 100) || 60}
                      height={(isDesktop && 70) || 30}
                      className='object-cover object-center rounded-[8px]'
                      priority
                    />
                  </div>
                  {/* Testimonial description */}
                  <div className='flex flex-col gap-[16px] overflow-y-auto scroll-m-1'>
                    <h3 className='text-h3 font-heading uppercase text-N-700 font-500 text-center'>
                      {heading}
                    </h3>
                    <p className='text-base text-N-800 pb-[20px] lg:pb-0'>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

TestimonialCarousel.defaultProps = {}

export default TestimonialCarousel
