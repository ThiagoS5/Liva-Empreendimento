import { SocialLinks } from '@/components/molecules/SocialLinks'
import { WhatsAppButton } from '@/components/molecules/WhatsAppButton'
import Image from 'next/image'
import Link from 'next/link'
import { navigationLinks } from './siteLinks'

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/liva-logo-branco.png"
              alt="Liva Logo"
              width={120}
              height={40}
              className="mb-4 h-10"
            />
            <p className="mr-15 text-sm md:mr-0">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <nav className="space-y-4" aria-label="Navegação do rodapé">
            <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-teal-300 md:mt-0">
              Navegue no Site
            </h3>
            <ul className="space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Acompanhe nas redes
            </h3>
            <SocialLinks variant="light" />
          </div>

          <div className="space-y-2 text-sm md:space-y-4 md:justify-items-end-safe">
            <p className="mr-15 mb-5 text-left text-white md:mr-0 md:mb-0 md:text-right">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </p>
            <p className="font-semibold text-white">(99) 9999-9999</p>
            <p className="font-semibold text-white">contato@liva.com.br</p>
            <WhatsAppButton />
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-2 md:pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Liva. Todos os direitos
              reservados.
            </p>
            <p className="font-semibold uppercase tracking-wider">
              FEBACAPITAL
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
