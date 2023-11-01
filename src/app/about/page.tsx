import Card from '@/components/Card'
import Faq from '@/components/Faq'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LargeCard from '@/components/LargeCard'
import Navbar from '@/components/Navbar'
import LeftUpwardArrow from '@/components/icons/patterns/left-upward-arrow'

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

const howItWorksFAQs = [
  {
    question: "How do I download the app?",
    answer: "To download the Scoot app, you can search 'Scoot' in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
    defaultOpen: true,
  },
  {
    question: "Can I find a nearby Scoots?",
    answer: "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information. ",
    defaultOpen: false,
  },
  {
    question: "Do I need a license to ride?",
    answer: "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.",
    defaultOpen: false,
  },
]
const safeDrivingFAQs = [
  {
    question: "Should I wear a helmet?",
    answer: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
    defaultOpen: true,
  },
  {
    question: "How about the rules & regulations?",
    answer: "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
    defaultOpen: false,
  },
  {
    question: "What if I damage my Scoot?",
    answer: "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.",
    defaultOpen: false,
  },
]

export default function About({ params }: { params: { slug: string } }) {
  return (
    <>
      <Navbar />
      <Header 
        mobileSrc="/images/about-hero-desktop.jpg"
        tabletSrc="/images/about-hero-desktop.jpg"
        desktopSrc="/images/about-hero-desktop.jpg"
        title="About"
      />
      <main className="flex max-w-[1110px] min-h-screen flex-col items-center justify-between gap-y-32 p-8 mx-auto my-16 lg:my-32">
        <section className="w-full flex flex-col items-center justify-between gap-y-32">
          <LargeCard 
            src="/images/digital-era.jpg"
            title="Mobility for the digital era"
            description="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
            direction="right"
            btn={false}
          >
            <div className="absolute left-0 bottom-5 md:-left-1/4 z-10">
              <LeftUpwardArrow />
            </div>
          </LargeCard>
          <LargeCard 
            src="/images/better-living.jpg"
            title="Better urban living"
            description="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
            btn={false}
          />
        </section>
        <section>
          <div className="space-y-16 lg:space-y-24">
            <h3 className="text-dark-navy heading-h2 text-center">Our values</h3>
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
        <section className="w-full space-y-16">
          <div>
            <h2 className="text-dark-navy heading-h2 text-center">FAQs</h2>
          </div>
          <div className="lg:grid lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h3 className="text-dark-navy heading-h3 text-center lg:text-left mb-8">How it works</h3>
            </div>
            <div className="space-y-4 w-full lg:col-start-3 lg:col-span-3">
              {howItWorksFAQs.map(faq => (
                <Faq 
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={faq.defaultOpen}
                />
              ))}
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h3 className="text-dark-navy heading-h3 text-center lg:text-left mb-8">Safe driving</h3>
            </div>
            <div className="space-y-4 w-full lg:col-start-3 lg:col-span-3">
              {safeDrivingFAQs.map(faq => (
                <Faq 
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={faq.defaultOpen}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
