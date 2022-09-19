import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link';


type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name's TanoY2k", 'Guy-who-loves-cofee.tsx', '<ButLovesToCodeMore/>'],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
            <h1>
                <BackgroundCircles />
                <img className='relative rounded-full h-32 w-32 mx-auto mt-10 object-cover'
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AkkbOKzcAjz52t43egYbNHy5owhwVAAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII=" alt="" />
                <div className='z-50'>
                    <h2 className='text-sm mt-5 uppercase text-gray-500 tracking-[15px]'>
                        Software Engineer
                    </h2>
                    <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                        <span className='mr-3'>{text}</span>
                        <Cursor cursorColor="#F7AB0A" />
                    </h1>

                    <div className='pt-5 z-50'>
                        <Link href='#about'><button className='heroButton'>About</button></Link>
                        <Link href='#experience'><button className='heroButton'>Experience</button></Link>
                        <Link href='#skills'><button className='heroButton'>Skills</button></Link>
                        <Link href='#projects'><button className='heroButton'>Projects</button></Link>
                    </div>

                </div>

            </h1>
        </div>
    )
}