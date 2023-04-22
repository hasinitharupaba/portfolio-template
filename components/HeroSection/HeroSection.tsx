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
    `hero-section container py-[60px] flex justify-between gap-[100px] items-center`,
    className
  )

  return (
    <div className={HeroSectionClasses} {...restProps}>
      <div className='flex flex-col gap-[12px]'>
        <h1 className='text-display-xl font-700 font-heading max-w-[540px]'>
          Hey! I am {''}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#E63F3F]'>
            Freya Abbey.
          </span>
        </h1>
        <p className='text-h6 text-N-600 max-w-[540px]'>
          A passionate full stack Front-End developer creating visually stunning and highly
          functional user interfaces. My goal is to leverage my skills and experience to help
          businesses enhance their online presence and achieve their digital goals.
        </p>
        <div className='flex w-[200px] pt-[24px]'>
          <Button label='See projects' appearance='primary' />
        </div>
      </div>

      <div className='w-[400px] h-full'>
        <img
          src='https://images.unsplash.com/photo-1539343915366-4da26f7a1f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          className='w-[400px] h-full object-center object-contain rounded-[12px]'
          alt='hero image'
        />
      </div>
    </div>
  )
}

HeroSection.defaultProps = {}

export default HeroSection
