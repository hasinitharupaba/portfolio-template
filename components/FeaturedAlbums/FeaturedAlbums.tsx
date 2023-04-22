import React, { FC } from 'react'
import CN from 'classnames'
import { SingleFeaturedAlbum } from 'components/atoms/SingleFeaturedAlbum'
import { SectionHeading } from 'components/atoms/SectionHeading'
import { portfolio } from 'config/data'
import Link from 'next/link'
import { HomeAlbum } from 'components/atoms/HomeAlbum'
import { Button } from 'components/Button'

export interface FeaturedAlbumsProps {
  [x: string]: any
  data?: any
}

export const FeaturedAlbums: FC<FeaturedAlbumsProps> = ({
  className,
  data,
  ...restProps
}: FeaturedAlbumsProps) => {
  const FeaturedAlbumsClasses = CN(`featured-albums bg-B-10 py-[40px] md:py-[60px]`, className)

  const { heading, banner } = data || {}

  return (
    <div className={FeaturedAlbumsClasses} {...restProps}>
      <div className='container flex flex-col gap-[32px] lg:gap-[60px]'>
        <SectionHeading
          heading='Featured albums'
          description='Throughout the years we have had the opportunity to photograph many wonderful couples.'
        />

        <div className='flex flex-col lg:flex-row gap-[24px] md:gap-[38px] items-center justify-center'>
          <HomeAlbum
            link='/portfolio/hansika-supun-wedding'
            image='/hasnika-supun-wed/2.webp'
            heading='Hansika & Supun'
            description='Wedding'
          />
          <HomeAlbum
            link='/portfolio/thanuja-harshana'
            image='/thanuja-harshana/1.webp'
            heading='Thanuja & Harshana'
            description='Wedding'
          />
          <HomeAlbum
            link='/portfolio/tharu-kasun-3'
            image='/tharu-kasun-bl/12.png'
            heading='Hasini & Kasun'
            description='Casual shoot'
          />
        </div>

        <div className='flex items-center justify-center'>
          <Link href='/portfolio' className='flex items-center'>
            <Button appearance='primary' label='See more' />
          </Link>
        </div>
      </div>
    </div>
  )
}

FeaturedAlbums.defaultProps = {}

export default FeaturedAlbums
