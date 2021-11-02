import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const socialmedia = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/',
    icon: 'facebook.svg'
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/',
    icon: 'instagram.svg'
  },
  {
    name: 'Twitter',
    link: 'https://www.twitter.com/',
    icon: 'twitter.svg'
  },
]
export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{'Monuments Civil & Architectural Projects'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center relative">
        <div>
          <h1 className="font-bold text-4xl">Monuments Civil & Architectural Projects</h1>
        </div>
        <div>
          <div className="mt-10">
            <h2 className="font-bold text-2xl">Contact us</h2>
          </div>
          <hr/>
          <div className="flex space-x-5 mt-5">
            <span><a href="https://wa.me/message/MTIPGDDV6BPZO1?src=qr">Whatsapp</a></span>
            <span><a href="monuments.civil.arch@gmail.com">Gmail</a></span>
            <span><a href="https://www.instagram.com/monuments.civil.arch/">Instagram</a></span>
            <span><a href="https://www.facebook.com/Monuments-Civil-and-Architectural-Projects-105922798563046">Facebook</a></span>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        
      </footer>
    </div>
  )
}
