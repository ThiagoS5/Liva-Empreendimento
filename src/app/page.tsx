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
        className="h-svh"
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
          Fade({}),
        ]}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video items-center justify-center overflow-hidden h-screen w-full">
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
        <div className="pointer-events-none absolute inset-0 flex flex-col items-start justify-center p-8 text-left text-white md:p-16">
          <p className="text-sm font-bold uppercase tracking-widest">
            Pré lançamento
          </p>

          <h1 className="mt-2 text-5xl font-bold md:text-7xl">Barra View</h1>

          <div className="mt-4 rounded-md bg-[var(--badge)] px-3 py-1 text-black">
            Apartamento com 3 dormitórios, sendo 1 suíte
          </div>
          <Button
            className="pointer-events-auto mt-6 border-2"
            variant="outline"
          >
            Saiba mais
          </Button>
        </div>
      </Carousel>
      <div className="px-4 sm:px-6 lg:px-8">
        <section id="about" className="container mx-auto py-16 px-4">
          <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
            <div className="hidden md:block md:pr-50">
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
                <span className="font-bold text-teal-500">
                  realizamos sonhos!
                </span>
              </h1>
              <p className="leading-relaxed text-gray-700 tracking-tight">
                Na Liva, cada projeto é planejado para facilitar a vida dos
                moradores, trazendo uma sensação máxima de bem-estar. Espaços
                que abrigam histórias de vida e que são desenvolvidos para que
                você viva momentos incríveis ao lado da sua família.
              </p>
              <Button variant="primary" className="self-start px-8 py-3">
                SAIBA MAIS
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
