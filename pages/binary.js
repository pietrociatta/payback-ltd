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

const BinaryOptions = () => {
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
                Binary Options Scams: <br className="hidden xl:flex" />
              </span>{" "}
              Recover Your Money Losses
            </h1>
            <p
              className={`text-center   sm:text-[20px] text-[16px]  font-normal font-rubik`}
            >
              Combating binary options scams is a core mission, emphasizing
              immediate action against fraudulent brokers. Contacting us
              promptly enhances the chances of recovering your funds, leveraging
              our expertise to confront and address the scam effectively.
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
              Binary Options Scams: Recover Your Money Losses
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px]  font-normal font-poppins`}
            >
              Combating binary options scams is a core mission, emphasizing
              immediate action against fraudulent brokers. Contacting us
              promptly enhances the chances of recovering your funds, leveraging
              our expertise to confront and address the scam effectively.
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
            Get your money back
          </h1>

          <p
            className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
          >
            Our guarantee ensures that if you have any hesitations about the
            fund recovery process, which can be complex and lengthy, you have
            the option to request a full refund within the first 14 business
            days. This commitment is part of our dedication to trust and client
            satisfaction throughout the recovery journey.
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
            At Payback Ltd, we're committed to helping victims of binary options
            scams by striving to recover their losses and addressing the fraud
            they've faced. Our team of recovery experts works tirelessly against
            deceitful individuals and companies. Additionally, we provide
            educational resources to empower our clients, helping them identify
            and avoid future scams, enhancing their preparedness against
            potential threats.
          </p>
          <div className=" bg-primary  w-full h-[1px] flex  mt-5 mb-10" />
          <ReactMarkdown components={markdownComponents}>
            {`
# What are binary options?

Binary options are exotic financial instruments originating from the CBOE in 1974, becoming widely available in 2008. They function on a simple premise, allowing traders to bet on whether an asset's price will be above or below a certain point at expiration, essentially a "yes or no" wager. Modern binary options vary in expiration times, with many platforms focusing on short-term durations, typically less than a day.

# Common binary option types

There are three primary binary call/put options:

1. Binary options trading includes several types of contracts, each based on the prediction of an asset's price movement. 
2. The High/Low option involves predicting whether the asset's price will be higher or lower than a certain point at expiration. 
3. The Touch/No-Touch option is about whether the asset's price will touch a specific level before expiry. 

Lastly, the Boundary option requires a bet that the asset's price will stay within a certain range, not exceeding or falling below predetermined levels.

## Key points

Binary options trading is highly speculative and risky, leading to bans in the EU and UK. The scarcity of regulated brokers adds to the financial risk. Companies like Payback specialize in assisting victims of binary options fraud. It's crucial to thoroughly research platforms and read user reviews before engaging in trading. Always invest only what you can afford to lose to minimize potential financial damage.

# Are binary options a scam or legit?

Binary options trading is considered highly speculative and risky. While legal in the US under strict regulations, binary options have been banned in the EU and UK due to their association with scams and the high risk involved. The market's reputation is marred by its gambling-like nature and the ethical concerns surrounding certain regulatory bodies. It's seen as a zero-sum game, often compared unfavorably with professional investing or speculation.

## Binary options robot scams

Binary options robots, often pitched to day traders involved in speculative markets such as forex, are marketed as tools for managing your trading account. These robots, requiring access to your account or an API, claim to execute trades on your behalf. However, the sales tactics for these robots can be aggressive, promising unrealistic returns and success rates. They may also use enticing visuals to suggest a lavish lifestyle achievable through their use, all of which are common red flags for scams in this space.

## Binary options software scams

Binary options software, often labeled as using 'advanced AI' or 'machine learning,' promises significant returns. However, many claims about these sophisticated algorithms are misleading, with the actual profit coming from the sale of the software rather than its performance in the market. Like robot scams, it's important to question aggressive marketing, high returns promises, and depictions of luxurious lifestyles.

## Binary options trading scams

The binary options market is rife with scams, partly due to regulatory bans pushing brokers to less-regulated countries. This shift has led to a proliferation of unregistered brokers worldwide, often providing unreliable or fraudulent data feeds. Rapid, last-moment fluctuations in bids and asks can result in significant, sometimes double-sided, losses. A potential safeguard is to deal exclusively with regulated brokers, though they are rare and not entirely risk-free.

## Binary options signal scams

Signal scams are particularly widespread in financial markets, including binary options, where they involve selling trade signals for a fee. These signals are often distributed through various communication channels like Telegram. Generally, it's advisable to steer clear of signal providers, as their primary motive is to profit from subscription fees rather than offering genuinely profitable trading insights.

# Next Steps After Losing Money to Binary Options Scams

Being scammed by binary options can feel like a dead-end, but there's hope. At Payback, we're seasoned in reclaiming funds from binary options fraudsters. Our process involves collaborating with your card company for chargebacks, supported by a dedicated caseworker for your case. Start by assessing your situation with our Success Calculator, and gain confidence from the experiences shared in our testimonials.

## How to avoid Binary Options trading scams

For safer binary options trading in the U.S., ensure brokers are regulated by the CFTC or SEC, and verify their license details. Exercise due diligence by consulting diverse user reviews, and be skeptical of exclusive binary options review sites, which might not be objective. Consider the broker's location and personally test their data for authenticity, watching for unusual price shifts near trade expirations to avoid potential scams.
`}
          </ReactMarkdown>{" "}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-[22px]">
                Are Binary Options Legal in the US?
              </AccordionTrigger>
              <AccordionContent>
                Yes, binary options are legal in the United States, subject to
                regulation by both the Commodities Futures Trading Commission
                (CFTC) and the Securities and Exchange Commission (SEC). These
                agencies ensure that the trading practices and platforms
                operating within the U.S. adhere to strict financial regulations
                and standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold text-[22px]">
                How do binary options robots work?
              </AccordionTrigger>
              <AccordionContent>
                Binary options robots operate primarily in two ways: one
                involves an executable software that trades automatically based
                on pre-set parameters, and the other requires sharing your
                trading account information with the robot, allowing it to trade
                on your behalf.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold text-[22px]">
                What is binary options trade copying?
              </AccordionTrigger>
              <AccordionContent>
                Binary options trade copying links your account to a 'master'
                account, allowing your trades to mirror those of the master
                account automatically. This service operates similarly to robots
                and signals, offering a hands-off approach to trading by
                replicating the trading strategies and decisions of experienced
                traders directly in your account.
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

export default BinaryOptions
