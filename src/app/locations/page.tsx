import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Locations({ params }: { params: { slug: string } }) {
  return (
    <>
      <Navbar />
      <Header 
        mobileSrc="/images/careers-locations-hero-desktop.jpg"
        tabletSrc="/images/careers-locations-hero-desktop.jpg"
        desktopSrc="/images/careers-locations-hero-desktop.jpg"
        title="Locations"
      />
      <main className="flex max-w-[1110px] min-h-screen flex-col items-center justify-between gap-y-32 p-8 mx-auto">
        <div className="grid place-content-center md:place-content-start md:content-center lg:block relative isolate overflow-hidden bg-[#2F3B59]">
          <picture>
            <source media="(min-width: 769px)" srcSet="/images/world-map-desktop.png" />
            <source media="(min-width: 376px)" srcSet="/images/world-map-tablet.png" />
            <Image 
              src="/images/world-map-mobile.png"
              width={622}
              height={304}
              alt=""
              className="w-full h-full object-cover"
              priority
            />
          </picture>
        </div>
      </main>
      <Footer />
    </>
  )
}

{/* <div className="relative max-w-[445px] max-h-[445px] rounded-full overflow-hidden mx-auto lg:mx-0">
                <Image 
                  src={src}
                  alt=""
                  width={445}
                  height={445}
                  className="w-full h-full object-cover"
                />
              </div> */}