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

const Cryptocurrency = () => {
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
              from Cryptocurrency scams
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
              Retrieve Your Funds from Cryptocurrency Scams
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px]  font-normal font-poppins`}
            >
              If you've been victimized by a cryptocurrency scam, our
              experienced team is here to assist you in recovering your
              investments. When scammers have deceived you, reaching out to us
              is the first step toward reclaiming your funds.
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
            Assurance of Money Back
          </h1>

          <p
            className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
          >
            The path to retrieving scammed funds can be intricate and demands
            persistence. It's essential that our clients are prepared for this
            journey and trust us at every step. Should you harbor any doubts, we
            offer the option for a complete refund within the first 14 business
            days of the recovery process.
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
            The first step to protecting yourself from frauds or scams is to be
            knowledge of the threats. But hope is not lost, if you have been
            scammed. Read on to learn about the most common cryptocurrency scams
            and how we can help.
          </p>
          <div className=" bg-primary  w-full h-[1px] flex  mt-5 mb-10" />
          <ReactMarkdown components={markdownComponents}>
            {`# Cryptocurrency Scams: An Avenue for Recovery
Despite regulatory efforts to tame it, the cryptocurrency industry thrives, presenting both legitimate opportunities and fertile ground for scams. These scams often masquerade as genuine investment chances due to the public's limited understanding of digital currencies. If you've been caught in a cryptocurrency scam, reaching out to us is critical. Though recovering funds from cryptocurrency scams poses significant challenges, we promise an honest evaluation of your case and will exert our utmost efforts to recuperate your money.

# Understanding Cryptocurrency: A New Asset Class
Cryptocurrency has rapidly ascended as an intriguing and unpredictable financial asset class, offering unprecedented investment opportunities but accompanied by considerable risks. With its roots in the aftermath of the Great Recession, Bitcoin emerged as a decentralized digital currency designed to offer a stable value and serve as a medium of exchange, independent of central bank manipulations.

# Prominent Cryptocurrencies
## Ethereum: A leading blockchain platform that introduced smart contracts, creating a foundation for countless cryptocurrencies.

## Ripple: Known for its ambition to overhaul the SWIFT system, Ripple's journey offers a cautionary tale about the potential for cryptocurrency fraud.


## Cryptocurrency Scams: A Detailed Look

The advent of cryptocurrency has revolutionized the financial industry, but with innovation comes vulnerability to fraud. Here are the common cryptocurrency scams you should be aware of:

## Bitcoin mining scams
Cryptocurrencies like Bitcoin are produced through mining, which requires substantial computational power to solve complex algorithms and validate transactions on the blockchain. Mining scams typically promise participants a stake in mining operations in exchange for an investment. However, these schemes often lack the necessary infrastructure, leading to losses for investors when promised returns fail to materialize.

## Bitcoin wallet scams
A digital wallet is essential for storing, sending, and receiving cryptocurrencies. Wallet scams often trick users into revealing their private keys, granting scammers access to steal funds directly from their wallets. Other variations include the promotion of fraudulent wallet apps designed to siphon funds from unsuspecting users.

## Pump and Dump scams
This type of scam involves artificially inflating the price of a cryptocurrency through false and misleading positive statements to sell off the cheaply purchased currency at a higher price. Once the scammers have dumped their overvalued currency, the price crashes, leaving investors with significant losses.

## Pyramid Schemes
Cryptocurrency has given a new platform for these age-old investment scams, where returns for older investors are paid through the contributions of new investors. Eventually, when new investments stop, the scheme collapses, leaving most participants at a loss.

## ICO Scams/Exit Scams
An ICO is a fundraising method that trades future crypto coins in exchange for cryptocurrencies of immediate, liquid value. Exit scams occur when the creators of an ICO collect the funds and disappear without distributing the coin or developing the promised blockchain project.

## High-Interest Return Scams
These scams lure investors with the promise of high returns on their cryptocurrency investments through staking or other means. While some high-yield investment programs are legitimate, many are not, and distinguishing between the two can be challenging.

## Cryptocurrency Exchange Scams
With the proliferation of cryptocurrencies, numerous new exchanges have been established. Some of these exchanges are fraudulent, designed to disappear with users' funds. Others lack proper security measures, leading to hacks and the theft of cryptocurrency holdings.

Each type of scam preys on the excitement around the rapidly evolving cryptocurrency market, exploiting gaps in knowledge and due diligence. Being aware of these scams is the first step in protecting yourself and your investments.

# Fall prey to a cryptocurrency scam? how you can get your money back
If you've fallen victim to a cryptocurrency scam, hope is not lost. Global regulators are increasingly vigilant about crypto fraud. Many have successfully reclaimed Bitcoin and other cryptocurrencies. Starting with a fund recovery service like Payback, which specializes in this field, can be an effective first step. They'll work closely with you, employing every strategy to recover your funds.

# How to avoid cryptocurrency scams
To safeguard against cryptocurrency scams, scrutinize the credentials and backgrounds of entities involved, use regulated exchanges, and seek advice from financial experts before investing. Don't be swayed by the allure of quick riches; genuine opportunities are built on transparency, not grand promises. Opt for exchanges that offer insured deposits and cold storage for digital wallets to enhance security. Lastly, for long-term investments, consider using a cold-storage hardware wallet to minimize the risk of theft.

## Crypto Scam FAQ
In the realm of Bitcoin and cryptocurrencies, vigilance is paramount due to the presence of scammers looking to exploit the burgeoning investment space. As Bitcoin introduces a new class of assets, it's essential to navigate these opportunities with caution to safeguard against potential fraud.

Learn how to get bitcoin back from a scammer`}
          </ReactMarkdown>{" "}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-[22px]">
                Can you get scammed on Bitcoin?
              </AccordionTrigger>
              <AccordionContent>
                Bitcoin, as an emerging asset class, presents unique
                opportunities but also risks, with scammers aiming to exploit
                the enthusiasm surrounding cryptocurrencies. It's crucial to
                approach Bitcoin investments with caution, recognizing the
                potential for scams in this innovative yet volatile space.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold text-[22px]">
                How can you spot a Bitcoin scammer?
              </AccordionTrigger>
              <AccordionContent>
                Identifying a Bitcoin scammer involves recognizing certain red
                flags. These include the use of high-pressure sales tactics,
                creating a sense of urgency for a "once-in-a-lifetime"
                opportunity, and presenting unrealistic promises of high
                returns. Scammers often create scenarios that seem too good to
                be true to lure potential victims.
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

export default Cryptocurrency
