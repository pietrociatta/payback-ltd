import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Testimonial = () => {
  const slides = [
    "./logos/logo-1.png",
    "./logos/logo-2.png",
    "./logos/logo-3.png",
    "./logos/logo-4.png",
  ]
  return (
    <Carousel
      opts={{
        align: "center",
        duration: 10,
        loop: true,
      }}
      className=" relative "
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="w-full sm:basis-1/3 xl:basis-1/4"
          >
            <img src={slide} alt="logo" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-none  rounded-none " />
      <CarouselNext className="border-none   rounded-none " />
    </Carousel>
  )
}

export default Testimonial
