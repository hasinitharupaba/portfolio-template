/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Button } from 'components/Button'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name='about page' content='Portfolio about page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.svg' />
      </Head>

      <Header />

      <div className='container py-[32px] lg:pt-[80px] md:pb-[40px] lg:pb-[100px] flex flex-col items-center gap-[16px] lg:gap-[40px]'>
        {/* About image banner */}
        <img
          src='https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='project image'
          className='object-center object-cover w-full md:w-[960px] h-full md:h-[500px] rounded-[12px]'
        />

        {/* About details */}
        <div className='flex flex-col items-center'>
          <h1 className='text-h2 md:text-display-md font-700 font-heading'>About me</h1>

          <p className='text-base text-N-600 lg:w-[960px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>

        <div className='pt-[16px] lg:pt-[56px]'>
          <Link href='/contact'>
            <Button appearance='primary' label='Contact' />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
