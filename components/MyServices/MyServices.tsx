import React, { FC } from 'react'
import CN from 'classnames'
import { SingleServiceItem } from 'components/atoms/SingleServiceItem'

export interface MyServicesProps {
  [x: string]: any
}

export const MyServices: FC<MyServicesProps> = ({ className, ...restProps }: MyServicesProps) => {
  const MyServicesClasses = CN(`my-services bg-B-10 pt-[12px] pb-[24px] lg:py-[60px]`, className)

  return (
    <div className={MyServicesClasses} {...restProps}>
      <div className='container flex flex-col gap-[24px] lg:gap-[40px]'>
        <h2 className='text-h2 md:text-display-md font-700 font-heading text-center'>My services</h2>
        <div className='flex flex-col md:flex-row gap-[16px] md:gap-[32px]'>
          <SingleServiceItem
            icon='/icons/icon-01.svg'
            heading='Web development'
            description='With a focus on user experience and functionality, I specialize in developing custom websites that are not only visually appealing but also highly responsive and user-friendly. '
          />
          <SingleServiceItem
            icon='/icons/icon-02.svg'
            heading='Web design'
            description='From wireframing to prototyping and final design, I am dedicated to delivering web design services that not only meet but exceed your expectations, and help you stand out in todays competitive digital landscape.'
          />
          <SingleServiceItem
            icon='/icons/icon-03.svg'
            heading='Consultation'
            description=' Whether you are looking to revamp your existing website or develop a new web application from scratch, I offer personalized consultation services tailored to your specific needs.'
          />
        </div>
      </div>
    </div>
  )
}

MyServices.defaultProps = {}

export default MyServices
