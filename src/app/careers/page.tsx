import Header from '@/components/Header'
import Job from '@/components/Job'
import Navbar from '@/components/Navbar'

export default function Careers({ params }: { params: { slug: string } }) {
  return (
    <>
      <Navbar />
      <Header 
        mobileSrc="/images/careers-locations-hero-desktop.jpg"
        tabletSrc="/images/careers-locations-hero-desktop.jpg"
        desktopSrc="/images/careers-locations-hero-desktop.jpg"
        title="Careers"
      />
      <main className="flex max-w-[1110px] min-h-screen flex-col items-center justify-between p-8 mx-auto">
        <Job />
      </main>
    </>
  )
}
