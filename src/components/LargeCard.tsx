import Image from "next/image";
import RightArrow from "./icons/patterns/right-arrow";

type CardProps = {
  src: string
  title: string
  description: string
  direction?: "right" | "left"
  children?: React.ReactNode
}

 export default function LargeCard({ src, title, description, direction = "left", children }: CardProps) {
  return (
    <>
      {direction === "left"
        ? (
          <div className="flex flex-col items-center max-w-[573px] lg:max-w-none lg:w-full lg:grid lg:grid-cols-2">
            <div className="relative w-full max-w-[445px] mb-14 lg:mb-0">
              <div className="relative max-w-[445px] max-h-[445px] rounded-full overflow-hidden mx-auto lg:mx-0">
                <Image 
                  src={src}
                  alt=""
                  width={445}
                  height={445}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 lg:-left-1/2 z-10">
                <RightArrow />
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-y-8 md:gap-y-10 lg:gap-y-0 text-center lg:text-left lg:max-w-[445px] lg:justify-self-end">
              <h4 className="text-dark-navy heading-h2 max-w-[457px] lg:mb-6">{title}</h4>
              <p className="text-dim-grey body lg:mb-10">{description}</p>
              <button className="w-[180px] h-[53px] bg-yellow text-white body !font-heading !font-bold">Learn More</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center max-w-[573px] lg:max-w-none lg:w-full lg:grid lg:grid-cols-2">
            <div className="lg:order-2 relative w-full max-w-[445px] mb-14 lg:mb-0 lg:justify-self-end">
              <div className="relative max-w-[445px] max-h-[445px] rounded-full overflow-hidden mx-auto lg:mx-0 lg:ml-auto">
                <Image 
                  src={src}
                  alt=""
                  width={445}
                  height={445}
                  className="w-full h-full object-cover"
                />
              </div>
              {children}
            </div>
            <div className="lg:order-1 flex flex-col items-center lg:items-start gap-y-8 md:gap-y-10 lg:gap-y-0 text-center lg:text-left lg:max-w-[445px]">
              <h4 className="text-dark-navy heading-h2 max-w-[457px] lg:mb-6">{title}</h4>
              <p className="text-dim-grey body lg:mb-10">{description}</p>
              <button className="w-[180px] h-[53px] bg-yellow text-white body !font-heading !font-bold">Learn More</button>
            </div>
          </div>
        )
      }
    
    
    </>
  )
}
