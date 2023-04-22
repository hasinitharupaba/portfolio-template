import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Header } from 'components/Header'
import { Carousel } from 'components/Carousel'
import { OurServices } from 'components/OurServices'
import { Footer } from 'components/Footer'
import { Banner } from 'components/atoms/Banner'
import { ServiceDescriptionImages } from 'components/ServiceDescriptionImages'
import useViewport from 'utils/useViewport'
import { SectionHeading } from 'components/atoms/SectionHeading'

const inter = Inter({ subsets: ['latin'] })

export default function Services() {
  const servicesData = [
    {
      id: 0,
      image: '/icons/icon-01.svg',
      heading: 'Weddings',
      description: `Portraying the splendour and emotions of your special day through timeless, romantic
        photography.`,
    },
    {
      id: 1,
      image: '/icons/icon-02.svg',
      heading: 'Engagements',
      description: `Telling each couple's story in a unique and creative way. Bringing joy and love to life one
      frame at a time.`,
    },
    {
      id: 2,
      image: '/icons/icon-03.svg',
      heading: 'Casual shoots',
      description: `Capturing the genuine moments and candid interactions in a striking and authentic way`,
    },
  ]

  const serviceImages = [
    {
      id: 0,
      leftImage: true,
      image: '/thanuja-harshana/3.webp',
      heading: 'Detailed captures',
      description:
        'Our team of skilled photographers are experts in their craft, with an eye for detail and a dedication to capturing the perfect shot. We understand that every detail, no matter how small, can add depth and meaning to a photograph.',
    },
    {
      id: 1,
      rightImage: true,
      image: '/images/img-100.jpg',
      heading: 'Classy and Fabulous',
      description:
        'At Meliora Lifestyle Weddings we understand the importance of presenting yourself in the best possible light helping you capture the essence of being classy',
    },
    {
      id: 2,
      leftImage: true,
      image: '/thanuja-harshana/2.webp',
      heading: 'Clear motion pictures',
      description:
        'Our photography skills are finely tuned to capture the energy and movement of your dance, freezing those exhilarating moments into stunning images that you can cherish for years to come.',
    },
    {
      id: 3,
      rightImage: true,
      image: '/images/img-101.jpg',
      heading: 'Alluring',
      description:
        'At Meliora Lifestyle Weddings  we strive to capture your most romantic and alluring moments in a timeless and elegant way..',
    },
    {
      id: 4,
      leftImage: true,
      image: '/images/img-102.jpg',
      heading: 'Timeless',
      description:
        'We understand the beauty of creating images that will stand the test of time and evoke emotion for years to come.',
    },
  ]
  const serviceImagesMobile = [
    {
      id: 0,
      leftImage: true,
      image: '/thanuja-harshana/3.webp',
      heading: 'Detailed captures',
      description:
        'Our team of skilled photographers are experts in their craft, with an eye for detail and a dedication to capturing the perfect shot. We understand that every detail, no matter how small, can add depth and meaning to a photograph.',
    },
    {
      id: 1,
      rightImage: true,
      image: '/images/img-100a.png',
      heading: 'Classy and Fabulous',
      description:
        'At Meliora Lifestyle Weddings we understand the importance of presenting yourself in the best possible light helping you capture the essence of being classy',
    },
    {
      id: 2,
      leftImage: true,
      image: '/images/thanuja-harshana.png',
      heading: 'Clear motion pictures',
      description:
        'Our photography skills are finely tuned to capture the energy and movement of your dance, freezing those exhilarating moments into stunning images that you can cherish for years to come.',
    },
    {
      id: 3,
      rightImage: true,
      image: '/images/img-101a.png',
      heading: 'Alluring',
      description:
        'At Meliora Lifestyle Weddings we strive to capture your most romantic and alluring moments in a timeless and elegant way..',
    },
    {
      id: 4,
      leftImage: true,
      image: '/images/img-102b.jpg',
      heading: 'Timeless',
      description:
        'We understand the beauty of creating images that will stand the test of time and evoke emotion for years to come.',
    },
  ]

  const { isMobile } = useViewport()

  return (
    <>
      <Head>
        <title>Services</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.svg' />
      </Head>
      <div className=''>
        <Header />

        <Banner
          image='/carousel/5.webp'
          heading='Quality is forever remembered'
          description='A collection of stories'
        />

        <OurServices services={servicesData} isPage={true} />

        {/* Services description section */}
        {!isMobile && (
          <div className='flex flex-col md:pb-[60px] lg:pb-0'>
            {serviceImages.map(
              ({ image, heading, description, leftImage, rightImage }: any, index: number) => {
                return (
                  <ServiceDescriptionImages
                    key={index}
                    data-aos='zoom-in-up'
                    data-aos-duration='1500'
                    leftImage={leftImage}
                    rightImage={rightImage}
                    image={image}
                    heading={heading}
                    description={description}
                  />
                )
              }
            )}
          </div>
        )}

        {isMobile && (
          <div className='flex flex-col pb-[40px]'>
            {serviceImagesMobile.map(
              ({ image, heading, description, leftImage, rightImage }: any, index: number) => {
                return (
                  <ServiceDescriptionImages
                    key={index}
                    data-aos='zoom-in-up'
                    data-aos-duration='1500'
                    leftImage={leftImage}
                    rightImage={rightImage}
                    image={image}
                    heading={heading}
                    description={description}
                  />
                )
              }
            )}
          </div>
        )}
        <Footer />
      </div>
    </>
  )
}