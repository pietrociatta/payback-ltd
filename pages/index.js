import { ChevronDown, File, Mail, MapPin, Menu } from "lucide-react"
import { useState } from "react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { forwardRef } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Carousel from "@/components/Carousel"

export const CustomInput = forwardRef(({ value, onChange, ...rest }, ref) => (
  <input
    ref={ref}
    value={value}
    className="bg-transparent outline-none w-full px-4"
    onChange={onChange}
  />
))

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const [value, setValue] = useState()
  const router = useRouter()

  return (
    <main
      className={`flex relative  min-h-screen text-white  flex-col items-center bg-cover bg-center  font-poppins`}
    >
      <div className="w-full  bg-primary  ">
        <div className="xl:max-w-7xl max-w-2xl  mx-auto items-center w-full  gap-2 xl:py-36 pb-[300px] flex xl:flex-row flex-col">
          <div className="items-center xl:items-start w-full gap-4 flex flex-col xl:w-[70%] ">
            <h1 className="text-center xl:text-left xl:text-[72px] text-[64px]   font-extrabold font-raleway xl:leading-[80px] leading-tight">
              <span className="text-secondary ">
                Get your money <br className="hidden xl:flex" /> back
              </span>{" "}
              from a scam
            </h1>
            <p
              className={`text-center xl:text-left  sm:text-[20px] text-[16px]  font-normal font-rubik`}
            >
              If you’ve been ripped off by scammers, get in touch and{" "}
              <br className="hidden xl:flex" /> our team of experts will work to
              get your money back
            </p>
          </div>
          <div className="items-center w-full  font-poppins text-opacity-0  flex flex-col xl:w-[30%] p-5 ">
            placeholder
          </div>
        </div>
      </div>
      <div className="w-full bg-white  py-20">
        <div className="xl:max-w-7xl max-w-2xl relative  mx-auto items-center w-full  gap-2   pt-20 flex xl:flex-row flex-col">
          <div className="items-center  xl:absolute xl:-mt-[850px] -mt-[500px] w-max shadow-lg right-0 bg-[#fff] font-poppins  flex flex-col xl:w-[30%] p-5 ">
            <h1 className="text-primary text-[24px] font-raleway font-bold">
              Start Here
            </h1>
            <p className="text-gray-400">Secure a free consultation</p>
            <form action="" className="grid grid-cols-2 gap-5 mt-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name*"
                className="py-3 px-4 col-span-2 md:col-span-1  bg-gray-100 outline-primary outline-[1px] text-primary"
              />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Last Name*"
                className="py-3 px-4 col-span-2 md:col-span-1   bg-gray-100 outline-primary outline-[1px] text-primary"
              />
              <div className="w-full col-span-2 flex">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  autoComplete="on"
                  countryCallingCodeEditable={false}
                  defaultCountry="US"
                  international={true}
                  onChange={() => setValue(value)}
                  inputComponent={CustomInput} // Use the custom input component
                  className="py-3 px-4 bg-gray-100 outline-primary outline-[1px] text-primary w-full"
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your E-mail"
                className="py-3 px-4 col-span-2  bg-gray-100 outline-primary outline-[1px] text-primary"
              />
              <div className="w-full col-span-2 bg-gray-100 pr-3 flex">
                <select
                  name="amount"
                  id="amount"
                  className="py-3 px-4 w-full bg-gray-100 outline-none  text-primary"
                >
                  <option value="" disabled selected hidden>
                    How much did you invest ($)
                  </option>
                  <option value="1000">$1000</option>
                  <option value="2000">$2000</option>
                  <option value="3000">$3000</option>
                  <option value="4000">$4000</option>
                  <option value="5000">$5000</option>
                </select>
              </div>
              <textarea
                name=""
                id=""
                className="col-span-2 p-4 bg-gray-100 outline-primary outline-[1px] text-primary"
                placeholder="Outline your case"
                cols="30"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-secondary text-primary col-span-2 py-3"
              >
                Get a free consultation
              </button>
            </form>
          </div>
          <div className="w-full flex-col items-center flex pt-10 justify-center">
            <h1 className="text-[24px] font-raleway mb-10 text-center font-bold text-primary">
              Scams we helped our clients recover from
            </h1>
            <div className="max-w-3xl w-full h-full">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white  ">
        <div className="xl:max-w-5xl max-w-4xl relative text-primary  mx-auto items-center justify-center w-full  gap-2  sm:pb-[150px] py-20 flex  flex-col">
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
              Money retrieved in 2023
              <p className="text-[18px]">(1-3 quarters)</p>
            </h1>
            <p className="font-black xl:hidden flex text-center text-[72px] text-secondary font-poppins">
              $ 5,000,459
            </p>
            <p
              className={`text-center xl:text-left  text-[16px]  font-normal font-poppins`}
            >
              Our team of experts secures refunds on a daily basis. We assist
              businesses as well as individuals in their pursuit of funds lost
              to scammers. Our goal is to continually improve in our endeavors
              and we are always here to help you in your fight for what is
              rightfully yours.
            </p>
            <button
              type="submit"
              className="bg-secondary font-semibold text-primary px-14 mt-4 py-3"
            >
              Get a free consultation
            </button>
          </div>
          <div className="items-end w-full hidden    font-raleway text-opacity-0  xl:flex flex-col xl:w-[50%] p-5 ">
            <p className="font-black text-[72px] text-secondary font-poppins">
              $ 5,000,459
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-white text-primary  overflow-hidden ">
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-10 flex xl:flex-row flex-col">
          <div className="items-end w-full     font-raleway text-opacity-0  xl:flex flex-col xl:w-[45%] p-5 ">
            <img src="/logos/18.svg" alt="" className="w-[50%] mx-auto" />
          </div>
          <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
            <h1 className="text-center flex flex-col xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
              Why work with us?
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
            >
              The short answer: We only take on cases we believe can result in a
              substantial recovery. Your time is as valuable as ours, and that’s
              why we are completely transparent in our evaluation of every case.
              If it can’t be done, we will tell you so. But, if we feel there is
              a chance for full or partial recovery, then we'll get to work
              right away.
            </p>
            <button
              type="submit"
              className="bg-transparent border border-primary font-semibold text-primary px-20 mt-4 py-3"
            >
              About Us
            </button>
          </div>
        </div>
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-10 flex xl:flex-row flex-col-reverse">
          <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
            <h1 className="text-center flex flex-col leading-tight xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
              Your money back guarantee
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
            >
              The fund recovery process can be a lengthy one and requires
              perseverance. Therefore it is vital that our clients are ready for
              it and trust us every step of the way. So if for any reason you
              are doubtful, you can ask for a full refund within the first 14
              business days of the process.*
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
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-10 flex xl:flex-row flex-col">
          <div className="items-end w-full     font-raleway text-opacity-0  xl:flex flex-col xl:w-[45%] p-5 ">
            <img src="/logos/20.svg" alt="" className="w-[50%] mx-auto" />
          </div>
          <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
            <h1 className="text-center flex leading-tight flex-col xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
              Beware of copycats & imposters
            </h1>
            <p
              className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
            >
              Scammers go as far as posing as legitimate scam recovery companies
              and even present themselves as Payback Ltd. So it's important to
              remember:
              <br />
              a. Our emails end with @payback-ltd.com.
              <br />
              b. We would NEVER ask you to send us money via Crypto.
            </p>
            <button
              type="submit"
              className="bg-transparent border border-primary font-semibold text-primary px-20 mt-4 py-3"
            >
              Browse the full list
            </button>
          </div>
        </div>
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-10 flex xl:flex-row flex-col-reverse">
          <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
            <h1 className="text-center flex flex-col leading-tight xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
              Is your service provider a scam?
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
            >
              Use our Blacklist of known scams and frauds to check if one of the
              service providers you are currently using is a scam/fraud. At the
              moment, we list more than 11,000 companies that were flagged as a
              scam/fraud by us and different regulatory bodies.
            </p>
            <button
              type="submit"
              className="bg-transparent border border-primary font-semibold text-primary px-20 mt-4 py-3"
            >
              Browse the full list
            </button>
          </div>
          <div className="items-end w-full     font-raleway text-opacity-0  xl:flex flex-col xl:w-[45%] p-5 ">
            <img src="/logos/21.svg" alt="" className="w-[50%] mx-auto" />
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-primary  overflow-hidden ">
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
