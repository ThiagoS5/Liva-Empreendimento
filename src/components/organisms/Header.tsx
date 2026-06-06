'use client'

import { Button } from '@/components/atom/button'
import { SocialLinks } from '@/components/molecules/SocialLinks'
import { WhatsAppButton } from '@/components/molecules/WhatsAppButton'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { navigationLinks } from './siteLinks'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src="/liva-icon.png"
            alt="Liva empreendimentos"
            width={100}
            height={43}
            className="h-10 w-auto cursor-pointer"
            priority
          />
        </Link>

        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Button variant="link" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <SocialLinks />
          <WhatsAppButton buttonClassName="w-full ml-4" />
        </div>

        <div className="z-50 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        hidden={!isMenuOpen}
        className={cn(
          'fixed inset-0 z-[60] h-screen w-screen bg-white md:hidden',
          'flex flex-col p-4 transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b pb-4">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/liva-icon.png"
              alt="Liva empreendimentos"
              width={100}
              height={43}
              priority
              className="h-10 w-auto"
            />
          </Link>
          <Button variant="ghost" size="icon" onClick={closeMenu}>
            <X size={28} />
            <span className="sr-only">Fechar menu</span>
          </Button>
        </div>

        <nav className="flex-grow pt-8" aria-label="Navegação mobile">
          <ul className="flex flex-col items-start space-y-6">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Button
                  variant="link"
                  className="text-xl"
                  asChild
                  onClick={closeMenu}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>

          <div className="p-4">
            <p className="mb-3 text-sm font-semibold text-gray-800">
              Acompanhe nas redes
            </p>
            <SocialLinks />
          </div>
        </nav>

        <div className="border-t pt-6">
          <WhatsAppButton buttonClassName="w-full" />
        </div>
      </div>
    </header>
  )
}
