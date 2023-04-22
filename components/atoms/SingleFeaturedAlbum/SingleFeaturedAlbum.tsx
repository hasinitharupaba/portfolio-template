import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export interface SingleFeaturedAlbumProps {
  [x: string]: any
  banner?: string
  heading?: string
  description?: string
  link: string
}

export const SingleFeaturedAlbum: FC<SingleFeaturedAlbumProps> = ({
  className,
  banner,
  heading,
  description,
  link,
  ...restProps
}: SingleFeaturedAlbumProps) => {
  const SingleFeaturedAlbumClasses = CN(`single-featured-album cursor-pointer w-full`, className)

  return (
    <div className={SingleFeaturedAlbumClasses} {...restProps}>
      <div
        className={CN('h-[400px] w-full md:w-[348px] bg-cover bg-no-repeat rounded-[4px]')}
        style={{ backgroundImage: `url('${banner || ''}')` }}>
        <div className='h-full gradient bg-gradient-to-t from-[#000000DE]/60 to-[#00000000] flex flex-col-reverse rounded-[4px]'>
          <div className='flex flex-col items-center justify-end pb-[20px] w-full'>
            <h4 className='text-h4 font-heading font-600 text-white uppercase'>{heading}</h4>
            <p className='text-base text-white'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

SingleFeaturedAlbum.defaultProps = {}

export default SingleFeaturedAlbum
