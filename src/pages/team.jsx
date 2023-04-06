import Head from 'next/head'
import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { FaTwitter } from 'react-icons/fa'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import bogdrakonovImage from '@/images/avatars/bogdrakonov.png'
import downl0reImage from '@/images/avatars/downl0re.jpeg'
import dysanImage from '@/images/avatars/dysan.png'
import stackthatethImage from '@/images/avatars/stackthat-eth-2.png'
import tonystarkImage from '@/images/avatars/tony-stark.jpg'


const seasons = [
  {
    name: 'Opening Day',
    date: 'April 4',
    dateTime: '2022-04-04',
    members: [
      {
        name: 'BogDrakonov',
        role: 'InfoSec Team Coordinator',
        image: bogdrakonovImage,
        twitter: 'https://twitter.com/BogDrakonov'
      },
      {
        name: 'Dysan',
        role: 'InfoSec POAP Master',
        image: downl0reImage,
        twitter: 'https://twitter.com/dysntr'
      },
      {
        name: 'd0wnl0re',
        role: 'InfoSec Education Coordinator',
        image: dysanImage,
        twitter: 'https://twitter.com/d0wnlore'
      },
      {
        name: 'StackThatEth',
        role: 'InfoSec Engineer',
        image: stackthatethImage,
        twitter: 'https://twitter.com/stackthat0x'
      },
      {
        name: 'Tony Stark',
        role: 'InfoSec Engineer',
        image: tonystarkImage,
        twitter: 'https://twitter.com/sudo_okhai'
      },
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default function Team() {
    let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])
  return (
    <>
      <Head>
        <title>BanklessDAO InfoSec - Web security done right</title>
        <link rel="icon" href="/favicon.webp" />
        <meta
          name="description"
          content="Web3 security and infrastructure management for blockchain and cryptocurrency organization."
        />
      </Head>
      <Header />
      <main className='mb-5'>
        <section
      id="members"
      aria-labelledby="members-title"
      className="py-5 sm:py-5"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="members-title"
            className="font-display text-4xl font-medium tracking-tighter text-black-600 sm:text-5xl"
          >
            Our Team
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Our core team has decades of experience in web and infoSecurity best practices.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                seasons.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        dayIndex === selectedIndex
                          ? 'fill-blue-600 stroke-blue-600'
                          : 'fill-transparent stroke-slate-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-blue-600'
                            : 'text-slate-500'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          Season 8
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                      >
                        Current Team
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {seasons.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.members.map((member, memberIndex) => (
                  <div key={memberIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][memberIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${memberIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={member.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500 mb-3">
                      {member.role}
                    </p>
                    <Link href={member.twitter} target='_blank'>
                    <FaTwitter />
                    </Link>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
      </main>
      <Footer />
    </>
  )
}
