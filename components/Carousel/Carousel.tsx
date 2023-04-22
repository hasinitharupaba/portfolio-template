/* eslint-disable @next/next/no-img-element */
import React, { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'
import CN from 'classnames'
import Image from 'next/image'
import { A11y, Navigation, Pagination, Autoplay } from 'swiper'
import useViewport from 'utils/useViewport'

export interface CarouselProps {
  [x: string]: any
}

const photos = [
  {
    id: 0,
    link: '/carousel/6.webp',
  },
  {
    id: 1,
    link: '/carousel/3.webp',
  },
  {
    id: 2,
    link: '/carousel/2.webp',
  },
  {
    id: 4,
    link: '/carousel/12.webp',
  },
  {
    id: 5,
    link: '/carousel/5.webp',
  },
  {
    id: 7,
    link: '/carousel/7.webp',
  },
  {
    id: 8,
    link: '/carousel/1.webp',
  },
  {
    id: 9,
    link: '/carousel/8.webp',
  },
]

const mobilePhotos = [
  {
    id: 0,
    link: '/hasnika-supun-wed/10.webp',
  },
  {
    id: 1,
    link: '/carousel/mobile/img-01.png',
  },
  {
    id: 2,
    link: '/nethmi-sumudu/16.webp',
  },
  {
    id: 3,
    link: '/carousel/mobile/img-02.png',
  },
  {
    id: 4,
    link: '/carousel/1.webp',
  },
  {
    id: 5,
    link: '/carousel/mobile/img-03.png',
  },
  {
    id: 6,
    link: '/carousel/2.webp',
  },
  {
    id: 7,
    link: '/carousel/7.webp',
  },
  {
    id: 8,
    link: '/carousel/8.webp',
  },
]

export const Carousel: FC<CarouselProps> = ({
  className,
  onImagesLoaded,
  ...restProps
}: CarouselProps) => {
  const CarouselClasses = CN(`carousel`, className)
  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div className={CarouselClasses} {...restProps}>
      {(isDesktop || isTablet) && (
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}>
          {(photos || []).map(({ link }: any, index: number) => (
            <SwiperSlide key={index}>
              <div style={{ width: '100%', height: '800px', position: 'relative' }}>
                <img
                  src={link}
                  className='object-cover object-center w-full h-[800px]'
                  alt='photography images'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {isMobile && (
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}>
          {(mobilePhotos || []).map(({ link }: any, index: number) => (
            <SwiperSlide key={index}>
              <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                <img
                  src={link}
                  className='object-cover object-center w-full h-[400px]'
                  alt='wedding photo'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}

Carousel.defaultProps = {}

export default Carousel
