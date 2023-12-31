"use client"

import Link from "next/link"
import Hamburger from "./icons/hamburger"
import Logo from "./icons/logo"
import MenuItem from "./MenuItem"
import { Button } from "./Button"
import MobileNav from "./MobileNav"
import { useState } from "react"

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
  const [open, setOpen] = useState(false)

  return (
    <>
    <nav>
      <div className="grid grid-cols-3 md:flex items-center h-16 md:h-24 max-w-[1110px] px-8 mx-auto">
        <button className="md:hidden w-fit" onClick={() => setOpen(true)}>
          <Hamburger />
        </button>
        <Link href="/" className="place-self-center">
          <Logo className="fill-dark-navy" />
        </Link>
        <ul className="hidden md:flex gap-8 ml-14">
          {menuItems.map(item => (
            <MenuItem key={item.id}>
              <Link href={item.href}>
                {item.value}
              </Link>
            </MenuItem>
          ))}
        </ul>
        <Button className="hidden md:block ml-auto">
          Get Scootin
        </Button>
      </div>
    </nav>
    {/* Mobile Nav */}
    <MobileNav 
      open={open}
      setOpen={setOpen}
    />
    </>
  )
}
