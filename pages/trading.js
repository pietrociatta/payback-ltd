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
                Reclaim Your Funds <br className="hidden xl:flex" />
              </span>{" "}
              from Stock Market Scams
            </h1>
            <p
              className={`text-center   sm:text-[20px] text-[16px]  font-normal font-rubik`}
            >
              If you've been defrauded by stock market scammers, don't despair.
              Contact us now, and our team of experts will leverage their skills
              to retrieve your money.
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
              Avoid Stock Trading Scams: Reclaim Your Lost Funds
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px]  font-normal font-poppins`}
            >
              Dreaming of emulating Warren Buffett's success is natural—after
              all, who wouldn't aspire to such wealth? However, consistently
              making profitable investments is a daunting task. Unfortunately,
              scammers capitalize on this desire for financial success, offering
              deceptive investment opportunities that lack legitimacy.
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
            If you believe you've fallen victim to a fraudulent stock trading
            scheme, don't hesitate to reach out to us. We specialize in
            recovering lost funds and will diligently pursue restitution on your
            behalf.
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
            {`# How does the stock market operate?
Stock markets serve as centralized platforms where investors trade ownership (stocks) of various companies. These markets are typically heavily regulated, involving legally registered brokers to facilitate the buying and selling of stocks between sellers and buyers.

Examples of regulated stock exchanges include the US-based NYSE (New York Stock Exchange) and NASDAQ (National Association of Securities Dealers Automated Quotations). Accessing the stock market has become increasingly convenient, with barriers to entry continually diminishing.

However, this accessibility comes with risks. Investors are vulnerable to various types of investment scams and fraud in the stock market, highlighting the importance of conducting thorough due diligence to safeguard both money and investments.

# Is the stock market manipulated?
A common concern regarding the stock market is whether it's rigged. In the US, stock markets are regulated by government bodies such as the SEC (Securities and Exchange Commission) and non-government entities like FINRA (Financial Industry Regulatory Authority). Despite regulatory oversight, fraudulent practices still occur.

Instances of deliberate deception by companies, as seen in cases like ENRON and Valeant Pharmaceuticals, raise doubts about market integrity. Individuals may also perpetrate scams, such as Ponzi schemes exemplified by Bernie Madoff's notorious case.

Even regulated online brokers may fail in their fiduciary duties, as evidenced by Robinhood's actions during the GameStop controversy in early 2022. While risks exist and unscrupulous actors prey on investors, the majority of brokers and exchanges operate legitimately, ethically, and within the law.


### Key points
- Beware of enticing phrases like 'investment opportunity' or 'guaranteed return' – they often signal scams.
- Avoid high-pressure sales tactics and advertisements; conduct independent research instead.
- Conduct thorough due diligence and seek advice from registered financial advisors.
- Educate yourself on fundamental concepts such as Dow Theory, bull and bear markets, and conservative investing strategies.
- Focus on investing in established, successful companies known as blue-chip stocks.

# Types of Securities fraud
#### Ponzi Schemes:
Ponzi schemes are infamous for their historical prevalence in stock fraud. These schemes operate by using new investors' deposits to pay returns to earlier investors. Often, new participants are lured into the scheme through recommendations from existing investors. The perceived legitimacy and history of returns make Ponzi schemes appear credible, enabling them to persist for years or even decades. Bernie Madoff's scheme, lasting over two decades, exemplifies this.

Keywords or phrases associated with Ponzi schemes include 'guaranteed income,' 'offshore investment,' 'small, private hedge fund,' or any pitch promising unrealistic returns.

#### Pump and Dump:
Pump and Dump (P&D) scams are classic and persistent forms of stock fraud. Perpetrators encourage investors to buy specific stocks, often portraying them as potential 'multi-baggers' with enormous returns. These stocks are typically publicly traded on regulated exchanges like NASDAQ. The scheme involves artificially inflating the stock price through promotional campaigns, after which the scammers sell their shares at a significant profit, leaving late buyers at a loss.

#### Penny Stock Scams:
Penny stock scams, often intertwined with pump and dump schemes, entice investors with promises of massive returns from low-priced shares. While the term 'penny stock' doesn't necessarily denote stocks worth only a few cents, it typically refers to low-value stocks. These scams frequently involve stocks traded on over-the-counter (OTC) markets, bypassing regulated exchanges.

#### Stock Broker Fraud:
Although stock broker fraud has decreased with increased market regulation, it still occurs through deceptive practices. One common tactic is 'front-running,' where brokers execute trades for their benefit before fulfilling client orders. This unethical behavior exploits market movements driven by client orders, enabling the broker to profit unfairly.

#### Boiler Room Scams:
Boiler room scams, reminiscent of the movie 'The Wolf of Wall Street,' involve high-pressure sales tactics to persuade investors to buy overvalued stocks. While traditional call-center boiler rooms have evolved, modern iterations use online platforms, forums, social media, and fake webinars to lure unsuspecting investors.

#### Signal Providers:
Signal providers offer stock recommendations and trading signals for a subscription fee. While some may claim to offer valuable insights, many operate as fronts for pump and dump schemes. Free signal providers often engage in fraudulent activities, manipulating stock prices for personal gain.

Almost all signal providers are just nicer versions of scammers and fraudsters who are able to operate and peddle their service in a legal way. You may also come across signal providers who offer their services for free. Signal providers who provide a free service are almost always involved in Pump and Dump schemes. They entice new traders and investors into thinking that they’re getting a great deal by getting free information – when all you are really doing is acting as a liquidity tool to pump up a stock that the provider has every intention of dumping as soon as its price spikes higher.

Remaining vigilant and conducting thorough research are essential to avoid falling victim to these types of securities fraud.

# Can you get your money back from after a stock scam?
If you've fallen victim to stock market fraud or scams, there are avenues available to recover your lost funds. Despite the complexities involved, the regulated nature of the stock market offers opportunities for restitution.

At Payback, we specialize in recovering funds lost to fraudulent activity and stock market scams. With our extensive experience in collaborating with regulators and pursuing legal action against offenders, we're well-equipped to assist you. Our team conducts thorough analyses of each case to determine the most effective recovery strategy. Once assigned, your dedicated caseworker will focus on your case from start to finish. With numerous positive reviews and a high success rate, we're committed to helping you reclaim your assets.
`}
          </ReactMarkdown>{" "}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-[22px]">
                What is SEC Rule 10b-5?
              </AccordionTrigger>
              <AccordionContent>
                SEC Rule 10b-5 prohibits any act or practice that constitutes
                fraud or deceit in connection with the purchase or sale of
                securities. This rule covers a wide range of fraudulent
                activities, including the dissemination of false or misleading
                information and the omission of material facts. In essence, it
                aims to ensure transparency and integrity in securities
                transactions, safeguarding investors from deceptive practices in
                the stock market.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold text-[22px]">
                Is it illegal to manipulate stocks?
              </AccordionTrigger>
              <AccordionContent>
                When it comes to the regulatory and legal aspects of the stock
                market, few terms carry as much weight and ambiguity as
                "manipulation." Stocks are subject to manipulation by various
                entities, both large and small, in predominantly legal and
                ethical ways – this is inherent to the nature of the stock
                market. However, certain forms of stock manipulation cross the
                line into illegality, such as front running and naked short
                selling. Naked short selling involves shorting a stock without
                borrowing the underlying shares. A notable recent example
                occurred with GameStop in early 2021, where hedge funds were
                found to have shorted 130% of GameStop's float. In simpler
                terms, hedge funds had short positions on 30% more shares than
                were actually available in the market. This practice raises
                concerns about market integrity and fairness, highlighting the
                need for regulatory oversight and enforcement to combat illegal
                manipulation in the stock market.
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

export default Stock
