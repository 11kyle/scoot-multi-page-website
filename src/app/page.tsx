import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LargeCard from '@/components/LargeCard'
import Navbar from '@/components/Navbar'
import LeftDownwardArrow from '@/components/icons/patterns/left-downward-arrow'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex max-w-[1110px] min-h-screen flex-col items-center justify-between gap-y-32 p-8 mx-auto my-16 lg:my-32">
        <LargeCard 
          src="/images/telemetry.jpg"
          title="Easy to use riding telemetry"
          description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
          direction="right"
        >
          <div className="absolute left-0 bottom-0 z-10">
            <LeftDownwardArrow />
          </div>
        </LargeCard>
        <LargeCard 
          src="/images/near-you.jpg"
          title="Coming to a city near you"
          description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
        />
        <LargeCard 
          src="/images/payments.jpg"
          title="Zero hassle payments"
          description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
          direction="right"
        >
          <div className="absolute left-1/2 top-1/4 -translate-y-1/4 z-10">
            <LeftDownwardArrow />
          </div>
        </LargeCard>
      </main>
      <Footer />
    </>
  )
}
