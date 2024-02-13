import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// dynamic import
import dynamic from "next/dynamic"
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const VideoTestimonial = () => {
  const videos = [
    {
      url: "https://www.youtube.com/embed/qRfOakNl-uA?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
    {
      url: "https://www.youtube.com/embed/lRlr2T39NTc?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
    {
      url: "https://www.youtube.com/embed/0op67uvszLA?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
    {
      url: "https://www.youtube.com/embed/bvnyHiGfCrg?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
    {
      url: "https://www.youtube.com/embed/X8L05PZWEJg?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
    {
      url: "https://www.youtube.com/embed/gb_x-DltH_Y?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
  ]

  return (
    <div className="w-[90%]  flex flex-col items-center justify-center ">
      <h1 className="font-raleway font-bold  leading-none text-[40px] mb-16 mt-14 text-center">
        Video reviews
      </h1>
      <Carousel
        opts={{
          align: "center",
          duration: 10,
          slidesToScroll: 1,
          loop: true,
        }}
        className=" relative w-full  "
      >
        <CarouselContent>
          {videos.map((video, index) => (
            <div className="w-full mx-6 h-max flex  flex-col items-center justify-center  ">
              <ReactPlayer
                url={video.url}
                style={{
                  maxWidth: "400px",
                  maxHeight: "100%",
                }}
              />
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-none  rounded-none " />
        <CarouselNext className="border-none   rounded-none " />
      </Carousel>
    </div>
  )
}

export default VideoTestimonial
