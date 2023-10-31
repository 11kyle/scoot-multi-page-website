import Link from "next/link";
import AppStore from "./icons/app-store";
import GooglePlay from "./icons/google-play";
import Logo from "./icons/logo";
import Facebook from "./icons/facebook";
import Twitter from "./icons/twitter";
import Instagram from "./icons/instagram";
import SemiCircles from "./icons/patterns/semi-circles";

const menuItems = [
  {
    id: 0,
    value: "About",
    href: "/about",
  },
  {
    id: 1,
    value: "Locations",
    href: "/locations",
  },
  {
    id: 2,
    value: "Careers",
    href: "/careers",
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="relative overflow-hidden w-full bg-dark-navy">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-y-10 max-w-[1110px] px-8 md:px-0 py-[88px] mx-auto">
          <h2 className="z-10 text-white heading-h2 text-center lg:text-left sm:w-[457px] mx-auto">Sign up and Scoot off today</h2>
          <div className="z-10 flex gap-x-3 mx-auto">
            <AppStore className="w-[114px] lg:w-[159px] h-10 lg:h-14" />
            <GooglePlay className="w-[130px] lg:w-[182px] h-10 lg:h-14" />
          </div>
          
        </div>
        <div className="absolute bottom-0 -right-[173.5px]">
          <SemiCircles />
        </div>
      </div>
      <div className="w-full md:h-24 bg-[#333A44]">
        <div className="md:h-full flex flex-col md:flex-row items-center max-w-[1110px] pt-16 pb-[88px] md:pt-0 md:py-0 px-10 mx-auto">
          <Logo className="fill-white md:mr-14" />
          <ul className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-8 mt-10 mb-[85px] md:m-0">
            {menuItems.map(item => (
              <li key={item.id} className="text-dim-grey body">
                <Link href={item.href}>{item.value}</Link>
              </li>
            ))}
          </ul>
          <div className="md:ml-auto">
            <ul className="flex items-center gap-x-6">
              <li><Facebook /></li>
              <li><Twitter /></li>
              <li><Instagram /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
