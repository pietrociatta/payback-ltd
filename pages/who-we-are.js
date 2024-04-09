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
            Payback Ltd stands as a premier chargeback firm on a global scale.
            With a focus on online trading scams including Forex, Binary
            Options, Crypto, and more, we boast one of the highest success rates
            in the industry. Renowned for our straightforward approach to
            confronting scammers, we tirelessly strive to reclaim our clients'
            funds.
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
            Amir Geva co-founded Payback in 2017, leveraging over a decade of
            experience in the Risk-Management & Chargeback sectors. With his
            expertise, Amir spearheads our team in combatting fraudulent
            entities and individuals, ensuring the protection of our clients'
            interests.
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
            Being a prominent player in the realm of scam debt recovery has
            earned us numerous adversaries within the criminal landscape of
            financial scams. To safeguard our team, we maintain discretion
            regarding the identities of those invaluable contributors aiding our
            mission to retrieve your stolen assets.
            <br />
            <br />
            Within our ranks, we boast a cadre of key personnel dedicated to
            ensuring the efficiency and client-centricity of our operations.
            Every member of the Payback Ltd team possesses a deep understanding
            and experience within our domain, rendering them highly adept at
            their respective roles.
            <br />
            <br />
            From Customer Support to our legal and forensic accounting experts,
            every individual you encounter within our organization is equipped
            to assist you. Whether it's initiating the evidence-gathering
            process or confronting the perpetrators to secure your funds, our
            team stands ready to support you at every stage of the journey.
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
            We are a globally renowned recovery company with a history dating
            back to 2010. Initially established as a risk management firm, we
            transitioned into a scam recovery service in 2017. Over the years,
            we have successfully retrieved tens of millions of dollars for
            thousands of clients, assisting them in reclaiming funds pilfered by
            scammers. Additionally, Payback stands out as one of the rare debt
            recovery services proficient in recuperating funds from
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
              href="/contact"
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
              onClick={() => router.push("/binary")}
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
              onClick={() => router.push("/crypto")}
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
              onClick={() => router.push("/fx")}
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
              onClick={() => router.push("/binary")}
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
              onClick={() => router.push("/binary")}
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
              onClick={() => router.push("/binary")}
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
              onClick={() => router.push("/binary")}
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
