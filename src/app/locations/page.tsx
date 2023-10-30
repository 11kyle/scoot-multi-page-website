import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

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
      <main className="flex max-w-[1110px] min-h-screen flex-col items-center justify-between p-24">
      </main>
    </>
  )
}
