import React, { useEffect, useState } from "react"
import Carousel from "@/components/Carousel"
import { File } from "lucide-react"
import ReactMarkdown from "react-markdown"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const BinaryOptions = () => {
  const [headings, setHeadings] = useState([])

  // Define custom components with Tailwind CSS for markdown elements
  const markdownComponents = {
    h1: ({ node, ...props }) => {
      // Extract or generate a unique ID for this heading
      const id = props.id || generateId(props.children)
      // Add the heading to the list
      useEffect(() => {
        setHeadings((prevHeadings) => [
          ...prevHeadings,
          { id, title: props.children },
        ])
        // Cleanup function to remove the heading when the component unmounts
        return () => {
          setHeadings((prevHeadings) => prevHeadings.filter((h) => h.id !== id))
        }
      }, [id, props.children])

      return <h1 id={id} className="text-3xl font-bold my-4" {...props} />
    },
    h2: ({ node, ...props }) => (
      <h2 className="text-2xl font-semibold my-3" {...props} />
    ),
    p: ({ node, ...props }) => <p className="my-1 text-base" {...props} />,
    ul: ({ node, ...props }) => (
      <ul className="list-disc list-inside my-4" {...props} />
    ),
    li: ({ node, ...props }) => <li className="ml-4" {...props} />,
    // Add more custom components as needed for other markdown elements
  }

  function generateId(text) {
    return String(text)
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
  }

  return (
    <main
      className={`flex relative  min-h-screen text-white  flex-col items-center bg-cover bg-center  font-poppins`}
    >
      <div className="w-full  bg-primary  ">
        <div className="xl:max-w-7xl max-w-2xl  mx-auto items-center w-full  gap-2 xl:py-20  flex xl:flex-row flex-col">
          <div className="items-center  w-full gap-4 flex flex-col  ">
            <h1 className="text-center  xl:text-[72px] text-[64px]   font-extrabold font-raleway xl:leading-[80px] leading-tight">
              <span className="text-secondary ">
                Get your money back <br className="hidden xl:flex" />
              </span>{" "}
              from Binary options scam
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
                <option value="1000">$1000</option>
                <option value="2000">$2000</option>
                <option value="3000">$3000</option>
                <option value="4000">$4000</option>
                <option value="5000">$5000</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-secondary w-full max-w-md font-semibold text-primary px-14 py-3"
            >
              Get a free consultation
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-white  py-20">
        <div className="w-full flex-col items-center flex pt-10 justify-center">
          <h1 className="text-[24px] font-raleway mb-10 text-center font-bold text-primary">
            Scams we helped our clients recover from
          </h1>
          <div className="max-w-3xl w-full h-full">
            <Carousel />
          </div>
        </div>
        <div className="xl:max-w-5xl max-w-4xl relative text-primary  mx-auto items-center justify-center w-full  gap-2   py-20 flex  flex-col">
          <h1 className="font-raleway text-[40px] font-bold ">How it works</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
            <div className="flex flex-col gap-3 items-start justify-center p-6 shadow-lg">
              <h1 className="flex gap-2 items-center">
                <File size={30} />
                <span className="font-raleway text-[20px] font-bold">
                  Title
                </span>
              </h1>
              <p className="text-[16px] text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quia, voluptate, quae nesciunt, doloribus quod consequuntur
                tempora quos quas quidem.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center p-6 shadow-lg">
              <h1 className="flex gap-2 items-center">
                <File size={30} />
                <span className="font-raleway text-[20px] font-bold">
                  Title
                </span>
              </h1>
              <p className="text-[16px] text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quia, voluptate, quae nesciunt, doloribus quod consequuntur
                tempora quos quas quidem.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center p-6 shadow-lg">
              <h1 className="flex gap-2 items-center">
                <File size={30} />
                <span className="font-raleway text-[20px] font-bold">
                  Title
                </span>
              </h1>
              <p className="text-[16px] text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quia, voluptate, quae nesciunt, doloribus quod consequuntur
                tempora quos quas quidem.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center p-6 shadow-lg">
              <h1 className="flex gap-2 items-center">
                <File size={30} />
                <span className="font-raleway text-[20px] font-bold">
                  Title
                </span>
              </h1>
              <p className="text-[16px] text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quia, voluptate, quae nesciunt, doloribus quod consequuntur
                tempora quos quas quidem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-primary  overflow-hidden ">
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-20 flex xl:flex-row flex-col">
          <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[50%] ">
            <h1 className="text-center flex flex-col xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
              Binary Options Scams: Recover Your Lost Funds
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px]  font-normal font-poppins`}
            >
              Thousands of fraudulent binary options brokers appear every year
              and it’s our mission to fight back. If you’ve been scammed by your
              Broker, please contact us as soon as possible. The sooner we
              confront them, the sooner we will be able to get your money back.
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
      <div className="xl:max-w-5xl max-w-4xl   mx-auto items-center w-full  gap-2 xl:py-28 py-10 flex xl:flex-row flex-col-reverse">
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
            At Payback Ltd we fight hard to assist our clients who have become
            victims of binary options scams. Our recovery experts will endeavor
            to recover your losses and right the wrongs you've experienced at
            the hands of nefarious individuals and companies who have acted in a
            fraudulent fashion. In addition, our informative guides will help
            you to avoid such scams, therefore preparing you for possible future
            attacks.
          </p>
          <div className=" bg-primary  w-full h-[1px] flex  mt-5 mb-10" />
          <ReactMarkdown components={markdownComponents}>
            {`
# What are binary options?

Binary options are a type of financial product classified as an exotic option. Binary options trading may seem like a new speculative market, but they’ve existed since 1974. They were created by one of the largest derivatives markets globally, CBOE (Chicago Board Options Exchange). It wasn’t until 2008 that binary options became primarily available to the public, and many entities copied the original CBOE asset type listing.

Binary options are a type of option that allows you to guess whether the option expires in the money – that’s it. Some unregulated binary options brokers allow for guessing on out of the money outcomes. A simple yes or no bet is made, hence the name binary. Contemporary binary options have expiration times between a week to a few minutes, with the majority of modern binary options platforms specializing in under one-day expirations.

# Common binary option types

There are three primary binary call/put options:

1. **High/Low Binary Option**
   - You bet whether the price will close above a specific price or below a certain price.

2. **Touch/no-Touch**
   - You bet whether the price will reach or not reach a defined price level at least once before the option expires. It does not matter if it closes above or below the price, only that it reached that price level before expiration.

3. **Boundary**
   - You bet that price will not reach a certain level above or below the current traded price. For example, you want to make a bet that over a certain period of time, XYZ won’t trade above $2.00 and won’t trade below $1.00 – if prices stay between these two values, you win.

## Key points

- Binary options are an extremely volatile and questionable speculative market with both the EU and UK banning binary options in the past three years.
- Very few regulated binary options brokers exist, increasing risk to your money.
- Companies like Payback can help recover money for binary options fraud victims.
- Do your own due diligence and research each binary options trading platform as well as find reviews from various users.
- Never risk more than you can afford to lose.

# Are binary options a scam or legit?

Binary options are overwhelmingly a scam and an illegitimate market. When you consider the various legal differences between the US, UK, and EU financial regulations, you may be surprised to find out that binary options markets are legal in the US but are now illegal in the EU and UK. In fact, the bans imposed on binary options markets in the EU and UK are very recent – 2018 for the former and 2019 for the latter.

A large reason for the banning of binary options in the EU was due to the dubious nature of CySEC (Cyprus Securities and Exchange Commission) broad granting of national regulatory approval to a large number of unethical binary options brokers.

The US’s high regulatory environment makes participation in binary options marginally safer from a compliance standpoint, but it does not remove the inherent too high-risk nature of binary options. There is perhaps no market in the realm of financial markets that professional speculators and investors more deride than the binary options market. Know that binary options are more akin to gambling than speculation and that it is a true zero-sum instrument.

## Binary options robot scams

If you are a day trader or an aspiring day trader, familiar with some of the largest speculative and high-frequency trading markets in the world like forex or futures, you are probably familiar with the prevalence of robots (commonly known as ‘bots’). Binary options robots are often sold as a way to manage your account. This involves sharing your account information or an API to allow an individual or automated system to execute trades on your behalf. Binary option robot scams include many high-pressure sales tactics, false statements on the return on investment and success rates, along with graphics depicting a wealthy lifestyle as a result of using their system.

## Binary options software scams

Software scams in the binary options space are common and fall right into the same realm as robots. Depending on the software used for binary options (most are often done via web browser), some software is touted as ‘advanced artificial intelligence (AI)’ or ‘machine learning software,’ leading you to believe that it is an extremely sophisticated algorithm that will generate substantial gains. Many software providers report high returns - the returns the software provider is making is from selling his/her software to others, not on the success of the software in the binary options market. As with robot scams, be wary of the sales tactics and false lifestyle imagery.

## Binary options trading scams

The number of trading scams in the binary options space is substantial. Because some of the largest regulatory agencies around the world have banned binary options, many former (and new) brokers have had to reestablish their businesses in nations where there is little to no real regulation. The broad bans of binary options have resulted in thousands of unregistered brokers all around the globe. Brokers within the binary options space have questionable to outright fraudulent data feeds. It’s not uncommon to see bids and ask fluctuate violently within the final micro-seconds resulting in significant losses, sometimes on both sides of the trade! You can avoid some of the trading scams by using only regulated brokers, although very few are legitimate.

## Binary options signal scams

Signal scams are hands down the most prevalent form of financial fraud and scams in today’s markets. For the binary options market, signal scams involve an individual or company that offers to sell you trade ideas (signals) in exchange for a monthly fee. The signals are provided via text, email, or via their website. The most popular version of providing signals in most markets is through the chat platform Telegram. As with any financial instrument, it is best to avoid signal providers – they are only interested in making money from you as a subscriber.

# Scammed and lost money in Binary Options? Here’s what you can do next!

If you’ve found yourself to be the unfortunate victim of a binary options scam, it may seem like you have no recourse except to just take the loss and move on. Don’t let bad actors get away with stealing your money! There are ways to go after individuals and entities that have taken your money. We at Payback are experienced in the recovery of funds from bad actors like binary options fraudsters.

Some of the methods we utilize and have success with are chargebacks – working with you and your card company to make an authentic and valid report of fraud. Payback works closely with you, and you will work with the same caseworker throughout the process. Fill out our Success Calculator to get started and check the testimonial and reviews for yourself!

## How to avoid Binary Options trading scams

- Only use regulated brokers – for the US, the regulatory agency(s) for binary options fall under the CFTC (Commodity Futures Trading Commission) and the SEC (Securities and Exchange Commission). Legitimate brokers will openly disclose their license number and cite the national regulatory agency and website.
- Do your due diligence – read user reviews across various sources. Be wary of sites that are specific to reviewing only binary options brokers – they are more than likely just shell sites meant to push you to a particular broker or a few select brokers.
- If the broker is unregulated, check where the broker is based – it’s good to know what nation the business is headquartered in.
- If you do want to risk your capital in the binary options markets, test the broker’s data yourself. Vet the broker and ensure that data feeds are authentic and that there are no

 abnormal price changes near expiry.
`}
          </ReactMarkdown>{" "}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-[22px]">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold text-[22px]">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
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
            <button
              type="submit"
              className="bg-secondary w-full max-w-md font-semibold text-primary px-14 py-3"
            >
              Get a free consultation
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-primary my-20  overflow-hidden ">
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-20 flex xl:flex-row flex-col">
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
                <option value="1000">$1000</option>
                <option value="2000">$2000</option>
                <option value="3000">$3000</option>
                <option value="4000">$4000</option>
                <option value="5000">$5000</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-secondary w-full max-w-md font-semibold text-primary px-14 py-3"
            >
              Get a free consultation
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BinaryOptions
