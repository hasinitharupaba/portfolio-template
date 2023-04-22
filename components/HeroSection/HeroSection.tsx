import React, { FC } from 'react'
import CN from 'classnames'
import { Button } from 'components/Button'

export interface HeroSectionProps {
  [x: string]: any
}

export const HeroSection: FC<HeroSectionProps> = ({
  className,
  ...restProps
}: HeroSectionProps) => {
  const HeroSectionClasses = CN(
    `hero-section container pt-[24px] pb-[32px] md:py-[60px] flex flex-col md:flex-row md:justify-between gap-[24px] md:gap-[100px] items-center`,
    className
  )

  return (
    <div className={HeroSectionClasses} {...restProps}>
      <div className='flex flex-col gap-[12px]'>
        <h1 className='text-h1 md:text-display-xl font-700 font-heading md:max-w-[540px] text-center md:text-left !leading-none'>
          Hey! I am {''} <br className='lg:hidden' />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#E63F3F]'>
            Freya Abbey.
          </span>
        </h1>
        <p className='text-h6 text-N-600 md:max-w-[540px] text-center md:text-left lg:pt-[20px]'>
          A passionate full stack Front-End developer creating visually stunning and highly
          functional user interfaces. My goal is to leverage my skills and experience to help
          businesses enhance their online presence and achieve their digital goals.
        </p>
        <div className='flex md:pt-[24px] justify-center md:justify-start'>
          <Button label='See projects' appearance='primary' />
        </div>
      </div>

      <div className='w-full md:w-[400px] h-[400px] md:h-full'>
        <img
          src='https://images.unsplash.com/photo-1539343915366-4da26f7a1f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          className='w-full md:w-[400px] h-[400px] md:h-full object-center object-cover rounded-[12px]'
          alt='hero image'
        />
      </div>
    </div>
  )
}

HeroSection.defaultProps = {}

export default HeroSection
