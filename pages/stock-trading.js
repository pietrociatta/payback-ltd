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

const Stock = () => {
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
              from Stock Market Scams
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
              href="/contact-us"
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
              Stock Trading Scams: Recover Your Lost Funds
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px]  font-normal font-poppins`}
            >
              We all dream of becoming the next Warren Buffett. Who wouldn’t
              want to be one of the richest men in the world. We would all like
              to make the right investment each and every time, but that’s next
              to impossble to achieve. Scammers prey on those seeking to make a
              quick buck and they will look to lure us in with shady investment
              opportunities that have no basis in reality. If you suspect you’ve
              lost money due to a fraudulent stock trading scam then contact us
              now and we’ll work to get your money back.
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
            Our experts at Payback Ltd make it a top priority to help our
            clients recover funds after they have been a victim to stock market
            scams. We want to raise awareness of the various types of stock
            fraud and how to best protect yourself. Armed with knowledge you can
            project your stock investments from fraud and scam.
          </p>
          <div className=" bg-primary  w-full h-[1px] flex  mt-5 mb-10" />
          <ReactMarkdown components={markdownComponents}>
            {`# How does the stock market work?
Stock markets are a form of centralized exchange where investors buy and sell ownership (stocks) of various companies. Most stock markets worldwide are highly regulated and involve legal, nationally registered, and regulated brokers to facilitate the transfer of stock from a seller to a buyer.

Examples of regulated stock exchanges are the US-based NYSE (New York Stock Exchange) and the NASDAQ (National Association of Securities Dealers Automated Quotations). Our ability to access the stock market has never been more effortless, and the barriers to entry continue to fall every year.

But this ease of access is not without its dangers. We are all susceptible to different types of investment scams in the investment and stock world, so it is incumbent on us to do our due diligence and protect ourselves and our money from becoming victims of stock fraud and stock scams.

# Is the stock market rigged?
One of the biggest questions and, for many, beliefs about the stock market is that it is rigged. Is it? The US’s stock markets are regulated by various government and non-government entities such as the SEC (Securities and Exchange Commission) and FINRA (Financial Industry Regulatory Authority). Both the SEC and FINRA have overlapping legal responsibilities that monitor the stock exchanges and the various brokers that facilitate the buying and selling of stocks. However, that doesn’t mean we can avoid all fraud and scams.

Current and past companies intentionally deceive individual investors and/or participate in illegal accounting and business practices, such as ENRON and Valeant Pharmaceuticals. Some fraudulent individuals create ‘too good to be true’ advertisements that result in Ponzi schemes – the worst actor in history being Bernie Madoff.

You even have regulated online stock brokers that do not practice their fiduciary responsibilities on behalf of their clients – a most recent example would be Robinhood during the early 2022 GameStop debacle. While there are obvious risks in the stock market and plenty of people looking to take advantage of you, the overwhelming and vast majority of brokers and exchanges operate in a legitimate, ethical and legal way.

### Key points
- Avoid persons or entities that approach you with phrases like ‘investment opportunity,’ ‘guaranteed return’ or anything else that sounds too good to be true.
- Avoid high-pressure sales tactics and advertisements – if you didn’t look for the company on your own, best to avoid.
- Do your own due diligence – trust yourself, avoid listening to others for advice on what to buy and sell. Speak with a registered financial advisor.
- Learn the basics – Learn Dow Theory 101 and identify what a bear market is and what a bull market is. Learn about conservative and traditional investing. Learn about investing in leaders and proven successful stocks like those in the conventional basket of blue-chip stocks.

# Types of Securities fraud
#### Ponzi Schemes
Perhaps the most well-known version of a stock fraud scheme in history is a Ponzi scheme. A Ponzi scheme involves paying investment profits to old investors with the deposits of new investors. When a new investor joins the system, it is most often at the advice of another investor unknowingly part of the Ponzi scheme. What makes Ponzi schemes so successful is the perceived legitimacy and history of returns. Ponzi schemes can exist for years or even decades.

In the case of Bernie Madoff, his Ponzi scheme and fraud empire lasted for over 20 years. He was so successful at this fraud that his firm even became one of the leading market makers of the stock market, and he was a former chairman of the NASDAQ! Ponzi schemes eventually fail because there is never enough new investor money to keep paying off old investors. Some of the keywords or phrases with a Ponzi scheme are ‘guaranteed income,’ ‘offshore investment,’ ‘small, private hedge fund,’ ‘secret invite-only fund,’ or any other form of ‘too good to be true’ sales pitch.

#### Pump and Dump
Pump and Dump (sometimes referred to as P&Ds) scams are perhaps one of the classic and persistent forms of stock fraud that exist. What makes pump and dump scams challenging to detect is that they can often be done in a legitimate fashion. A pump and dump is essentially an event where you are targeted to buy a stock. The stock is sometimes referred to as a ‘multi-bagger,’ indicating a massive return on investment. You may also read about how the stock is an emerging leader in its sector/industry, how it could be the next Apple or Amazon.

The stocks used in pump and dump are often publicly traded and listed on a regulated exchange like the NASDAQ and bought through a regulated stockbroker. The stock price is almost always between $1.00 to $10.00; how a pump and dump works is straightforward. The scammers purchase the cheap stock early then begins to campaign on its behalf and drum up support and enthusiasm. As new investors buy, the price starts to spike up and accelerate – it is at that point the originators of the scam sell and exit their positions at a significant profit and at the expense of yourself and everyone else who bought too late.

#### Penny Stock Scams
Along with pump and dump scams, penny stock scams are among the oldest and most well-known forms of stock fraud. Penny scams and pump and dumps often work hand in hand with pump and dump scams utilizing penny stocks. Penny stock scams are often touted as ways to invest in new companies via their stock at very low-priced shares with the promise of massive returns in the future – the definition of a get rich quick scheme. The phrase ‘Penny Stock’ doesn’t necessarily mean that the stock is worth pennies – today, it generally means a very low-value stock.

However, modern penny stock scams have increasingly used stocks that are not available from the major regulated exchanges like the NYSE. Instead, these penny stocks are found on the ‘Pink Sheets’ or OTC markets (Over The Counter). OTC securities are not always available from regulated stockbrokers as the securities themselves must be exchanged between the company selling their stock to you directly or through another non-centralized broker/exchange.

#### Stock Broker Fraud
Stock broker fraud is, thankfully, one of the forms of fraud that has decreased as stock markets have become more regulated. However, that doesn’t mean it doesn’t happen. The days of a stockbroker taking the old physical paper securities or deposited cash and running away are long gone. Stockbrokers who wish to do wrong by the clients today now have to resort to more shady methods.

One of the most prevalent (and, sometimes legal) forms of stockbroker fraud is an activity known as ‘front-running.’ Let’s say you were to call your brokerage firm and you wanted to buy 100 shares of XYZ. Your broker, knowing that this would likely move the market, instead places an order himself before executing your order. The broker essentially enters the market early, for himself, before completing your order and allows your order to drive up the value of his earlier entry.

The major problem with front-running is it is nearly impossible to detect. With the amount of high-frequency-trading (HFT) that occurs every second, front-running is a type of fraud that only diligent and active regulators can determine. There are other tactics that stockbrokers will employ that are not necessarily fraudulent but unethical. Some types of behavior are encouraging high-frequency day trading by new investors, undisclosed appropriation of dividends, and unclear rules or fees associated with shorting.

#### Boiler Room Scams
If you have seen the movie ‘The Wolf of Wallstreet’ then you have seen what a boiler room is

. Jordan Belfort’s (Wolf of Wallstreet) company employed hundreds of ‘brokers’ who called prospective investors to buy stock in individual companies – often overvalued but cheap companies. The ‘broker’ used high energy sale tactics that made the potential investor fear they would be missing out on an opportunity of a lifetime (FOMO = Fear Of Missing Out).

While the days of call-center type boiler rooms like those in The Wolf of Wall Street no longer exist, that doesn’t mean the concept has gone away. It has evolved. Instead of boiler rooms, we now have subreddits (the website Reddit), private/public forums and message boards, emails, text alerts, fraudulent websites, fake webinars, automated social media generators on Twitter, Facebook, and StockTwits (Twitter version for stock traders). Modern boiler room operations are now more prevalent than their old counterparts, and they continue to grow and become more sophisticated.

#### Signal Providers
Signal providers are companies or individuals which want you to subscribe to their frequent notifications which will give you a stock to buy or short, what the stock price entry is, where to take profit and where to place a stop loss or trailing stop. While this kind of service sounds fantastic and appears like a good deal, signal providers are only after one thing: your subscription, and is another one of the potential stock scams.

Almost all signal providers are just nicer versions of scammers and fraudsters who are able to operate and peddle their service in a legal way. You may also come across signal providers who offer their services for free. Signal providers who provide a free service are almost always involved in Pump and Dump schemes. They entice new traders and investors into thinking that they’re getting a great deal by getting free information – when all you are really doing is acting as a liquidity tool to pump up a stock that the provider has every intention of dumping as soon as its price spikes higher.

# Can you get your money back from after a stock scam?
If you have lost money due to a scam or fraud in the stock market, you have options. With the stock market so regulated and scrutinized, thankfully, there are ways for you to recover money. But the process is exhaustive and prohibitively challenging that many become frustrated and decide not to pursue monetary recovery.

At Payback, we specialize in the recovery of funds due to fraudulent activity and stock market scams. We have experience in working with regulators and litigating against bad actors in the stock market space. Our representatives create an exhaustive and detailed analysis of what happened to you to determine the best way to get your money back. Then we assign a caseworker that focuses on your case throughout the process. We have a myriad of positive reviews and an extremely high positive expectancy rate in the field.`}
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
            <a
              href="/contact-us"
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
              href="/contact-us"
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

export default Stock
