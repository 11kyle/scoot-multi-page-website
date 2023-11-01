import Locate from "./icons/locate";
import Scooter from "./icons/scooter";
import Ride from "./icons/ride";

type CardProps = {
  icon: "locate" | "scooter" | "ride"
  title: string
  description: string
}

 export default function SmallCard({ icon, title, description }: CardProps) {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col items-center md:items-start gap-y-6 md:gap-x-20 lg:gap-x-0 text-center md:text-left max-w-[320px] md:max-w-none lg:max-w-[320px] mx-auto">
      <div>
        {icon === "locate" && (
          <Locate />
        )}
        {icon === "scooter" && (
          <Scooter />
        )}
        {icon === "ride" && (
          <Ride />
        )}
      </div>
      <div className="flex flex-col gap-y-6">
        <h4 className="text-dark-navy heading-h4">{title}</h4>
        <p className="text-dim-grey body">{description}</p>
      </div>
      
    </div>
  )
}
