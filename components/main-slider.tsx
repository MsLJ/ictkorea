"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const slides = [
  {
    id: "slide1",
    image: "/images/main.png",
    mobileImage: "/images/main.png",
  },
  {
    id: "slide2",
    image: "/images/slide2.jpg",
    mobileImage: "/images/mobile/slide2.jpg",
  },
  {
    id: "slide3",
    image: "/images/slide3.png",
    mobileImage: "/images/mobile/slide3.png",
  },
]

export default function MainSlider() {
  const { t } = useLanguage()
  const texts = t.slider
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-[600px] mt-16 overflow-hidden">
      {slides.map((slide, index) => {
        const text = texts[index % texts.length]
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${isMobile ? slide.mobileImage : slide.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#003366]/70" />

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
              <div className="text-white max-w-3xl text-center mx-auto">
                <p className="text-sm sm:text-base mb-6 text-white/90">{text.tagline}</p>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  {text.line1}
                  <br />
                  {text.highlight ? (
                    <>
                      <span className="text-[#00AAFF]">{text.highlight}</span>{" "}
                      {text.line2.replace(text.highlight, "").trim()}
                    </>
                  ) : (
                    text.line2
                  )}
                </h1>
              </div>
            </div>
          </div>
        )
      })}

      <button
        onClick={goToPrevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
