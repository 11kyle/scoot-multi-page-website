import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import LargeCard from '@/components/LargeCard'
import Navbar from '@/components/Navbar'
import SmallCard from '@/components/SmallCard'
import HorizontalLine from '@/components/icons/patterns/horizontal-line'
import LeftDownwardArrow from '@/components/icons/patterns/left-downward-arrow'
import VerticalLine from '@/components/icons/patterns/vertical-line'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex max-w-[1110px] min-h-screen flex-col items-center gap-y-32 p-8 mx-auto my-16 lg:my-32">
        <section className="relative flex flex-col lg:flex-row justify-between gap-y-12 w-full">
          <SmallCard 
            title="Locate with app"
            description="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. "
            icon="locate"
          />
          <SmallCard 
            title="Pick your scooter"
            description="We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
            icon="scooter"
          />
          <SmallCard 
            title="Enjoy the ride"
            description="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
            icon="ride"
          />
          <div className="-z-10 hidden md:block lg:hidden absolute md:-top-[120px] md:left-[42px]">
            <VerticalLine />
          </div>
          <div className="-z-10 hidden lg:block absolute top-[42px] right-[300px]">
            <HorizontalLine />
          </div>
        </section>
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
