import React, { forwardRef, useState } from "react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

export const CustomInput = forwardRef(({ value, onChange, ...rest }, ref) => (
  <input
    ref={ref}
    value={value}
    className="bg-transparent outline-none w-full px-4"
    onChange={onChange}
  />
))

const Contactus = () => {
  const [value, setValue] = useState()

  return (
    <div className="flex flex-col w-full px-5 xl:px-0">
      <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-5 flex xl:flex-row flex-col-reverse">
        <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
          <h1 className="text-center flex flex-col leading-tight xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
            About Us
          </h1>

          <p
            className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
          >
            Payback Ltd is one of the leading chargeback firms worldwide.
            Specializing in online trading scams (Forex, Binary Options, Crypto,
            etc), we pride ourselves on having one of the highest success rates
            in the industry. We are also known for our no-nonsense approach to
            confronting scammers in the effort to bring our clients’ money back.
          </p>
        </div>
        <div className="items-end w-full     font-raleway text-opacity-0  xl:flex flex-col xl:w-[45%] p-5 ">
          <img src="/logos/50.svg" alt="" className="w-[50%] mx-auto" />
        </div>
      </div>
      <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-5 flex xl:flex-row flex-col">
        <div className="items-end w-full     font-raleway text-opacity-0  xl:flex flex-col xl:w-[45%] p-5 ">
          <img src="/logos/51.svg" alt="" className="w-[50%] mx-auto" />
        </div>
        <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
          <h1 className="text-center flex leading-tight flex-col xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
            Our CEO
          </h1>
          <p
            className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
          >
            Amir Geva co-founded Payback in 2017. With over 10 years of
            experience in the Risk-Management & Chargeback industries, Amir
            leads our team in the battle against fraudulent entities and
            individuals.
          </p>
        </div>
      </div>
      <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-5 flex xl:flex-row flex-col-reverse">
        <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
          <h1 className="text-center flex flex-col leading-tight xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
            Our Team
          </h1>

          <p
            className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
          >
            Being a hugely successful operator in the scam debt recovery field
            has led us to have a great many enemies in the criminal world of
            financial scams. To protect our team, we cannot disclose the names
            and identities of those who provide invaluable assistance in our
            effort to get your stolen money and assets back.
            <br />
            <br />
            Among our team, we have a selection of key personnel who ensure the
            running of our operation is highly efficient and customer
            orientated. All our employees at Payback Ltd have a grounding and
            experience in the world in which we inhabit, this makes them
            incredibly effective at their jobs.
            <br />
            <br />
            From Customer Support to Lawyers & Forensic Accountants, anyone you
            reach within our company is ideally placed to assist you. Starting
            with the initial process of gathering the evidence, all the way to
            confronting the scammers and getting your money back, our team will
            be on your side every step of the way.
          </p>
        </div>
        <div className="items-end w-full     font-raleway text-opacity-0  xl:flex flex-col xl:w-[45%] p-5 ">
          <img src="/logos/52.svg" alt="" className="w-[50%] mx-auto" />
        </div>
      </div>
      <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-5 flex xl:flex-row flex-col">
        <div className="items-end w-full     font-raleway text-opacity-0  xl:flex flex-col xl:w-[45%] p-5 ">
          <img src="/logos/53.svg" alt="" className="w-[50%] mx-auto" />
        </div>
        <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
          <h1 className="text-center flex leading-tight flex-col xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
            Our Results
          </h1>
          <p
            className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
          >
            We are the largest recovery company worldwide and have been in
            operation since 2010. Starting as a risk management firm before
            operating as a scam recovery service since 2017. We have recovered
            tens of millions of dollars for thousands of clients, helping them
            get back money stolen by scammers. Furthermore, Payback is one of
            the few debt recovery services that successfully recover money from
            cryptocurrency scams.
          </p>
        </div>
      </div>
      <div className="w-full bg-cover bg-primary  text-white  overflow-hidden ">
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
      <div className="w-full bg-cover bg-white text-primary   overflow-hidden ">
        <div className="xl:max-w-6xl px-5 xl:px-0 flex-col gap-6 max-w-4xl  mx-auto items-center w-full   xl:pt-20 xl:pb-20 py-20 flex ">
          <h1 className="font-raleway font-bold text-[40px] text-center">
            The types of scams we can help you with
          </h1>
          <div className="w-full grid xl:grid-cols-4 mt-5  grid-cols-2 ">
            <div
              onClick={() => router.push("/binary-options")}
              className="flex group hover:bg-primary hover:text-white  flex-col border border-primary gap-2 items-center justify-center py-6"
            >
              <img
                src="/logos/24.svg"
                alt=""
                className="w-[15%] group-hover:invert "
              />
              <p className="font-raleway text-[22px] font-bold">
                Binary Options
              </p>
            </div>{" "}
            <div
              onClick={() => router.push("/cryptocurrency")}
              className="flex flex-col group hover:bg-primary hover:text-white border border-primary gap-2 items-center justify-center py-6"
            >
              <img
                src="/logos/25.svg"
                alt=""
                className="w-[15%] group-hover:invert "
              />
              <p className="font-raleway text-[22px] font-bold">
                Cryptocurrency
              </p>
            </div>
            <div
              onClick={() => router.push("/forex")}
              className="flex flex-col border  group hover:bg-primary hover:text-white   border-primary gap-2 items-center justify-center py-6"
            >
              <img
                src="/logos/26.svg"
                alt=""
                className="w-[15%] group-hover:invert"
              />
              <p className="font-raleway text-[22px] font-bold">Forex</p>
            </div>
            <div
              onClick={() => router.push("/romance")}
              className="flex flex-col border  group hover:bg-primary hover:text-white   border-primary gap-2 items-center justify-center py-6"
            >
              <img
                src="/logos/27.svg"
                alt=""
                className="w-[15%] group-hover:invert"
              />
              <p className="font-raleway text-[22px] font-bold">Romance</p>
            </div>
            <div
              onClick={() => router.push("/binary-options")}
              className="flex flex-col border  group hover:bg-primary hover:text-white   border-primary gap-2 items-center justify-center py-6"
            >
              <img
                src="/logos/28.svg"
                alt=""
                className="w-[15%] group-hover:invert"
              />
              <p className="font-raleway text-[22px] font-bold">
                Property Scams
              </p>
            </div>
            <di
              onClick={() => router.push("/binary-options")}
              className="flex flex-col border  group hover:bg-primary hover:text-white   border-primary gap-2 items-center justify-center py-6"
            >
              <img
                src="/logos/29.svg"
                alt=""
                className="w-[15%] group-hover:invert"
              />
              <p className="font-raleway text-[22px] font-bold">
                Credit card phishing
              </p>
            </di>
            <div
              onClick={() => router.push("/binary-options")}
              className="flex flex-col border  group hover:bg-primary hover:text-white   border-primary gap-2 items-center justify-center py-6"
            >
              <img
                src="/logos/30.svg"
                alt=""
                className="w-[15%] group-hover:invert"
              />
              <p className="font-raleway text-[22px] font-bold">
                Stock trading
              </p>
            </div>
            <div
              onClick={() => router.push("/binary-options")}
              className="flex flex-col border  group hover:bg-primary hover:text-white   border-primary gap-2 items-center justify-center py-6"
            >
              <img
                src="/logos/31.svg"
                alt=""
                className="w-[15%] group-hover:invert"
              />
              <p className="font-raleway text-[22px] font-bold">Other scams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
