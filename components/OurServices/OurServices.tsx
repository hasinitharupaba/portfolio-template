import React, { FC } from 'react'
import CN from 'classnames'
import { SingleServiceItem } from 'components/atoms/SingleServiceItem'
import { SectionHeading } from 'components/atoms/SectionHeading'

export interface OurServicesProps {
  [x: string]: any
  isPage?: boolean
}

export const OurServices: FC<OurServicesProps> = ({
  className,
  services,
  isPage,
  ...restProps
}: OurServicesProps) => {
  const OurServicesClasses = CN(`our-services container py-[32px] md:py-[60px]`, className)

  return (
    <div className={OurServicesClasses} {...restProps}>
      <SectionHeading
        heading='Our services'
        description="Professional Photography Services for Capturing the Memories of Life's Most Cherished Moments."
      />
      <div className='pt-[32px] lg:pt-[80px]'>
        <div
          className={CN(
            'flex flex-col gap-[28px] md:gap-[32px] items-center lg:grid lg:grid-cols-3 lg:gap-x-[60px] lg:gap-y-[48px]',
            { 'md:grid md:grid-cols-2': isPage }
          )}>
          {(services || []).map(({ image, heading, description }: any, index: number) => {
            return (
              <div key={index}>
                <SingleServiceItem image={image} heading={heading} description={description} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

OurServices.defaultProps = {}

export default OurServices
