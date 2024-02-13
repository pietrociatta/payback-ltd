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
              Cryptocurrency Scams: Recover Your Lost Funds
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px]  font-normal font-poppins`}
            >
              No matter how hard governments try to regulate it, the
              Cryptocurrency industry is still alive and kicking. Since the
              topic is quite ambiguous to the general public, frauds use it to
              scam people out of their money, with what looks like a genuine
              investment opportunity. If you fell into a Cryptocurrency scam,
              please contact us now. Although it is extremely difficult to
              recover money from Crypto scams, we will give you our honest
              evaluation of your case, and if possible, we will give it our best
              effort to recover your money
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
            The first step to protecting yourself from frauds or scams is to be
            knowledge of the threats. But hope is not lost, if you have been
            scammed. Read on to learn about the most common cryptocurrency scams
            and how we can help.
          </p>
          <div className=" bg-primary  w-full h-[1px] flex  mt-5 mb-10" />
          <ReactMarkdown components={markdownComponents}>
            {`# What is cryptocurrency?
Cryptocurrency has quickly become one of the most fascinating and volatile financial asset classes in the markets. As an investment, Bitcoin has had one of the highest returns in history. Bitcoin was created when the first significant impacts of the Great Recession were felt. Bitcoin was designed to be a source of value and a medium of trade, a decentralized virtual currency with a truly fixed supply to combat the rampant money printing by central banks. Bitcoin can be decentralized because of the blockchain technology and the distributed ledger.

# Three important cryptocurrencies
## Bitcoin
Bitcoin is by far the most important type of digital currency, not just in name recognition but by institutional adoption in the finance world. Bitcoin regularly fluctuates between representing 55 to 65% of the total cryptocurrency market capitalization. As an investment vehicle, Bitcoin received its first Futures contract by the CBOE (Chicago Board Options Exchange) and the CME (Chicago Mercantile Exchange) in December 2017. Perhaps the most important event for Bitcoin as an investment vehicle occurred in July 2020 when the US OCC (Office of the Comptroller of the Currency) granted all chartered banks in the US ability to provide custody services for cryptocurrencies.

## Ethereum
Ethereum is a second-generation blockchain and cryptocurrency. It is also the second most valuable cryptocurrency in the world. Ethereum is the most important ‘altcoin.’ Altcoins are every cryptocurrency that is not Bitcoin. Where Bitcoin is a source of value, Ethereum is more of a decentralized network platform – upon which thousands of cryptocurrency types are created using smart contracts. Ethereum has a market cap roughly valued at 1/3rd of Bitcoin. Ethereum is only the second cryptocurrency in the US to be granted a futures contract from the CME – which occurred in February 2022.

## Ripple
Ripple has been one of the more popular cryptocurrencies between 2018 and 2020. Ripple was intended to become a replacement for the SWIFT system for transfers payments. However, Ripple is an excellent example of cryptocurrency fraud. While Ripple used to command the third highest market cap globally for all crypto, it came under heavy scrutiny by the US SEC in late 2020. While litigation remains ongoing, Ripple is charged with an unregistered securities offering, insider trading, and investors’ deceiving. Ripple’s chief officers regularly told the public they were bullish on Ripple while dumping billions on the open market. Ripples officers also sold large ‘blocks’ of Ripple to cryptocurrency investors at deep discounts – who in turn sold those blocks on the open market for a guaranteed and quick profit. Ripple helped to make the public aware of the dangers of a virtual currency scam.

## Key points
- Cryptocurrencies are a brand new asset class that provides enormous investment opportunities – but substantial risks as well.
- Beware promises of quick wealth.
- Do your own due diligence and investigate wallets, websites, and information.
- Avoid risking money you can’t afford to lose.

# Is cryptocurrency a scam?
Cryptocurrencies are the Wild West of investing and speculation. It is vital to work with a virtual currency platform that is reputable and – ideally – regulated. Thankfully, in 2020, there has been ample time for reputable cryptocurrency exchanges to develop. Perhaps the most well known, respected, and trusted is Coinbase. Other notable and trustworthy crypto exchanges are Bitstamp, Kraken, Binance, and Bittrex. But don’t take just our word for it! Do your due diligence and make that regular habit when it involves cryptocurrencies!

## Bitcoin mining scams
Mining is how cryptocurrencies like Bitcoin are created, a process known as Proof of Work. Mining requires significant computational power to complete highly sophisticated algorithms to record transactions on the distributed ledger. When ‘blocks’ are mined and added to the ‘chain,’ the miner is rewarded with Bitcoin. Because mining requires time, resources, power, and infrastructure, many scams seek individuals to ‘invest’ in mining projects, a form of passive income. Thankfully, this scam is less common with the advent of 3rd generation blockchains like Cardano that use a staking system versus mining – no massive power or infrastructure requirements and allows individuals the opportunity to make passive income much easier than with the legacy mining processes.

## Bitcoin wallet scams
Bitcoin (and all cryptocurrency) is held in digital wallets. Wallets have two keys – a private key and a public key. A public key is basically like aan address to send something to. A private key is what gives permission to spend or send your cryptocurrency. Bitcoin wallet scams are a common scam that targets new entrants to the cryptocurrency space. Because cryptocurrency is held in digital wallets, many cryptocurrency fraud schemes have come into the space encouraging you to utilize their wallets. Some scams involve asking you to send your private key – don’t!

## Pump and Dump scams
A scam that is almost endemic in the cryptocurrency space are pump and dump schemes. Similar to what happens to stocks, pump and dump scams involve an individual or entity acquiring a large amount of an alt-coin and then pushing positive news (fake or real) to encourage as many people to buy as possible. Social media platforms are the primary outlet that pump and dump operators utilize. Once the price has moved up, the operators sell at the top and then let everyone else suffer the consequences of rapidly falling prices.

## Pyramid Schemes
If you want to learn an excellent example of a pyramid scheme in the cryptocurrency space, look up OneCoin. Pyramid schemes in cryptocurrencies are the same as Ponzi schemes in any other market; the only difference here is that the fraudsters are now capitalizing on the growth of cryptocurrencies to target you and make you believe you’ll become wealthy overnight.

## ICO Scams/Exit Scams
ICO stands for Initial Coin Offering. This is similar to the IPO (Initial Public Offering) process – but without the traditional regulatory process. Between 2016 and late 2018, the cryptocurrency market was slammed with, literally, tens of thousands of new altcoins entering the market, all promising to be the next Bitcoin or Ethereum. Some of these new altcoins generated millions of initial investment from individuals, and when prices spiked, the owners sold. This is similar to a pump and dump, but it’s an exit scam when it involves an ICO. While the industry is still very new, it has matured some since 2008. It’s crucial that you do your due diligence and investigate, thoroughly, any new cryptocurrency. This is especially true if you came across it on social media.

## High-Interest Return Scams
A growing trend in the cryptocurrency space, specifically the decentralized finance (DeFi) space, is high yield interest rates. There are many legitimate platforms that allow you to deposit or ‘stake’ various cryptocurrencies and reward you with a high-interest rate. It is not uncommon to see regulated and legitimate projects offer up to 10% interest on stablecoins (essentially cash) or up to 15% for Bitcoin and Ethereum deposits! But be very, very cautious about any promise of return higher than 10% to 15%. And you must read the ‘fine print’ of even legitimate and regulated entities. There are some projects that require you to leave your deposit for up to 90-days in order to earn the highest yield.

## Cryptocurrency Exchange Scams
When Bitcoin and others became a tradable market, there were few exchanges that were available. As time went on, more and more exchanges popped up. But not all of these cryptocurrency exchanges were legitimate. Many were fronts that looked and appeared to be a place to buy and sell

 cryptocurrency. The owners of the exchange would wait until a significant amount of people deposited and even began to trade on their platform until the owners would essentially pull the plug and take your cryptocurrency investments. Along with cryptocurrency exchange scams is the lack of security of some cryptocurrency exchanges. The most infamous example of this occurred in 2014 when Mt. Gox (which processed over 70% of all traded Bitcoin) had 850,000 Bitcoins stolen (millions of dollars). Regarding fake cryptocurrency exchanges, there are some that use fake volume to artificially inflate the trading volume and liquidity of the exchange. While this activity is still prevalent, a form of self-policing in the industry exists with the website coinmarketcap.com classifying every cryptocurrency exchange as those with honest reported volume or dishonest volume.

# Fall prey to a cryptocurrency scam? how you can get your money back
If you’ve been the victim of cryptocurrency or bitcoin scams, don’t be disheartened. Due to the vast number of scams and the number of people hurt over the past five years, regulators worldwide have set their sights on any hint of impropriety in the crypto space. And take comfort in knowing that many people have recovered Bitcoin and other cryptocurrencies – nothing is truly anonymous. A great first step is to utilize our fund recovery company: Payback, by filling out our contact request form. We will assign someone to your case who will work with you throughout this challenging process and try every possible method to get your money back.

# How to avoid cryptocurrency scams
- Verify websites and research the background of people involved in the cryptocurrency. Avoid anything that seems vague or is not clear. Don’t be taken in by flashy and sophisticated web sites. Like people, it’s what’s on the inside that counts.
- Use reputable and regulated exchanges.
- Consults experts in the space or speak with your financial advisor before investing any money in cryptocurrencies.
- The temptation to become wealthy overnight in this space is big. Don’t fall victim to false promises and flashy sales pitches.
- When looking for a cryptocurrency exchange to buy and sell cryptocurrency, make sure it is regulated and licensed. Additionally, make sure that your deposits are insured against theft or loss. Any reputable and legitimate exchange will have insurance as well as store their digital wallets in cold storage (off line).
- Be careful about leaving cryptocurrency on any exchange for any long period of time. If you have purchased cryptocurrency in order to trade it, then leaving it on an exchange is safe. But if you plan on investing and holding certain cryptocurrencies over a period of years, consider purchasing a cold-storage hardware wallet.

## Crypto Scam FAQ
Scammers and fraudsters exist everywhere, and this is especially true when it comes to Bitcoin. As a brand new asset class, be very careful when it comes to opportunities in this investment space.

Learn how to get bitcoin back from a scammer`}
          </ReactMarkdown>{" "}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-[22px]">
                Can you get scammed on Bitcoin?
              </AccordionTrigger>
              <AccordionContent>
                Scammers and fraudsters exist everywhere, and this is especially
                true when it comes to Bitcoin. As a brand new asset class, be
                very careful when it comes to opportunities in this investment
                space.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold text-[22px]">
                How can you spot a Bitcoin scammer?
              </AccordionTrigger>
              <AccordionContent>
                Bitcoin scammers are just like any other scammer. They will use
                high-pressure tactics, make you feel like you are missing out on
                a once in a lifetime opportunity, and show you false promises of
                riches and results. They will make it all seem too good to be
                true.
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

export default Cryptocurrency
