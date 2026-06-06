'use client'

import { Button } from '@/components/atom/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/molecules/Carousel'
import { ContactForm } from '@/components/organisms/ContactForm'
import { whatsappHref } from '@/components/organisms/siteLinks'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import Image from 'next/image'
import { PropertyListing } from '../components/organisms/PropertyListing'

export default function Home() {
  const heroImages = [
    {
      src: '/image-1.png',
      alt: 'Varanda gourmet moderna com churrasqueira embutida, bancada de mármore e guarda-corpo de vidro com vista ampla para o mar.',
    },
    { src: '/image-2.png', alt: 'Varanda com vista para o mar' },
    {
      src: '/image-3.png',
      alt: 'Borda de uma piscina de borda infinita com vista para o mar, com coqueiros e um guarda-sol ao lado em um dia ensolarado.',
    },
  ]

  return (
    <main>
      <Carousel
        id="home"
        className="h-[clamp(424px,118vw,560px)] max-h-[calc(100svh-84px)] sm:h-[clamp(560px,52.15vw,751px)] sm:max-h-none"
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
          Fade({}),
        ]}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  alt={image.alt}
                  src={image.src}
                  priority={index === 0}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <div className="pointer-events-none absolute inset-0 flex items-start pt-[72px] text-left text-white sm:items-center sm:pt-0">
          <div className="w-full px-[25px] sm:px-[16.3vw]">
            <p className="text-sm font-bold uppercase tracking-widest">
              Pré lançamento
            </p>

            <h1 className="mt-3 text-[2.375rem] font-bold leading-none sm:text-[5rem]">
              Barra View
            </h1>

            <div className="mt-4 flex w-fit max-w-full rounded-md bg-[var(--badge)] px-2 py-1.5 text-sm leading-none text-black sm:px-3 sm:text-xl">
              Apartamento com 3 dormitórios, sendo 1 suíte
            </div>
            <Button
              className="pointer-events-auto mt-12 h-11 w-32 border-2 sm:h-[47px] sm:w-[174px]"
              variant="outline"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </Carousel>
      <div className="min-h-[100svh] px-4 sm:px-6 lg:px-8">
        <section
          id="about"
          className="container mx-auto flex min-h-[100svh] items-center px-4 py-16 sm:py-20"
        >
          <div className="flex w-full flex-col items-center gap-10 md:flex-row md:justify-center md:gap-14 lg:gap-20">
            <div className="hidden shrink-0 md:block">
              <Image
                src="/family-icon.png"
                alt="Family Icon"
                width={472}
                height={472}
              />
            </div>
            <div className="max-w-md space-y-6 text-left">
              <h1 className="text-4xl font-medium lg:text-5xl">
                Construimos confiança e <br />
                <span className="font-bold text-teal-700">
                  realizamos sonhos!
                </span>
              </h1>
              <p className="leading-relaxed text-gray-700 tracking-tight">
                Na Liva, cada projeto é planejado para facilitar a vida dos
                moradores, trazendo uma sensação máxima de bem-estar. Espaços
                que abrigam histórias de vida e que são desenvolvidos para que
                você viva momentos incríveis ao lado da sua família.
              </p>
              <Button
                variant="primary"
                className="self-start px-8 py-3"
                asChild
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Saiba mais pelo WhatsApp"
                >
                  SAIBA MAIS
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <section
        id="contact"
        className="relative bg-[var(--bg-form)] text-white pr-4 pl-4 md:pt-15 md:pl-40 "
      >
        <div className="container pl-4 pr-4 pb-15 md:w-8xl grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 lg:gap-20">
          <div className="space-y-4 text-left pt-20">
            <h2 className="text-4xl font-semibold lg:text-5xl ">
              Fale agora com um consultor de vendas
            </h2>
            <p className="text-lg text-white">
              Tire suas dúvidas e conheça de perto o seu{' '}
              <strong>novo jeito de morar.</strong>
            </p>
            <div className="hidden md:block mt-8 w-full max-w-md text-center md:text-left">
              <p className="mb-4 text-md font-semibold">Consultores online</p>
              <div className="flex justify-center -space-x-4 md:justify-start mb-10">
                <Image
                  className="inline-block size-16 rounded-full ring-2 ring-gray-900"
                  src="https://dummyimage.com/100x100/000/fff"
                  alt="Consultor 1"
                  width={48}
                  height={48}
                />
                <Image
                  className="inline-block size-16 rounded-full ring-2 ring-gray-900"
                  src="https://dummyimage.com/100x100/000/fff"
                  alt="Consultor 2"
                  width={48}
                  height={48}
                />
                <Image
                  className="inline-block size-16 rounded-full ring-2 ring-gray-900"
                  src="https://dummyimage.com/100x100/000/fff"
                  alt="Consultor 3"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center md:items-start">
            <div className="w-full max-w-md rounded-lg bg-white p-8 text-black shadow-2xl md:ml-auto z-10">
              <h3 className="mb-6 text-xl text-left font-semibold">
                Fale agora mesmo com a Liva
              </h3>
              <ContactForm />
            </div>
            <div className="md:hidden mt-8 w-full max-w-md text-center md:text-left">
              <p className="mb-4 text-md font-semibold">Consultores online</p>
              <div className="flex justify-center -space-x-4 md:justify-start mb-10">
                <Image
                  className="inline-block size-16 rounded-full ring-2 ring-gray-900"
                  src="https://dummyimage.com/600x400/000/fff"
                  alt="Consultor 1"
                  width={48}
                  height={48}
                />
                <Image
                  className="inline-block size-16 rounded-full ring-2 ring-gray-900"
                  src="https://dummyimage.com/600x400/000/fff"
                  alt="Consultor 2"
                  width={48}
                  height={48}
                />
                <Image
                  className="inline-block size-16 rounded-full ring-2 ring-gray-900"
                  src="https://dummyimage.com/600x400/000/fff"
                  alt="Consultor 3"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="properties" className="px-4 sm:px-6 lg:px-8">
        <PropertyListing />
      </div>
    </main>
  )
}
