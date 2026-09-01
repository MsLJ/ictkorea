"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: "slide1",
    image: "/images/main.png",
    mobileImage: "/images/main.png",
    tagline: "끊김없는 소통, 신뢰할 수 있는 기술로 실현합니다.",
    mainText: {
      line1: "사람과 세상을 이어주는",
      line2: "따뜻한 네트워크 세상을 열어갑니다",
    },
    highlight: "네트워크",
  },
  {
    id: "slide2",
    image: "/images/slide2.jpg",
    mobileImage: "/images/mobile/slide2.jpg",
    tagline: "한걸음 한걸음 쌓아온 오늘이, 내일의 혁신을 만듭니다.",
    mainText: {
      line1: "끊임없는 도전과 혁신으로",
      line2: "더 나은 미래를 만들어갑니다",
    },
    highlight: "혁신",
  },
  {
    id: "slide3",
    image: "/images/slide3.png",
    mobileImage: "/images/mobile/slide3.png", // Changed from .jpg to .png to match desktop format
    tagline: "보이지 않는 연결이 모여 사람과 도시, 그리고 세상을 변화시킵니다.",
    mainText: {
      line1: "네트워크는 기술을 넘어",
      line2: "세상을 움직이는 보편의 언어입니다.",
    },
    highlight: "글로벌",
  },
]

export default function MainSlider() {
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
      {slides.map((slide, index) => (
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
              <p className="text-sm sm:text-base mb-6 text-white/90">{slide.tagline}</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                {slide.mainText?.line1}
                <br />
                <span className="text-[#00AAFF]">{slide.highlight}</span>{" "}
                {slide.mainText?.line2.replace(slide.highlight || "", "").trim()}
              </h1>
            </div>
          </div>
        </div>
      ))}

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
