import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Testimonial = () => {
  const testimonials = [
    {
      name: "Rosalyn Brown",
      rating: 5,
      date: "2023-12-18",
      text: "I was very hopeless that I was going to get any money that I lost back until I got in contact with one of their workers. She was...",
      img: "./logos/logo-1.png",
    },
    {
      name: "Jakub Vymazal",
      rating: 5,
      date: "2023-12-18",
      text: "I started to work with Payback Ltd because I was the victim of a cryptocurrency scam. My manager Yana is accommodating and...",
      img: "./logos/logo-2.png",
    },
    {
      name: "Kenny Young",
      rating: 5,
      date: "2023-12-18",
      text: "Payback helped me through the process of getting my money back from a scammer. Thank you Payback, and thank you Omer...",
      img: "./logos/logo-3.png",
    },
  ]

  return (
    <div className="w-[90%] flex flex-col items-center justify-center ">
      <img src="/logos/trust.svg" alt="" className="max-w-[100px]" />
      <p className="text-gray-500 text-xs mb-14 mt-3">
        Rated 4.4 / 5 based on 1515 reviews. Showing our favorite reviews.
      </p>
      <Carousel
        opts={{
          align: "center",
          duration: 10,
          slidesToScroll: 3,
          loop: true,
        }}
        className=" relative w-full "
      >
        <CarouselContent>
          {testimonials.map((slide, index) => (
            <CarouselItem
              key={index}
              className="w-full flex flex-col items-center justify-center   md:basis-1/2 xl:basis-1/3 "
            >
              <div className="w-full  flex flex-col max-w-[500px]">
                <div className="flex  gap-3">
                  <div className="w-[16%] aspect-square bg-gray-300 flex items-center justify-center">
                    {slide.name.split(" ")[0][0] + slide.name.split(" ")[1][0]}
                  </div>
                  <div className="flex flex-col text-lg font-raleway font-bold gap-1 items-start">
                    {slide.name}
                    <img src="/logos/stars.svg" className="w-[130px]" />
                  </div>
                </div>
                <p className="text-gray-600 font-poppins mt-1.5">
                  {slide.date}
                </p>
                <p className="text-gray-600 font-poppins font-normal">
                  {slide.text}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-none  rounded-none " />
        <CarouselNext className="border-none   rounded-none " />
      </Carousel>
    </div>
  )
}

export default Testimonial
