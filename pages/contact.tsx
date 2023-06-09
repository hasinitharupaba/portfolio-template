import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { ProjectCard } from 'components/atoms/ProjectCard'
import { SingleServiceItem } from 'components/atoms/SingleServiceItem'
import { ContactCard } from 'components/atoms/ContactCard'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name='contact page' content='Portfolio contact page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.svg' />
      </Head>
      <div className=''>
        <Header />

        <div className='container py-[24px] md:pb-[40px] lg:py-[60px]'>
          <h1 className='text-h2 md:text-display-md font-700 font-heading text-center'>
            Let&#39;s chat
          </h1>
          <p className='text-base text-N-600 lg:w-[600px] text-center mx-auto'>
            Let us work together to turn your online goals into a reality! Do not hesitate to reach
            out and get in touch with me today! Whether you have a specific project in mind or just
            want to discuss your web development needs, I am here to help.
          </p>

          {/* Contact details */}
          <div className='flex flex-col gap-[24px] md:gap-[32px] md:flex-row md:justify-between pt-[24px] md:pt-[60px]'>
            {/* Change icon, heading, and the description, and the relevant link for your preference of information.
             * For the whatsapp link, add your phone number to open whatsapp when clicked
             */}
            <ContactCard
              icon={<i className='ri-whatsapp-line' />}
              heading='Whatsapp me'
              description='+00 00 000 00 00'
              link='https://wa.me/00000000000'
            />
            <ContactCard
              icon={<i className='ri-mail-line' />}
              heading='Email me'
              description='freya@gmail.com'
              link='mailto:freya@gmail.com'
            />
            <ContactCard
              icon={<i className='ri-phone-line' />}
              heading='Call me'
              description='+00 00 000 00 00'
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
