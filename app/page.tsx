"use client"

import Link from "next/link"
import MainSlider from "@/components/main-slider"
import { useLanguage } from "@/lib/i18n"

export default function Home() {
  const { t } = useLanguage()

  const serviceImages = [
    {
      name: t.main.services[0],
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01_communication_infrastructure-wkRP0C9IvjBQ0SEvXzlobIoo17Bf3f.png",
    },
    {
      name: t.main.services[1],
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04_ITS_BIS_construction-M1ehQp4AgAKpt1CgPeaXh3Y48t2Vjz.png",
    },
    {
      name: t.main.services[2],
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03_integrated_security_solution-i2PX76TSOjMUa8Oom9Flo24VlLF5yE.png",
    },
    {
      name: t.main.services[3],
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02_NI_SI_integration-pPePf80TfB97tdDLxmPArU2Tsfcidm.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <MainSlider />

      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="service-images-title">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold tracking-[0.18em] text-primary">BUSINESS AREA</p>
              <h2 id="service-images-title" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {t.main.businessAreaTitle}
              </h2>
            </div>
            <p className="hidden text-sm text-muted-foreground sm:block">{t.main.businessAreaDesc}</p>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin">
            {serviceImages.map((image) => (
              <figure key={image.name} className="w-[min(78vw,280px)] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <img
                  src={image.src}
                  alt={image.name}
                  className="block h-auto w-full"
                  loading="lazy"
                />
                <figcaption className="sr-only">{image.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 pb-12 sm:px-6 lg:px-8" aria-labelledby="novagate-banner-title">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <h2 id="novagate-banner-title" className="sr-only">
            NOVAGATE V3.0
          </h2>
          <Link
            href="/business/functions"
            aria-label="Novagate V3.0"
            className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05_Novagate-QcCD4vup9AzVnLxweJHgKiTc5mZXXw.png"
              alt={t.main.novagateBannerAlt}
              className="block h-auto w-full transition-opacity duration-200 group-hover:opacity-90"
              loading="lazy"
            />
          </Link>
        </div>
      </section>
    </div>
  )
}
