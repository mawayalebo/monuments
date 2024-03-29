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
    name: 'Tiktok',
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
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>{'Monuments Civil & Architectural Projects'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed w-screen h-screen z-[-20] top-0">
          <Image src="/image1.jpeg" alt="logo" layout="fill" className="blur-sm"/>
      </div>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center relative ">
        
        <div>
          <h1 className="font-bold text-4xl text-blue">MONUMENTS CIVIL & ARCHITECTURAL PROJECTS</h1>
        </div>
        <hr />
        <div>
          <div className="flex justify-center space-x-5 space-y-5 mt-10 items-center flex-wrap">
            
            {/* whatsapp */}
            <div className="flex flex-grow flex-col p-5 cursor-pointer rounded-xl bg-gray-900 hover:scale-105 shadow-2xl bg-opacity-40">
              <div>
                <Image src="/WhatsApp_icon.png" width={65} height={65} />
              </div>
              <div>
                <span className="text-white"><a href="https://wa.me/message/MTIPGDDV6BPZO1?src=qr">Whatsapp</a></span>
              </div>
              <div>
                <span className="text-white whitespace-nowrap">+(27)79 747 5160 </span>
              </div>
            </div>
            {/* gmail*/}
            <div className="flex flex-grow  flex-col bg-opacity-40 p-5 cursor-pointer rounded-xl bg-blend-multiply bg-gray-900 hover:scale-105 shadow-2xl">
              <div>
                <Image src="/Gmail_icon.png" width={65} height={65} />
              </div>
              <div>
                <span className="text-white"><a href="mailto:monuments.civil.arch@gmail.com">Email</a></span>
              </div>
              <div>
                <span className="text-white whitespace-nowrap">monuments.civil.arch@gmail.com</span>
              </div>
            </div>
            

            {/* instagram*/}
            <div className="flex flex-grow flex-col bg-opacity-40 p-5 cursor-pointer rounded-xl bg-blend-multiply bg-gray-900 hover:scale-105 shadow-2xl">
              <div>
                <Image src="/tiktok_icon.png" width={65} height={65} />
              </div>
              <div>
                <span className="text-white"><a href="https://www.tiktok.com/@monumentscap?_t=8YDxwghC2Sc&_r=1">Tiktok</a></span>
              </div>
              <div>
                <span className="text-white whitespace-nowrap">@monumentscap</span>
              </div>
            </div>

            {/* facebook*/}
            <div className="flex flex-grow flex-col bg-opacity-40 p-5 cursor-pointer rounded-xl bg-blend-multiply bg-gray-900 hover:scale-105 shadow-2xl">
              <div>
                <Image src="/Facebook_Icon.png" width={65} height={65} />
              </div>
              <div>
                <span className="text-white whitespace-nowrap"><a href="https://www.facebook.com/Monuments-Civil-and-Architectural-Projects-105922798563046">Facebook</a></span>
              </div>
              <div>
                <span className="text-white whitespace-nowrap">Monuments Civil & Architectural Projects </span>
              </div>
            </div>

            
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        
      </footer>
    </div>
  )
}
