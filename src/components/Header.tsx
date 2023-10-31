import Image from "next/image"
import Circles from "./icons/patterns/circles"

type HeaderProps = {
  mobileSrc: string
  tabletSrc: string
  desktopSrc: string
  title?: string
}

export default function Header({ mobileSrc, tabletSrc, desktopSrc, title }: HeaderProps) {
  return (
    <div className="grid place-content-center md:place-content-start md:content-center lg:block h-[160px] xs:h-[200px] relative isolate overflow-hidden bg-[#2F3B59]">
      <picture>
        <source media="(min-width: 769px)" srcSet={desktopSrc} />
        <source media="(min-width: 376px)" srcSet={tabletSrc} />
        <Image 
          src={mobileSrc}
          fill
          alt=""
          className="absolute inset-0 -z-10 object-cover"
          
        />
      </picture>
      <div className="lg:h-full lg:flex lg:flex-col lg:justify-center max-w-[1110px] md:px-24 lg:px-8 lg:mx-auto">
        <h2 className="text-white heading-h1">{title}</h2>
      </div>
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[31px]">
        <Circles className="stroke-white fill-white" fill="#fff" />
      </div>
    </div>
  )
}
