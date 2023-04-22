import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'
import useViewport from 'utils/useViewport'

export interface ServiceDescriptionImagesProps {
  [x: string]: any
  leftImage?: boolean
  rightImage?: boolean
  image?: any
  heading?: string
  description?: string
}

export const ServiceDescriptionImages: FC<ServiceDescriptionImagesProps> = ({
  className,
  leftImage,
  rightImage,
  image,
  heading,
  description,
  ...restProps
}: ServiceDescriptionImagesProps) => {
  const ServiceDescriptionImagesClasses = CN(
    `service-description-images container lg:pt-[60px]`,
    className
  )

  const { isMobile } = useViewport()

  return (
    <div className={ServiceDescriptionImagesClasses} {...restProps}>
      {/* Testimonial image */}
      {leftImage && (
        <div className='md:relative'>
          <div className='h-full w-full lg:h-[500px] lg:w-[332px]'>
            <Image
              src={image}
              alt='photography images'
              width={(isMobile && 320) || 332}
              height={(isMobile && 100) || 500}
              className='object-cover object-center rounded-[8px] w-[320px] h-[200px] lg:w-[unset] lg:h-[unset]'
              priority
            />
          </div>
          <div className='lg:w-[576px] lg:h-[240px] rounded-[8px] bg-B-50/80 md:bg-B-50/50 backdrop-opacity-2 backdrop-blur-sm lg:absolute lg:left-[280px] lg:top-[48px] px-[24px] py-[24px] px-lg:[60px] lg:py-[40px] mt-[-60px] ml-[40px] lg:mt-0 lg:ml-0'>
            {/* Testimonial description */}
            <div className='flex flex-col gap-[8px] w-full'>
              <h3 className='text-h5 lg:text-h3 font-heading uppercase text-N-600 font-500'>
                {heading}
              </h3>
              <p className='text-base text-N-800'>{description}</p>
            </div>
          </div>
        </div>
      )}

      {rightImage && (
        <div className='pt-[40px] pb-[180px] md:pb-[120px] lg:pt-0 lg:pb-0'>
          <div className='relative flex md:justify-end'>
            <div className='lg:w-[576px] md:h-[144px] lg:h-[240px] rounded-[8px] bg-B-50/80 md:bg-B-50/50 backdrop-opacity-2 backdrop-blur-sm absolute lg:right-[240px] lg:top-[48px] px-[24px] py-[24px] lg:px-[60px] lg:py-[40px] mr-[40px] top-[140px] lg:mt-0'>
              {/* Testimonial description */}
              <div className='flex flex-col gap-[8px] w-full'>
                <h3 className='text-h5 lg:text-h3 font-heading uppercase text-N-600 font-500'>
                  {heading}
                </h3>
                <p className='text-base text-N-800'>{description}</p>
              </div>
            </div>
            <div className='h-full w-full lg:h-[500px] lg:w-[332px] flex justify-end'>
              <Image
                src={image}
                alt='photography images'
                width={(isMobile && 320) || 332}
                height={(isMobile && 200) || 500}
                className='object-cover object-center rounded-[8px] w-[320px] h-[200px] lg:w-[unset] lg:h-[unset]'
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

ServiceDescriptionImages.defaultProps = {}

export default ServiceDescriptionImages
