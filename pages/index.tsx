import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Header } from 'components/Header'
import { Carousel } from 'components/Carousel'
import { OurServices } from 'components/OurServices'
import { FeaturedAlbums } from 'components/FeaturedAlbums'
import { OurWorkAlbum } from 'components/OurWorkAlbum'
import { Testimonials } from 'components/Testimonials'
import { Footer } from 'components/Footer'
import { SectionHeading } from 'components/atoms/SectionHeading'
import { Meliora } from 'components/Meliora'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [isShowLoader, setIsShowLoader] = useState(true)

  const servicesData = [
    {
      id: 0,
      image: '/icons/icon-01.svg',
      heading: 'Weddings',
      description:
        'Portraying the splendor and emotions of your special day through timeless, romantic photography.',
    },
    {
      id: 0,
      image: '/icons/icon-02.svg',
      heading: 'Engagements',
      description: `Telling each couple's story in a unique and creative way. Bringing joy and love to life one frame at a time.`,
    },
    {
      id: 0,
      image: '/icons/icon-03.svg',
      heading: 'Casual shoots',
      description:
        'Capturing genuine moments and candid interactions to create the most stunning outcomes.',
    },
  ]

  return (
    <>
      <Head>
        <title>Meliora Lifestyle Weddings</title>
        <meta name='Home' content='Meliora lifestyle wedding photography' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.svg' />

        {/* Google search console */}
        <meta
          name='google-site-verification'
          content='3yUTnBKkkpE90DaSb5L68BElhN4IHnjS6GsnItqCn5E'
        />

        {/* Primary meta tags */}
        <meta name='title' content='Meliora Lifestyle Weddings photography' />
        <meta
          name='description'
          content="We specialize in capturing life's most precious moments and turning them into art.
"
        />
        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.melioralifestyleweddings.com' />
        <meta property='og:title' content='Meliora Lifestyle Weddings photography' />
        <meta
          property='og:description'
          content="We specialize in capturing life's most precious moments and turning them into art.
"
        />
        <meta property='og:image' content='https://www.melioralifestyleweddings.com/meta.png' />

        {/* Twitter */}

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.melioralifestyleweddings.com' />
        <meta property='twitter:title' content='Meliora Lifestyle Weddings photography' />
        <meta
          property='twitter:description'
          content="We specialize in capturing life's most precious moments and turning them into art.
"
        />
        <meta
          property='twitter:image'
          content='https://www.melioralifestyleweddings.com/meta.png'></meta>
      </Head>
      <div>
        <Header />
        <Carousel />
        <Meliora />
        <OurServices services={servicesData} />
        <FeaturedAlbums />
        <OurWorkAlbum />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}
