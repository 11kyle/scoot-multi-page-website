"use client"

import { Disclosure } from '@headlessui/react'
import Chevron from './icons/chevron'

type FAQProps = {
  question: string
  answer: string
  defaultOpen: boolean
}

export default function Faq({ question, answer, defaultOpen }: FAQProps) {
  return (
    // <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full bg-snow p-8">
        <Disclosure defaultOpen={defaultOpen}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-dark-navy heading-h4">
                <span>{question}</span>
                <Chevron 
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
                {/* <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                /> */}
              </Disclosure.Button>
              <Disclosure.Panel className="text-dark-navy body pt-8">
                {answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    // </div>
  )
}
