import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'
import useViewport from 'utils/useViewport'
import { SectionHeading } from 'components/atoms/SectionHeading'

export interface OurWorkAlbumProps {
  [x: string]: any
}

export const OurWorkAlbum: FC<OurWorkAlbumProps> = ({
  className,
  ...restProps
}: OurWorkAlbumProps) => {
  const OurWorkAlbumClasses = CN(
    `our-work-album py-[40px] md:py-[60px] flex flex-col gap-[32px] md:gap-[60px]`,
    className
  )

  const { isMobile } = useViewport()

  return (
    <div className={OurWorkAlbumClasses} {...restProps}>
      <SectionHeading
        heading='Our amazing work'
        description='Weaving together the emotions, laughter, and love of your wedding day, Meliora Lifestyle Weddings photography
        creates a beautiful tapestry of memories for you to treasure for a lifetime.'
      />
      {!isMobile && (
        <div className='flex z-[-10]'>
          <div style={{ width: '100%', height: '1200px', position: 'relative' }}>
            <Image
              src='/image-banner.png'
              alt='photography images'
              className='object-cover object-center'
              priority
              fill
            />
          </div>
        </div>
      )}

      {isMobile && (
        <div className='flex z-[-10]'>
          <div style={{ width: '100%', height: '940px', position: 'relative' }}>
            <Image
              src='/banner-mobile.png'
              alt='photography images'
              className='object-cover object-center'
              priority
              fill
            />
          </div>
        </div>
      )}
    </div>
  )
}

OurWorkAlbum.defaultProps = {}

export default OurWorkAlbum
