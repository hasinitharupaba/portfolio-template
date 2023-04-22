import React, { FC } from 'react'
import CN from 'classnames'

export interface SectionHeadingProps {
  [x: string]: any
  heading?: string
  description?: string
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  className,
  heading,
  description,
  ...restProps
}: SectionHeadingProps) => {
  const SectionHeadingClasses = CN(`section-heading flex flex-col items-center`, className)

  return (
    <div className={SectionHeadingClasses} {...restProps}>
      <h1
        className='text-h3 font-heading font-600 lg:text-display-sm text-N-600 uppercase text-center w-[82%] md:w-full'
        data-aos='zoom-in'
        data-aos-duration='1000'>
        {heading}
      </h1>
      <p
        className='text-base text-N-600 text-center w-[90%] md:w-[500px] lg:w-[760px]'
        data-aos='zoom-in'
        data-aos-duration='1000'
        data-aos-delay='50'>
        {description}
      </p>
    </div>
  )
}

SectionHeading.defaultProps = {}

export default SectionHeading
