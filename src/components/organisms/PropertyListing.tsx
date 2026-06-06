'use client'

import { Button } from '@/components/atom/button'
import { ExpansiveCard } from '@/components/molecules/ExpansiveCard'
import allPropertiesData from '@/data/properties.json'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import { useState } from 'react'

const allProperties = allPropertiesData
const filterSelectClassName =
  'h-12 w-full appearance-none rounded-md border-2 border-black bg-white px-5 py-3 pr-11 text-base font-medium text-black shadow-sm transition-all duration-200 hover:border-teal-600 hover:shadow-md focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/30 focus:ring-offset-2'

export function PropertyListing() {
  const [showFilters, setShowFilters] = useState(false)
  const [visibleCount, setVisibleCount] = useState(8)
  const [stageFilter, setStageFilter] = useState('all')
  const [locationFilter, setLocationFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const filtersId = 'property-filters'

  const filteredProperties = allProperties.filter((property) => {
    const stageMatch = stageFilter === 'all' || property.status === stageFilter
    const locationMatch =
      locationFilter === 'all' || property.city === locationFilter
    const typeMatch = typeFilter === 'all' || property.type === typeFilter

    return stageMatch && locationMatch && typeMatch
  })

  const propertiesToShow = filteredProperties.slice(0, visibleCount)

  const handleStageChange = (value: string) => {
    setStageFilter(value)
    setVisibleCount(8)
  }

  const handleLocationChange = (value: string) => {
    setLocationFilter(value)
    setVisibleCount(8)
  }

  const handleTypeChange = (value: string) => {
    setTypeFilter(value)
    setVisibleCount(8)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center space-y-6 text-center">
        <h1 className="text-4xl font-light leading-tight lg:text-5xl">
          Confira todos os <br /> empreendimentos{' '}
          <span className="font-bold text-teal-700">da Liva</span>
        </h1>
        <Button
          variant={showFilters ? 'primary' : 'filter'}
          onClick={() => setShowFilters((current) => !current)}
          className="gap-2 transition-transform duration-200 hover:-translate-y-0.5"
          aria-expanded={showFilters}
          aria-controls={filtersId}
        >
          {showFilters ? <X size={18} /> : <SlidersHorizontal size={18} />}
          FILTROS
        </Button>

        {showFilters && (
          <div
            id={filtersId}
            className="w-full max-w-3xl rounded-lg border border-black/10 bg-white p-4 text-left shadow-lg md:p-6"
          >
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative">
                <label className="sr-only" htmlFor="stage-filter">
                  Estágio do empreendimento
                </label>
                <select
                  id="stage-filter"
                  value={stageFilter}
                  onChange={(event) => handleStageChange(event.target.value)}
                  className={filterSelectClassName}
                >
                  <option value="all">Todos os Estágios</option>
                  <option value="PRÉ LANÇAMENTO">Pré Lançamento</option>
                  <option value="EM OBRAS">Em Obras</option>
                  <option value="PRONTO PARA MORAR">Pronto para Morar</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-black/70"
                  aria-hidden="true"
                />
              </div>

              <div className="relative">
                <label className="sr-only" htmlFor="location-filter">
                  Localização
                </label>
                <select
                  id="location-filter"
                  value={locationFilter}
                  onChange={(event) => handleLocationChange(event.target.value)}
                  className={filterSelectClassName}
                >
                  <option value="all">Todas as Cidades</option>
                  <option value="Ribeirão Preto">Ribeirão Preto</option>
                  <option value="Franca">Franca</option>
                  <option value="Campinas">Campinas</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-black/70"
                  aria-hidden="true"
                />
              </div>

              <div className="relative">
                <label className="sr-only" htmlFor="type-filter">
                  Tipo de imóvel
                </label>
                <select
                  id="type-filter"
                  value={typeFilter}
                  onChange={(event) => handleTypeChange(event.target.value)}
                  className={filterSelectClassName}
                >
                  <option value="all">Todos os Tipos</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Terreno">Terreno</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-black/70"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {propertiesToShow.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {propertiesToShow.map((property) => (
            <ExpansiveCard
              key={property.id}
              imageUrl={property.imageUrl}
              altText={property.altText}
              title={property.title}
              city={property.city}
              neighborhood={property.neighborhood}
              description={property.description}
              features={property.features}
              status={property.status}
            />
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-12 max-w-xl rounded-lg border border-dashed border-black/30 bg-white p-8 text-center shadow-sm">
          <p className="text-lg font-semibold text-black">
            Nenhum empreendimento encontrado
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Ajuste os filtros para visualizar outras opções da Liva.
          </p>
        </div>
      )}

      {visibleCount < filteredProperties.length && (
        <div className="mt-12 text-center">
          <Button
            variant="primary"
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="transition-transform duration-200 hover:-translate-y-0.5"
          >
            CARREGAR MAIS
          </Button>
        </div>
      )}
    </section>
  )
}
