import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faq = () => {
  return (
    <div className="w-full bg-white  xl:py-20 py-10">
      <div className="xl:max-w-7xl max-w-4xl px-5 xl:px-0 relative  mx-auto items-center w-full  gap-2    flex flex-col">
        <div className="items-center  w-full max-w-4xl mx-auto bg-[#fff] font-poppins  flex flex-col  p-5 ">
          <h1 className="text-primary xl:text-[56px] mb-10 text-[45px] leading-none text-center font-raleway font-bold">
            Payback - How Does It Work?
          </h1>
          <p className="text-gray-400 text-center  max-w-lg">
            In order to better understand how Payback Ltd works, and the systems
            we have in place for the recovery of your funds, you’ll find below a
            series of frequently asked questions.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold w-full text-[20px]">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold text-[20px]">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default faq
