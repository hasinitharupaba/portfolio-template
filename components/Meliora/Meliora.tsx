import React, { FC } from 'react'
import CN from 'classnames'
import { SectionHeading } from 'components/atoms/SectionHeading'
import Image from 'next/image'

export interface MelioraProps {
  [x: string]: any
}

export const Meliora: FC<MelioraProps> = ({ className, ...restProps }: MelioraProps) => {
  const MelioraClasses = CN(`meliora container pt-[32px] md:pt-[40px]`, className)

  return (
    <div className={MelioraClasses} {...restProps}>
      <SectionHeading
        className='md:py-[40px] pb-[24px]'
        heading='Meliora lifestyle'
        description='The art of your dream'
      />

      <div className='flex flex-col md:flex-row gap-[24px]'>
        <Image
          src='/images/img-200.jpg'
          alt='photography images'
          width={332}
          height={500}
          className='object-cover object-center rounded-[8px] w-full h-[340px] lg:w-[unset] lg:h-[unset]'
          priority
        />
        <Image
          src='/hasnika-supun-wed/1.webp'
          alt='photography images'
          width={332}
          height={500}
          className='object-cover object-center rounded-[8px] w-full h-[340px] lg:w-[unset] lg:h-[unset]'
          priority
        />
        <Image
          src='/hasnika-supun-wed/8.webp'
          alt='photography images'
          width={332}
          height={500}
          className='object-cover object-center rounded-[8px] w-full h-[340px] lg:w-[unset] lg:h-[unset]'
          priority
        />
      </div>
    </div>
  )
}

Meliora.defaultProps = {}

export default Meliora
