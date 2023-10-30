import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

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
      <main className="flex max-w-[1110px] min-h-screen flex-col items-center justify-between p-24">
      </main>
    </>
  )
}
