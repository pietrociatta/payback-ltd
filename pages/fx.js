import React, { useCallback, useEffect, useMemo, useState } from "react"
import Carousel from "@/components/Carousel"
import { File, RotateCcw, RotateCw, Shield, TextSearch } from "lucide-react"
import ReactMarkdown from "react-markdown"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Testimonial from "@/components/Testimonial"

const Forex = () => {
  const [headings, setHeadings] = useState([])

  // Define custom components with Tailwind CSS for markdown elements
  const markdownComponents = useMemo(
    () => ({
      h1: React.memo(({ node, ...props }) => {
        const id = props.id || generateId(props.children.toString())
        useEffect(() => {
          setHeadings((prevHeadings) => [
            ...prevHeadings,
            { id, title: props.children },
          ])
          return () => {
            setHeadings((prevHeadings) =>
              prevHeadings.filter((h) => h.id !== id)
            )
          }
        }, [id, props.children, setHeadings])
        return <h1 id={id} className="text-3xl font-bold my-4" {...props} />
      }),
      h2: React.memo(({ ...props }) => (
        <h2 className="text-2xl font-semibold my-3" {...props} />
      )),
      p: React.memo(({ ...props }) => (
        <p className="my-1 text-base" {...props} />
      )),
      ul: React.memo(({ ...props }) => (
        <ul className="list-disc list-inside my-4" {...props} />
      )),
      li: React.memo(({ ...props }) => <li className="ml-4" {...props} />),
      // Define more custom components as needed
    }),
    []
  )

  const generateId = useCallback((text) => {
    return String(text)
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
  }, [])

  return (
    <main
      className={`flex relative  min-h-screen text-white  flex-col items-center bg-cover bg-center  font-poppins`}
    >
      <div className="w-full relative  bg-primary  ">
        <div className="xl:max-w-7xl max-w-2xl  mx-auto items-center w-full px-5 md:px-0  gap-2 xl:py-20 pt-10 pb-14  flex xl:flex-row flex-col">
          <div className="items-center  w-full gap-4 flex flex-col  ">
            <h1 className="text-center  xl:text-[72px] md:text-[64px] text-[45px]  font-extrabold font-raleway xl:leading-[80px] leading-tight">
              <span className="text-secondary ">
                Get your money back <br className="hidden xl:flex" />
              </span>{" "}
              from Forex Trading Scams
            </h1>
            <p
              className={`text-center   sm:text-[20px] text-[16px]  font-normal font-rubik`}
            >
              If you’ve been ripped off by scammers, get in touch and{" "}
              <br className="hidden xl:flex" /> our team of experts will work to
              get your money back
            </p>
            <div className="w-full max-w-md col-span-2 bg-gray-100 pr-3 mt-4 flex">
              <select
                name="amount"
                id="amount"
                className="py-3 px-4 w-full bg-gray-100 outline-none  text-primary"
              >
                <option value="" disabled selected hidden>
                  Choose a scam type
                </option>
                <option value="Binary options">Binary options</option>
                <option value="Cryptocurrency">Cryptocurrency</option>
                <option value="Forex">Forex</option>
                <option value="Stock Trading">Stock Trading</option>
                <option value="Property scam">Property scam</option>
                <option value="Romance Scam">Romance Scam</option>
                <option value="ther scam">Other scam</option>
              </select>
            </div>
            <a
              href="/contact"
              className="bg-secondary text-center w-full max-w-md font-semibold text-primary px-14 py-3"
            >
              Get a free consultation
            </a>
          </div>
        </div>
        <img
          src="/logos/9.svg"
          alt=""
          className="w-[150px] xl:flex xl:absolute hidden right-20 -bottom-16"
        />
      </div>
      <div className="bg-[#f4f4f4] xl:hidden  text-primary flex items-center justify-center font-bold text-lg py-3 gap-2 w-full">
        <img src="/logos/8.svg" alt="" />
        <p>Money back guarantee</p>
      </div>
      <div className="w-full bg-white  xl:py-20 px-5 xl:px-0  py-10">
        <div className="w-full flex-col items-center flex pt-10 justify-center">
          <h1 className="text-[24px] font-raleway mb-10 text-center font-bold text-primary">
            Scams we helped our clients recover from
          </h1>
          <div className="max-w-3xl w-full h-full">
            <Carousel />
          </div>
        </div>
        <div className="xl:max-w-5xl max-w-4xl relative text-primary  mx-auto items-center justify-center w-full  gap-2   xl:py-20 pt-20 pb-10 flex  flex-col">
          <h1 className="font-raleway text-[40px] font-bold ">How it works</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
            <div className="flex flex-col gap-3 items-start justify-center p-6 shadow-lg">
              <h1 className="flex gap-2 items-center">
                <TextSearch size={30} />
                <span className="font-raleway text-[20px] font-bold">
                  Review your case
                </span>
              </h1>
              <p className="text-[16px] text-gray-600">
                Performing preliminary checks to assess whether the case can
                result in a substantial recovery, based on our experience.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center p-6 shadow-lg">
              <h1 className="flex gap-2 items-center">
                <File size={30} />
                <span className="font-raleway text-[20px] font-bold">
                  Gather the evidence
                </span>
              </h1>
              <p className="text-[16px] text-gray-600">
                Collecting all the information and documentation required to
                successfully pursue your case[*]
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center p-6 shadow-lg">
              <h1 className="flex gap-2 items-center">
                <Shield size={30} />
                <span className="font-raleway text-[20px] font-bold">
                  Confront the entities
                </span>
              </h1>
              <p className="text-[16px] text-gray-600">
                Systematically confronting the relevant entities that have
                facilitated the illicit transfer of your wealth.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center p-6 shadow-lg">
              <h1 className="flex gap-2 items-center">
                <RotateCw size={30} />
                <span className="font-raleway text-[20px] font-bold">
                  Get your money back
                </span>
              </h1>
              <p className="text-[16px] text-gray-600">
                We take pride in our track record and assure you that we’ll go
                to great lengths to get your money back.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-primary  overflow-hidden ">
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full px-5 xl:px-0  gap-2 xl:py-16 py-14 flex xl:flex-row flex-col">
          <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[50%] ">
            <h1 className="text-center flex flex-col xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
              Forex Scams: Recover Your Lost Funds
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px]  font-normal font-poppins`}
            >
              Falling victim to a forex trading scam can be a devastating
              experience. Our specialized team is committed to assisting those
              affected by such scams, aiming to recover lost funds through a
              detailed and proven process. If you suspect your forex trading
              losses were not just bad luck but the result of a scam, we're here
              to help you distinguish between legitimate losses and fraudulent
              activities, potentially recovering your investments.
            </p>
            <button
              type="submit"
              className="bg-secondary font-semibold text-primary px-14 mt-4 py-3"
            >
              Get a free consultation
            </button>
          </div>
          <div className="items-center w-full hidden    font-raleway text-opacity-0  xl:flex flex-col xl:w-[50%] p-5 ">
            <img src="/logos/15.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="xl:max-w-5xl max-w-4xl px-5 xl:px-0  mx-auto items-center w-full  gap-2 xl:py-28 py-10 flex xl:flex-row flex-col-reverse">
        <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
          <h1 className="text-center text-primary flex flex-col leading-tight xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
            Your money back guarantee
          </h1>

          <p
            className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
          >
            The fund recovery process can be a lengthy one and requires
            perseverance. Therefore it is vital that our clients are ready for
            it and trust us every step of the way. So if for any reason you are
            doubtful, you can ask for a full refund within the first 14 business
            days of the process.*
          </p>
          <button
            type="submit"
            className="bg-transparent border border-primary font-semibold text-primary px-20 mt-4 py-3"
          >
            *Read Terms and Conditions
          </button>
        </div>
        <div className="items-end w-full     font-raleway text-opacity-0  xl:flex flex-col xl:w-[45%] p-5 ">
          <img src="/logos/19.svg" alt="" className="w-[50%] mx-auto" />
        </div>
      </div>
      <div className="xl:max-w-5xl max-w-4xl px-5 md:px-0  text-primary mx-auto items-start w-full  gap-10   flex md:flex-row flex-col-reverse">
        <div className="md:w-[60%]">
          <div className=" bg-primary w-full h-[1px] flex  my-5" />
          <p className="text-left text-gray-600 font-poppins">
            Here at Payback Ltd, we want to make sure you know everything there
            is to know in regards to forex scams and fraud. While our primary
            job is to help recover financial loss for clients who have been
            scammed or being involved in some kind of fraud, ideally we want to
            help you avoid these scams in the first place. So be vigilant and
            knowledgeable.
          </p>
          <div className=" bg-primary  w-full h-[1px] flex  mt-5 mb-10" />
          <ReactMarkdown components={markdownComponents}>
            {`# Navigating the Complex World of Forex Trading

The forex (foreign exchange) market, being the largest and most liquid trading environment in the world, attracts a wide array of participants. However, its decentralized nature and significant leverage opportunities make it a prime target for fraudulent brokers and scam artists. Identifying a scam in the vast and complex forex market can be challenging, especially for newcomers who might mistake a scam for a mere trading setback.


# Our Commitment to Fund Recovery
Our fund recovery process is meticulous and requires patience and trust from our clients. We understand the intricacies of forex scams and have developed effective strategies to challenge and pursue the entities responsible for your financial losses. With our expertise, we offer a safety net: if, within the initial stages, you have doubts about the recovery process, we provide an option for a full refund, giving you peace of mind as we navigate through the recovery process together.


## Identifying Forex Trading Scams
Scams in the forex market can take many forms, from unrealistic leverage offers to opaque broker regulations. Here are key indicators of potential forex scams:

### Broker’s Leverage
- Be wary of brokers offering leverage significantly higher than the industry norm. This can be a sign of a broker willing to take undue risks with your money.


### Broker’s undisclosed parameters
-  Legitimate brokers clearly state their margin requirements. Avoid those who do not.

### Broker withdrawal rules
- You should have the freedom to withdraw funds from your account at any time. Restrictions on withdrawals are a red flag.

### Bonus Withdrawal Conditions
- Be cautious of brokers offering bonuses with unclear withdrawal conditions.

### Spread Manipulation
- Avoid brokers who are not transparent about their spread or who frequently increase it without warning.

### Signal Sellers
- Steer clear of those selling forex signals with promises of guaranteed profits or unrealistic success rates.

### Educational services
- Be wary of the myriad of free or paid trading education opportunities
- Many sites look incredibly professional and may even link certification organizations without their permission.
- Check for quality educational providers from the CMT Association (Certified Market Technicians Association), IFTA (International Fellowship of Technical Analysts), or STA (Society of Technical Analysts).
- Even by professional US brokers, a significant amount of the education provided is decades out of date.

### Broker Recommendations
-  Be skeptical of any service or individual pushing a specific broker, especially if they might benefit from referrals.
Recovering from a Forex Scam
- Recovering funds lost to a forex scam is challenging but not impossible, especially with professional assistance. At Payback LTD, we specialize in tackling the complexities of forex scam recovery, leveraging our expertise to help victims navigate the recovery process. Our approach is thorough, from initial case review to confronting fraudulent brokers and entities.

# Preventative Measures: Staying Informed
Recovering funds in the forex trading market is difficult. The difficulty increases when you use an unregulated broker. Adding to the problem is the near impossibility of recompense from the scammers who defrauded you.
`}
          </ReactMarkdown>{" "}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-[22px]">
                Is Forex a pyramid scheme?
              </AccordionTrigger>
              <AccordionContent>
                No – but there are scams and fraudsters that create pyramid
                schemes. This kind of behavior exists everywhere and is endemic
                to all traded financial markets. If you are looking for a broker
                and they’re offering to put you into a ‘team’ to build a
                network, odds are it’s a pyramid scheme. Read our related
                article: What is a pyramid scheme and how to avoid them
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold text-[22px]">
                Who regulates the forex markets?
              </AccordionTrigger>
              <AccordionContent>
                Various significant regulatory bodies/agencies worldwide oversee
                forex markets. In the United States, brokers fall under the
                regulation of the NFA (National Futures Association) and the
                CFTC (Commodity Futures Trading Commission) – with no oversight
                from FINRA (Financial Industry Regulatory Authority). In the
                United Kingdom, the primary regulatory authority is the FCA
                (Financial Conduct Authority). Within the European Union, each
                member state has its own regulatory agency–with uniform
                standards established by the Markets in Financial Instruments
                Directive (MiFID).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="md:w-[40%] md:sticky  top-28">
          <nav>
            <h2 className="font-bold font-raleway mb-4 text-[26px]">
              Table of contents
            </h2>
            <ul className="flex flex-col gap-3">
              {headings.map(({ id, title }) => (
                <li key={id}>
                  <a
                    className="font-poppins hover:text-primary text-gray-600  text-[18px] font-medium"
                    href={`#${id}`}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="bg-primary mt-8 p-6 flex flex-col items-start gap-3 text-white">
            <h2 className="font-bold text-xl">Let's get your money back!</h2>
            <p>
              If you’ve lost money to scammers, contact us now and we’ll work
              with you to get your money back!
            </p>
            <a
              href="/contact"
              className="bg-secondary text-center w-full max-w-md font-semibold text-primary px-14 py-3"
            >
              Get a free consultation
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-primary my-20  overflow-hidden ">
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full px-5 xl:px-0  gap-2 xl:py-16 py-14 flex xl:flex-row flex-col">
          <div className="items-center justify-center xl:items-center w-full gap-4 flex flex-col xl:w-full ">
            <h1 className="text-center flex flex-col xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
              Let's get your money back!
            </h1>
            <p
              className={`text-center max-w-lg   text-[16px]  font-normal font-poppins`}
            >
              If you've been ripped off by scammers, get in touch and our team
              of experts will work to get your money back
            </p>
            <div className="w-full max-w-md col-span-2 bg-gray-100 pr-3 flex">
              <select
                name="amount"
                id="amount"
                className="py-3 px-4 w-full bg-gray-100 outline-none  text-primary"
              >
                <option value="" disabled selected hidden>
                  Choose a scam type
                </option>
                <option value="Binary options">Binary options</option>
                <option value="Cryptocurrency">Cryptocurrency</option>
                <option value="Forex">Forex</option>
                <option value="Stock Trading">Stock Trading</option>
                <option value="Property scam">Property scam</option>
                <option value="Romance Scam">Romance Scam</option>
                <option value="ther scam">Other scam</option>
              </select>
            </div>
            <a
              href="/contact"
              className="bg-secondary text-center w-full max-w-md font-semibold text-primary px-14 py-3"
            >
              Get a free consultation
            </a>
          </div>
        </div>
      </div>
      <div className="w-full text-primary flex items-center justify-center xl:pb-32 pb-28 flex-col">
        <h1 className="text-center flex flex-col xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
          Testimonials
        </h1>
        <div className=" flex items-center justify-center w-full">
          <Testimonial />
        </div>
      </div>
    </main>
  )
}

export default Forex
