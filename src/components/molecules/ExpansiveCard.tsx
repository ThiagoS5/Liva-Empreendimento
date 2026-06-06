'use client'

import { Badge } from '@/components/atom/badge'
import { Card } from '@/components/atom/card'
import { cn } from '@/lib/utils'
import { BedDouble, Building2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ExpansiveCardProps {
  imageUrl: string
  altText: string
  status: string
  title: string
  city: string
  neighborhood: string
  description: string
  features: string
}

export function ExpansiveCard({
  imageUrl,
  altText,
  status,
  title,
  city,
  neighborhood,
  description,
  features,
}: ExpansiveCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const detailsId = `property-${title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')}`

  const toggleExpand = () => {
    setIsExpanded((current) => !current)
  }

  return (
    <Card
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-controls={detailsId}
      className="group relative h-96 w-full max-w-sm cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
      onClick={toggleExpand}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          toggleExpand()
        }
      }}
    >
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <Badge variant="secondary" className="mb-4 bg-white/90 text-black">
          {status}
        </Badge>
        <h2 className="text-3xl font-bold">{title}</h2>
        <div
          id={detailsId}
          className={cn(
            'mt-4 space-y-4 transition-all duration-300 ease-in-out',
            isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-white/90">
            <div>
              <p className="text-xs font-light">Cidade</p>
              <p className="font-semibold">{city}</p>
            </div>
            <div>
              <p className="text-xs font-light">Bairro</p>
              <p className="font-semibold">{neighborhood}</p>
            </div>
          </div>
          <div className="space-y-3 text-white">
            <div className="flex items-center gap-3">
              <BedDouble size={20} color="#76C9B5" />
              <span>{description}</span>
            </div>
            <div className="flex items-center gap-3">
              <Building2 size={20} color="#76C9B5" />
              <span>{features}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
