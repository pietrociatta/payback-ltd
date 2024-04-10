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
            To gain insight into the operations and fund recovery procedures at
            Payback Ltd, we've compiled a list of commonly asked questions
            below.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold w-full text-[20px]">
              How long does an average case take to complete?
            </AccordionTrigger>
            <AccordionContent>
              While our dedicated team strives to resolve your case efficiently,
              the duration can vary depending on its complexity. Typically, this
              process spans from 3 months to a year on average due to the unique
              nature of each case.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold text-[20px]">
              What is the cost of pursuing a case via Payback LTD?
            </AccordionTrigger>
            <AccordionContent>
              Our pricing structure consists of two components. Firstly, there
              is a fixed fee of 10% of the total amount lost, payable upfront at
              the commencement of our engagement. The minimum fee for our
              services is $1,500. Secondly, upon successful recovery, an
              additional commission of 10% is charged. Rest assured, there are
              no hidden fees added at any stage of the process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold text-[20px]">
              Why don't you charge me at the end of the process only?
            </AccordionTrigger>
            <AccordionContent>
              Due to the extensive investigative work, processing, and
              successful resolution involved in each case, we charge a fixed fee
              to cover the legal services provided and operational costs
              incurred. This fee is necessary to initiate any action on your
              behalf and ensures our ability to deliver results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-semibold text-[20px]">
              Where is Payback LTD based?
            </AccordionTrigger>
            <AccordionContent>
              Payback LTD is located in Ramat Gan, .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-semibold text-[20px]">
              How do I know that Payback LTD isn’t a scam?
            </AccordionTrigger>
            <AccordionContent>
              We encourage you to review testimonials from our clients to
              ascertain our legitimacy and reputation. Additionally, we are
              registered with the i justice department, and our staff can
              provide you with the necessary credentials upon request.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default faq
