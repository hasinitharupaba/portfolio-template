import React, { FC } from 'react'
import CN from 'classnames'
import { TestimonialCarousel } from 'components/atoms/TestimonialCarousel'
import { SectionHeading } from 'components/atoms/SectionHeading'

export interface TestimonialsProps {
  [x: string]: any
}

export const Testimonials: FC<TestimonialsProps> = ({
  className,
  ...restProps
}: TestimonialsProps) => {
  const TestimonialsClasses = CN(
    `testimonials container md:pb-[16px] lg:pb-[80px] flex flex-col gap-[32px] md:gap-[40px] lg:gap-[80px]`,
    className
  )

  return (
    <div className={TestimonialsClasses} {...restProps}>
      <SectionHeading
        heading='Love notes'
        description='What our clientele have to express about us will make you delighted.'
      />
      <TestimonialCarousel />
    </div>
  )
}

Testimonials.defaultProps = {}

export default Testimonials
