import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const locations = [
  {
    id: 0,
    city: "New York"
  },
  {
    id: 1,
    city: "London"
  },
  {
    id: 2,
    city: "Jakarta"
  },
  {
    id: 3,
    city: "Yokohama"
  },
]

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
      <main className="flex max-w-[1110px] min-h-screen flex-col items-center justify-between p-8 mx-auto my-16 lg:my-32">
        <div className="grid place-content-center md:place-content-start md:content-center lg:block relative isolate overflow-hidden">
          <div className="md:hidden mb-10">
            <Image 
              src="/images/world-map-mobile.png"
              width={622}
              height={304}
              alt=''
            />
          </div>
          <div className="hidden md:block lg:hidden mb-20">
            <Image 
              src="/images/world-map-tablet.png"
              width={689}
              height={337}
              alt=''
            />
          </div>
          <div className="hidden lg:block mb-[120px]">
            <Image 
              src="/images/world-map-desktop.png"
              width={1110}
              height={543}
              alt=''
            />
          </div>

          {/* <picture>
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
          </picture> */}
          <div className="w-full md:hidden">
            <ul className="flex flex-col gap-y-4">
              {locations.map(location => (
                <li key={location.id} className="w-full h-[72px] text-dark-navy heading-h4 bg-yellow bg-opacity-[0.15] grid place-content-center">{location.city}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="w-full flex flex-col lg:flex-row items-center text-center lg:justify-between lg:text-left gap-y-8 md:gap-y-10 max-w-[573px] lg:max-w-none">
          <h2 className="text-dark-navy heading-h2 max-w-[457px] lg:w-[325px]">Your City Not Listed?</h2>
          <p className="text-dim-grey body lg:w-[425px]">If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
          <button className="w-[180px] h-[53px] bg-yellow text-white body !font-heading !font-bold">
            Message Us
          </button>
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