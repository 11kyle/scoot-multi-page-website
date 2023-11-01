import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Close from './icons/close'
import Link from 'next/link'
import MenuItem from './MenuItem'

type MobileNavProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

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

export default function MobileNav({ open, setOpen }: MobileNavProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[256px]">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-6 top-6">
                      <button
                        type="button"
                        className="relative"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <Close aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-[#333A44] pt-16 pb-6">
                    <div className="px-6">
                      <Dialog.Title className="sr-only">
                        Navigation Slideout Menu
                      </Dialog.Title>
                    </div>
                    <div className="relative flex-1 px-6 mt-6">
                      <ul className="flex flex-col gap-y-6">
                        {menuItems.map(item => (
                          <MenuItem key={item.id}>
                            <Link href={item.href} className="text-light-grey">
                              {item.value}
                            </Link>
                          </MenuItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
