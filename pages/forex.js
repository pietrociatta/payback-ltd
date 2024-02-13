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
              Forex Scams: Recover Your Lost Funds
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px]  font-normal font-poppins`}
            >
              The Forex industry is one of the scammer’s favorite grounds. Since
              the industry is generally known as a legitimate investment option,
              it is very hard for the average person to differentiate the scam
              brokers, from the legitimate ones. Usually, most people don’t even
              know they’ve been scammed, they just think they had “A bad trading
              day”. If you feel that the way you lost your money trading, is
              more than just a “bad day”, contact us now. If your Broker is a
              fraud, we might get your money back.
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
            {`# What is forex trading?
Forex is the single largest traded market globally, with up to five trillion traded each day and is considered decentralized because there is no central processor for trades– in other words, there is no entity that acts as a central exchange like the NASDAQ or the NYSE. Instead, orders are completed by millions of traders using millions of various forex brokers around the world.

Foreign currency trading is one of the most leveraged markets in the world as well. In the US, regulations limit a person to 50:1 leverage. In other countries, they have zero limits on leverage. It is not uncommon to see some non-US brokers offer 1000+:1. Due to these factors and a few others which we will discuss, this is why scams can be so prevalent within the foreign exchange market.

# Is forex trading a scam?
In the investment world, forex is the wild-west of traditional financial instruments. However, most of the participants are massive institutions like banks that help companies manage cross-currency rates for payroll or buying goods. But it is by far the most accessible and cheapest investment for anyone to make. A futures broker may require a $5,000 minimum investment; whereas many firms in the foreign exchange markets require as little as $1. Day trading stocks in the US requires a $25,000 minimum balance; forex does not require this.

The ease of access to significant leverage, and the fact it is open 24 hours a day all make it the most appealing market. But this also attracts many of the bad actors. Some countries regulate forex markets – but not always to the same degree as the US. Many countries have little to no regulation and allow anyone to open a brokerage account in their country. There are many, many bad brokers around the globe – so it’s often best to stick with brokers that are based in the US, EU, or UK.

**Read more:** [Is forex trading legit or a scam?](#)

## Key points
- Using a regulated broker ensures that: your money is safe, the data and information provided by the broker are compliant with industry standards, and the broker is operating legitimately and ethically.
- The forex trading space is rife with services and individuals bent on defrauding new traders. Avoid bad brokers, false education programs, performance history lies, and fraudulent automated trading systems.
- If you have been the victim of a scam in the forex space – there are options available to you, provided by our specialist at Payback LTD.

# How to spot a forex scam
The scams that exist in the investment world are many. One of the hardest things for new and aspiring traders to overcome is the vast amount of wrong information, bad actors and blacklisted scam brokers trying to take advantage of you.

Here are some of the different types of forex trading scams:

### Broker’s Leverage
- The US and EU (more recently) have limits of around 50:1.
- If you see a broker offering 500:1, 1000:1, or anything beyond a conservative amount, stay away. This is a predatory action.
- Avoid any broker that is not clear about margin requirements.

### Broker’s undisclosed parameters
- Avoid requirements for a minimum Stop Loss or Profit Target
- Avoid requirements where you must have a trade open for a certain amount of time before you can exit.
- Avoid anyone that doesn’t allow you to create your own risk management profile.

### Broker withdrawal rules
- You should be able to withdraw your money from your brokerage account at will – but some don’t allow this.
- Avoid minimum requirements for volume traded before you can withdraw.
- Avoid anyone that doesn’t disclose their withdrawal rules.
- If a broker advertises a bonus on deposits, make sure that you can withdraw the bonus within a reasonable amount of time – it should be clear what the requirements are for you to withdraw the bonus.

### Broker’s spread
- The spread is the difference between the Bid (buying) and the Ask (selling) – This should be clearly defined or be avoided.
- Avoid brokers that don’t warn you of regular increases in the spreads, such as at the end of the day or during certain holidays.

### Signal Sellers
- Forex signal sellers are individuals who want to sell you signals or advice – they want to tell you what pairs to buy or short, when to exit for profit, where to put your stops, etc.
- Avoid people or companies that promise or allude to a guarantee of profit. Avoid entities that promise unbelievable returns like: “90% win rate!” or “188 winning trades, 12 losing trades!” or “MASSIVE GAINS.”

### Broker spam
- Avoid sites that have side advertisements and banners promoting a single broker.
- Avoid anyone or anything that recommends a single broker
- People who promote a single broker generally have some agreement with them. Many non-US brokers offer various incentives for people to find new customers. They may offer the seller a cut of your deposit or a rebate on any trade you make.
- If someone tells you about a broker or if a site is promoting a broker – ask if they have an IB (introducing broker) agreement with them– this must be disclosed in the US when asked.

### Educational services
- Be wary of the myriad of free or paid trading education opportunities
- Many sites look incredibly professional and may even link certification organizations without their permission.
- Check for quality educational providers from the CMT Association (Certified Market Technicians Association), IFTA (International Fellowship of Technical Analysts), or STA (Society of Technical Analysts).
- Even by professional US brokers, a significant amount of the education provided is decades out of date.

### Automated Trading or Artificial Intelligence (Bots or Robots)
- It is best to avoid anyone selling forex robot trading systems
- AI systems have existed since the 1990s for retail investors– but nearly 100% of them fail.
- The current buzzword for investment scams is ‘AI.’ Avoid anyone that claims they use Artificial Intelligence. There are only two known private hedge funds that have anything close to authentic self-learning AI. They are not selling their bots to anyone.
- Think about this logically: If you created a profitable AI (virtually a money printing machine), would you ever tell anyone about it? Would you sell it? Probably not – your advantage disappears when others have access to that kind of a tool.
- Automated Trading systems are a common way fraud is committed by forex scammers.

### Flashy advertising or false lifestyles
- Avoid any service or individual who has ‘high lifestyle’ imagery, such as girls in bikinis on a yacht, Lamborghini or Ferrari in the background, massive mansion or house, or a private jet.
- A good rule to follow for any investment or speculative endeavor: if it looks or sounds too good to be true, it probably is.

**Learn more:** [How to avoid forex trading scams](#)

# How do I recover funds from a forex scam?
Recovering funds in the forex trading market is difficult. The difficulty increases when you use an unregulated broker. Adding to the problem is the near impossibility of recompense from the scammers who defrauded you.

But we at Payback LTD have a proven track record of success in helping investors who have been the victims of a scam or fraud. We are a regulated fund recovery company that focuses on some of the more complicated financial investments: forex, binary options, cryptocurrency, and stocks.

In addition to our professional forex recovery services, our team

 of experts focuses on customer outreach and we attempt to mitigate the damage that fraudulent actors have caused to our clients.

Contact us today for a free consultation and our professionals will work with you throughout the entire process to get you maximum returns!`}
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

export default Forex
