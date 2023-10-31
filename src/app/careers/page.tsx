import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Job from '@/components/Job'
import Navbar from '@/components/Navbar'

const items = [
  {
    id: 0,
    title: "Our tech",
    description: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
    src: "/images/our-tech.jpg",
  },
  {
    id: 1,
    title: "Our Integrity",
    description: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
    src: "/images/our-integrity.jpg",
  },
  {
    id: 2,
    title: "Our Community",
    description: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
    src: "/images/our-community.jpg",
  },
]

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
      <main className="flex max-w-[1110px] min-h-screen flex-col items-center justify-between gap-y-32 p-8 mx-auto">
        <section>
          <div className="space-y-16 lg:space-y-24">
            <h3 className="text-dark-navy heading-h2 text-center">Why join us?</h3>
            <div className="space-y-14 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-7">
              {items.map(item => (
                <Card 
                  key={item.id}
                  src={item.src}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full">
          <Job />
        </section>
      </main>
      <Footer />
    </>
  )
}
