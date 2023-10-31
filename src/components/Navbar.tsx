import Link from "next/link"
import Hamburger from "./icons/hamburger"
import Logo from "./icons/logo"

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

export default function Navbar() {
  return (
    <nav>
      <div className="grid grid-cols-3 md:flex items-center h-16 md:h-24 max-w-[1110px] px-8 mx-auto">
        <button className="md:hidden">
          <Hamburger />
        </button>
        <Logo className="justify-self-center md:justify-self-start fill-dark-navy" />
        <ul className="hidden md:flex gap-8 ml-14">
          {menuItems.map(item => (
            <li key={item.id} className="text-dim-grey body !font-heading !font-bold">
              <Link href={item.href}>
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hidden md:block w-[180px] h-[53px] bg-yellow text-white body !font-heading !font-bold ml-auto">
          Get Scootin
        </button>
      </div>
    </nav>
  )
}
