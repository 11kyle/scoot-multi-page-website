import Image from "next/image"
import Circles from "./icons/patterns/circles"
import RightArrow from "./icons/patterns/right-arrow"
import Line from "./icons/patterns/line"
import { Button } from "./Button"

export default function Hero() {
  return (
    <div className="grid place-content-center lg:block h-[650px] relative isolate overflow-hidden bg-[#2F3B59]">
      <picture>
        <source media="(min-width: 769px)" srcSet="/images/home-hero-desktop.jpg" />
        <source media="(min-width: 376px)" srcSet="/images/home-hero-tablet.jpg" />
        <Image 
          src="/images/home-hero-mobile.jpg"
          fill
          alt=""
          className="absolute inset-0 -z-10 object-cover"
          priority
        />
      </picture>
      <div className="lg:h-full lg:justify-center flex flex-col items-center lg:items-start text-center lg:text-left max-w-[1110px] px-8 md:px-24 lg:px-8 lg:mx-auto">
        <h1 className="shrink-0 text-white heading-h1 max-w-[573px] lg:w-[500px]">Scooter sharing made simple</h1>
        <p className="text-white body mt-6 mb-8 max-w-[573px] lg:w-[405px] lg:ml-24">Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
        <div className="relative">
          <Button className="lg:ml-24">
            Get Scootin
          </Button>
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-1/2">
            <Line />
          </div>
          <div className="hidden lg:block absolute lg:top-1/2 -translate-y-[8px] lg:left-full translate-x-[30px]">
            <RightArrow />
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute md:bottom-[45px] lg:bottom-[62px] -right-[31px]">
        <Circles className="stroke-white fill-white" fill="#fff" />
      </div>
      <div className="hidden md:block lg:hidden absolute md:bottom-[30px] lg:bottom-[47px] lg:left-[450px]">
        <RightArrow />
      </div>
    </div>
  )
}
