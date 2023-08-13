import CarouselImg1 from '@/assets/carousel-1.svg'
import CarouselImg2 from '@/assets/carousel-2.svg'
import CarouselImg3 from '@/assets/carousel-3.svg'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const carousel = carouselRef.current
      if (!carousel) return

      const images = Array.from(carousel.querySelectorAll('img'))

      const carouselRect = carousel.getBoundingClientRect()
      const containerWidth = carouselRect.width

      images.forEach((img, index) => {
        const imgOffset = img.getBoundingClientRect().left - carouselRect.left

        // Skip calculating opacity for the first image
        if (index === 0) {
          img.style.opacity = '1'
          return
        }

        // Calculate opacity based on distance from left side
        const maxOpacity = 1
        const minOpacity = 0.3
        const opacity =
          maxOpacity - (imgOffset / containerWidth) * (maxOpacity - minOpacity)

        img.style.opacity = opacity.toString()
      })
    }

    const syncCarouselScroll = () => {
      const carousel = carouselRef.current
      if (!carousel) return

      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)
      const targetScrollLeft =
        (carousel.scrollWidth - carousel.clientWidth) * scrollPercentage
      carousel.scrollLeft = targetScrollLeft
    }

    window.addEventListener('scroll', syncCarouselScroll)
    handleScroll() // Initial call to set initial opacity

    return () => {
      window.removeEventListener('scroll', syncCarouselScroll)
    }
  }, [])

  return (
    <div
      ref={carouselRef}
      className="w-full pl-20 flex overflow-x-auto space-x-4 scroll-smooth will-change-scroll scrollbar-hide"
    >
      <Image src={CarouselImg1} alt="" width={400} height={400} />
      <Image src={CarouselImg2} alt="" width={400} height={400} />
      <Image src={CarouselImg3} alt="" width={400} height={400} />
    </div>
  )
}
