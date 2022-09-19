import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>TanoY2k's Portfolio</title>
        <meta name="description" content="TanoY2k Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    {/* Header */}
    <Header/>
    {/* Hero Section */}
    <section id="hero"
    className='snap-center '>
      <Hero/>
    </section>
    {/* About */}
    {/* Experience */}
    {/* Skills */}
    {/* Projects */}
    {/* Contact Me */}
    </div>
  )
}

export default Home
