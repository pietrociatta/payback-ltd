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
              How long does an average case take to complete?
            </AccordionTrigger>
            <AccordionContent>
              Although our experienced team will look to complete your case
              (recover a substantial part if not all of your lost funds) as soon
              as possible, each case is unique. On average this process takes
              from 3 months to a year.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold text-[20px]">
              What is the cost of pursuing a case via Payback LTD?
            </AccordionTrigger>
            <AccordionContent>
              The total cost of the services is comprised of two parts: First,
              we charge a fixed-fee of 10% (of the total amount lost) at the
              beginning of the engagement for services rendered in the relevant
              engagement with each customer (Minimum possible fee: $1,500).
              Second, a further 10% is charged as a commission when the recovery
              is successfully completed. No other hidden fees will be added at
              any time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold text-[20px]">
              Why don't you charge me at the end of the process only?
            </AccordionTrigger>
            <AccordionContent>
              Each case requires a significant amount of man-hours to
              investigate, process, and bring to successful completion. We
              charge a fixed-fee to cover the general legal services rendered
              and operational costs that we incur, hence the need to do so ahead
              of any action we undertake on your behalf.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-semibold text-[20px]">
              Where is Payback LTD based?
            </AccordionTrigger>
            <AccordionContent>
              Payback LTD is located in Ramat Gan, Israel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-semibold text-[20px]">
              How do I know that Payback LTD isn’t a scam?
            </AccordionTrigger>
            <AccordionContent>
              We believe that a question like that is best answered by the
              company’s clients. We invite you to check out the hundreds of
              great reviews by our clients to verify that we are a legitimate
              and reputable organization. We are also registered with the
              Israeli justice department, as well as this our staff will happily
              forward you the relevant credentials.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default faq
