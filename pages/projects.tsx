import Head from 'next/head'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { ProjectCard } from 'components/atoms/ProjectCard'

export default function Projects() {
  /* Add your projects information here in this data array */
  const projectsData = [
    {
      id: 0,
      image:
        'https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      heading: 'Fashionista',
      link: '#',
      description: `A responsive and scalable e-commerce web app for a fashion brand, developed using React
      and Redux. I contributed to the project by designing the user interface, developing the
      front-end, and integrating the app with third-party APIs for payment processing and
      inventory management.`,
    },
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      heading: 'Health app',
      link: '#',
      description: `An online booking system for a healthcare provider, developed using React and Node.js. I played a key role in designing the user experience, developing the front-end, and integrating the app with a custom-built backend for appointment management and scheduling.`,
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      heading: 'Finance guru',
      link: '#',
      description: `A financial management tool for small businesses, built using React and Chart.js. I was responsible for designing the user interface, developing the front-end, and implementing interactive data visualizations to help users track their finances.`,
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      heading: 'Socially',
      link: '#',
      description: `A social media aggregation platform for influencers, developed using React and GraphQL. I contributed to the project by designing the user interface, developing the front-end, and integrating the app with third-party APIs for social media content aggregation and analytics.`,
    },
  ]

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name='description' content='Portfolio project page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.svg' />
      </Head>

      <Header />

      <div className='container flex flex-col gap-[24px] py-[24px] md:pb-[40px] lg:py-[60px]'>
        <h2 className='md:text-display-md font-700 font-heading text-center text-h2 '>
          My projects
        </h2>

        <div className='flex flex-col gap-[24px]'>
          {projectsData.map(({ image, heading, description }: any, index: number) => {
            return (
              <ProjectCard key={index} heading={heading} description={description} image={image} />
            )
          })}
        </div>
      </div>

      <Footer />
    </>
  )
}
