import Image from "next/image";

type CardProps = {
  src: string
  title: string
  description: string
}

 export default function Card({ src, title, description }: CardProps) {
  return (
    <div className="flex flex-col items-center max-w-[350px]">
      <div className="relative mb-14">
        <div className="relative w-[240px] h-[240px] rounded-full overflow-hidden">
          <Image 
            src={src}
            alt=""
            fill
            className=""
          />
          
        </div>
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-yellow grid place-content-center">
          <p className="text-dark-navy heading-h4">01</p>
        </div>
      </div>
      <div className="text-center space-y-6 mt-8">
        <h4 className="text-dark-navy heading-h4">{title}</h4>
        <p className="text-dim-grey body">{description}</p>
      </div>
    </div>
  )
}
