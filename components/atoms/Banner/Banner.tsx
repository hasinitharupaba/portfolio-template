import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'

export interface BannerProps {
  [x: string]: any
  image?: any
  heading?: string
  description?: string
}

export const Banner: FC<BannerProps> = ({
  className,
  image,
  heading,
  description,
  ...restProps
}: BannerProps) => {
  const BannerClasses = CN(`banner`, className)

  return (
    <div className={BannerClasses} {...restProps}>
      <div
        className={CN('lg:h-[800px] w-full bg-cover bg-center bg-no-repeat')}
        style={{ backgroundImage: `url('${image || ''}')` }}>
        <div className='h-full w-full gradient bg-gradient-to-br from-[#000000DE] to-[#00000000] flex py-[32px] md:py-[80px] lg:pt-[130px] lg:pb-[100px]'>
          <div className='container text-center flex flex-col md:w-[600px] lg:w-[664px] justify-between items-center pb-[20px] gap-[32px] md:gap-[80px] lg:gap-[260px]'>
            <h1
              data-aos='zoom-in-up'
              data-aos-duration='800'
              className='lg:text-display-xl md:text-display-md text-h3 font-heading leading-[48px] md:leading-normal font-600 text-white uppercase '>
              {heading}
            </h1>
            <div className='flex flex-col gap-[12px]'>
              <h2 className='md:text-h3 text-h5 font-heading font-500 text-white uppercase'>
                {description}
              </h2>
              <h4 className='md:text-h4 text-h6 font-heading font-500 text-white uppercase'>
                by Meliora Lifestyle
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Banner.defaultProps = {}

export default Banner
