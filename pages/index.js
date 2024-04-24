import {
  Check,
  ChevronDown,
  File,
  Mail,
  MapPin,
  Menu,
  RotateCw,
  Shield,
  TextSearch,
} from "lucide-react"
import { useState } from "react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { forwardRef } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Carousel from "@/components/Carousel"
import Testimonial from "@/components/Testimonial"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import VideoTestimonial from "@/components/VideoTestimonial"

export const CustomInput = forwardRef(({ value, onChange, ...rest }, ref) => (
  <input
    ref={ref}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="bg-transparent outline-none w-full px-4"
  />
))

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [amountInvested, setAmountInvested] = useState("")
  const [message, setMessage] = useState("")
  const [scamtype, setScamType] = useState("other")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const formData = {
      name,
      last_name: lastName,
      phone_number: phoneNumber,
      email,
      amount_invested: amountInvested,
      message,
      scam_type: scamtype,
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        // If the server response is not ok, handle errors.
        const errorData = await response.json() // Assuming error details are in the response body.
        throw new Error(
          errorData.message || "An error occurred while submitting the form."
        ) // Create a new error with the server's message or a default one.
      }

      const data = await response.json() // If response is ok, process it.
      console.log(data)
      setSuccess(true)
      router.push("/ty-page")
    } catch (error) {
      console.error("Failed to submit form:", error)
      alert(`Error submitting form: ${error.message}`) // Display the error message from the catch block.
      setSuccess(false)
    } finally {
      setIsLoading(false) // Ensure loading state is reset regardless of the outcome.
    }
  }

  return (
    <main
      className={`flex relative  min-h-screen text-white  flex-col items-center bg-cover bg-center  font-poppins`}
    >
      <div className="w-full relative  bg-primary  ">
        <div className="xl:max-w-7xl max-w-2xl  mx-auto items-center w-full  gap-2 xl:py-36 pb-[300px] flex xl:flex-row flex-col">
          <div className="items-center xl:items-start w-full gap-4 pt-10 pb-5 xl:pt-0 xl:pb-0 px-5 xl:px-0 flex flex-col xl:w-[70%] ">
            <h1 className="text-center xl:text-left xl:text-[72px] md:text-[64px] text-[52px]   font-extrabold font-raleway xl:leading-[80px] leading-tight">
              <span className="text-secondary ">
                Recover Your Funds <br className="hidden xl:flex" />
              </span>{" "}
              from Fraud
            </h1>
            <p
              className={`text-center xl:text-left  sm:text-[20px] text-[16px]  font-normal font-rubik`}
            >
              Have you fallen victim to a fraudulent scheme? Reach out to us,{" "}
              <br className="hidden xl:flex" /> and our specialized team will
              dedicate their efforts to retrieve your lost funds.
            </p>
          </div>
          <div className="items-center w-full  font-poppins text-opacity-0  flex flex-col xl:w-[30%] p-5 ">
            placeholder
          </div>
        </div>
        <img
          src="/logos/9.svg"
          alt=""
          className="max-w-[150px] xl:flex hidden absolute -bottom-14 left-24"
        />
        <div className="xl:flex gap-6 hidden absolute bottom-5 left-64 items-center">
          <img src="/logos/6.svg" alt="" />
          <img src="/logos/7.svg" alt="" />
          <img src="/logos/5.svg" alt="" />
        </div>
      </div>
      <div className="w-full bg-white  py-20">
        <div className="xl:max-w-7xl max-w-2xl relative  mx-auto items-center w-full  gap-2   pt-20 flex xl:flex-row flex-col">
          <div className="items-center  xl:absolute xl:-mt-[850px] -mt-[500px] w-[90%] shadow-lg right-0 bg-[#fff] font-poppins  flex flex-col xl:w-[30%] p-5 ">
            <h1 className="text-primary text-[24px] font-raleway font-bold">
              Start Here
            </h1>
            <p className="text-gray-400">Secure a free consultation</p>
            <form
              onSubmit={handleSubmit}
              className="grid w-full grid-cols-2 gap-5 mt-5"
            >
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name*"
                className="py-3 px-4 col-span-2 md:col-span-1  bg-gray-100 outline-primary outline-[1px] text-primary"
              />
              <input
                type="text"
                name="lastname"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="lastname"
                placeholder="Last Name*"
                className="py-3 px-4 col-span-2 md:col-span-1   bg-gray-100 outline-primary outline-[1px] text-primary"
              />
              <div className="w-full col-span-2 flex">
                <PhoneInput
                  placeholder="Enter phone number"
                  autoComplete="on"
                  countryCallingCodeEditable={false}
                  international={true}
                  value={phoneNumber}
                  required
                  defaultCountry="US"
                  onChange={setPhoneNumber}
                  inputComponent={CustomInput} // Use the custom input component
                  className="py-3 px-4 bg-gray-100 outline-primary outline-[1px] text-primary w-full"
                />
              </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Enter your E-mail"
                className="py-3 px-4 col-span-2  bg-gray-100 outline-primary outline-[1px] text-primary"
              />
              <div className="w-full col-span-2 bg-gray-100 pr-3 flex">
                <select
                  name="amount"
                  id="amount"
                  value={amountInvested}
                  required
                  onChange={(e) => setAmountInvested(e.target.value)}
                  className="py-3 px-4 w-full bg-gray-100 outline-none  text-primary"
                >
                  <option value="" disabled selected hidden>
                    How much did you invest ($)
                  </option>
                  <option value="5000">$5000</option>
                  <option value="10000">$10000</option>
                  <option value="20000">$20000</option>
                  <option value="50000">$50000</option>
                </select>
              </div>
              <textarea
                name=""
                id=""
                className="col-span-2 p-4 bg-gray-100 outline-primary outline-[1px] text-primary"
                placeholder="Outline your case"
                cols="30"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-secondary flex items-center justify-center text-primary col-span-2 py-3"
              >
                {!isLoading && success && (
                  <span className="flex items-center gap-2">
                    Success
                    <Check size={20} />
                  </span>
                )}
                {!isLoading && !success && <span>Get a free consultation</span>}
                {isLoading && <span>Submitting...</span>}
              </button>
            </form>
          </div>
          <div className="w-full flex-col items-center flex px-5 xl:px-0 pt-10 justify-center">
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
        <div className="xl:max-w-5xl max-w-4xl relative text-primary px-5 xl:px-0  mx-auto items-center justify-center w-full  gap-2  sm:pb-[150px] py-20 flex  flex-col">
          <h1 className="font-raleway text-[40px] font-bold ">How it works</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
            <div className="flex flex-col gap-3 items-start justify-center p-6 shadow-lg">
              <h1 className="flex gap-2 items-center">
                <TextSearch size={30} />
                <span className="font-raleway text-[20px] font-bold">
                  Evaluating Your Situation
                </span>
              </h1>
              <p className="text-[16px] text-gray-600">
                We begin by conducting initial assessments to determine the
                viability of your claim for a significant fund recovery,
                leveraging our extensive experience in similar cases.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center p-6 shadow-lg">
              <h1 className="flex gap-2 items-center">
                <File size={30} />
                <span className="font-raleway text-[20px] font-bold">
                  Compiling Necessary Documentation
                </span>
              </h1>
              <p className="text-[16px] text-gray-600">
                We will assemble all pertinent details and paperwork needed to
                effectively advance your claim.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start justify-center p-6 shadow-lg">
              <h1 className="flex gap-2 items-center">
                <Shield size={30} />
                <span className="font-raleway text-[20px] font-bold">
                  Addressing the Responsible Parties
                </span>
              </h1>
              <p className="text-[16px] text-gray-600">
                We take a strategic approach to engage with the entities
                involved in the unauthorized movement of your funds, aiming for
                resolution and recovery.
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
              Securing Your Refund
              <p className="text-[18px]">(1-3 quarters)</p>
            </h1>
            <p className="font-black xl:hidden flex text-center xl:text-[72px] text-[48px] text-secondary font-poppins">
              $ 5,000,459
            </p>
            <p
              className={`text-center xl:text-left  text-[16px]  font-normal font-poppins`}
            >
              Our dedication to recovering your funds is unwavering, and our
              successful track record gives us confidence. Rest assured, we will
              exhaust all avenues to reclaim your money. In 2023, covering the
              first three quarters, our experienced team has consistently
              achieved daily successes in securing refunds for both individuals
              and businesses wronged by fraudulent activities. Our commitment
              lies in not only retrieving what is rightfully yours but also in
              enhancing our strategies to assist you effectively in your quest
              for justice.
            </p>
            <Link
              href="/contact"
              className="bg-secondary font-semibold text-primary px-14 xl:w-max w-full mt-4 py-3"
            >
              Get a free consultation
            </Link>
          </div>
          <div className="items-end w-full hidden    font-raleway text-opacity-0  xl:flex flex-col xl:w-[50%] p-5 ">
            <p className="font-black text-[72px] text-secondary font-poppins">
              $ 5,000,459
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-white text-primary px-5 xl:px-0 pb-14 xl:pb-0   overflow-hidden ">
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-5 flex xl:flex-row flex-col">
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
              Choosing to collaborate with us means partnering with a team
              committed to cases with strong potential for financial recovery.
              We prioritize transparency and efficiency, focusing only on
              situations where we see a viable path to significant restitution.
              Our approach ensures that we engage with cases where our efforts
              can truly make a difference, aligning our success with your best
              interest.
            </p>
            <Link
              href="/about-us"
              className="bg-transparent border border-primary font-semibold text-primary px-20 mt-4 py-3"
            >
              About Us
            </Link>
          </div>
        </div>
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-5 flex xl:flex-row flex-col-reverse">
          <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
            <h1 className="text-center flex flex-col leading-tight xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
              Your money back guarantee
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
            >
              We offer a confidence-inspiring guarantee: if the fund recovery
              journey feels daunting or if you harbor any doubts, you're
              entitled to a complete refund within the first 14 business days.
              This policy underscores our dedication to your satisfaction and
              trust throughout the recovery process.
            </p>
            <Link
              href="/"
              className="bg-transparent border border-primary font-semibold text-primary px-20 mt-4 py-3"
            >
              *Read Terms and Conditions
            </Link>
          </div>
          <div className="items-end w-full     font-raleway text-opacity-0  xl:flex flex-col xl:w-[45%] p-5 ">
            <img src="/logos/19.svg" alt="" className="w-[50%] mx-auto" />
          </div>
        </div>
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-5 flex xl:flex-row flex-col">
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
              Stay vigilant against fraudulent entities masquerading as
              legitimate recovery services. Ensure communication is through
              official channels, with a specific domain in emails, and remember,
              legitimate services will not request payments via cryptocurrency.
            </p>
            <Link
              href="/copy"
              className="bg-transparent border border-primary font-semibold text-primary px-20 mt-4 py-3"
            >
              Browse the full list
            </Link>
          </div>
        </div>
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full  gap-2 xl:py-16 py-5 flex xl:flex-row flex-col-reverse">
          <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
            <h1 className="text-center flex flex-col leading-tight xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
              Is your service provider a scam?
            </h1>

            <p
              className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
            >
              To verify if a service provider is fraudulent, consult our
              comprehensive blacklist, which includes over 11,000 companies
              identified as scams by both our team and various regulatory
              authorities.
            </p>
            <Link
              href="/scams"
              className="bg-transparent border border-primary font-semibold text-primary px-20 mt-4 py-3"
            >
              Browse the full list
            </Link>
          </div>
          <div className="items-end w-full     font-raleway text-opacity-0  xl:flex flex-col xl:w-[45%] p-5 ">
            <img src="/logos/21.svg" alt="" className="w-[50%] mx-auto" />
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-primary  py-0  overflow-hidden ">
        <div className="xl:max-w-5xl max-w-4xl  mx-auto items-center w-full px-5 xl:px-0  gap-2 xl:py-16 py-14 flex xl:flex-row flex-col">
          <div className="items-center justify-center xl:items-center w-full gap-4 flex flex-col xl:w-full ">
            <h1 className="text-center flex flex-col xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
              Let's get your money back!
            </h1>
            <p
              className={`text-center max-w-lg   text-[16px]  font-normal font-poppins`}
            >
              If you've suffered losses due to scammers, contact us. Our team,
              comprised of seasoned experts, is committed to assisting you in
              the recovery of your funds.
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
            <Link
              href="/contact"
              className="bg-secondary text-center w-full max-w-md font-semibold text-primary px-14 py-3"
            >
              Get a free consultation
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-white text-primary  overflow-hidden ">
        <div className="xl:max-w-6xl flex-col gap-6 max-w-4xl  mx-auto items-center w-full   xl:pt-16 xl:pb-28 py-20 flex ">
          <h1 className="font-raleway font-bold text-[40px] text-center">
            Testimonials
          </h1>
          <Testimonial />
        </div>
      </div>

      <div className="w-full bg-cover bg-primary  overflow-hidden ">
        <div className="xl:max-w-5xl max-w-4xl px-5 xl:px-0  mx-auto items-center w-full  gap-2 xl:py-16 py-20 flex xl:flex-row flex-col">
          <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[50%] ">
            <h1 className="text-center flex flex-col xl:text-left xl:text-[40px] text-[30px] leading-tight   font-extrabold font-raleway  ">
              How we get your funds back
            </h1>
            <p
              className={`text-center xl:text-left  text-[16px]  font-normal font-poppins`}
            >
              Our process begins by gathering vital information from you. With a
              team encompassing financial experts, recovery specialists, and
              legal professionals, we adeptly trace and confront the scammers.
              Our extensive experience equips us to successfully navigate and
              resolve your case, bringing you closer to reclaiming your assets
              with just a brief conversation to initiate the process.
            </p>
            <Link
              href="/contact"
              className="bg-secondary font-semibold text-primary px-14 mt-4 py-3"
            >
              Get a free consultation
            </Link>
          </div>
          <div className="items-center w-full hidden    font-raleway text-opacity-0  xl:flex flex-col xl:w-[50%] p-5 ">
            <img src="/logos/22.svg" alt="" className="w-[50%]" />
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-white text-primary   overflow-hidden ">
        <div className="xl:max-w-6xl px-5 xl:px-0 flex-col gap-6 max-w-4xl  mx-auto items-center w-full   xl:pt-20 xl:pb-20 py-10 flex ">
          <VideoTestimonial />

          <h1 className="font-raleway font-bold leading-none text-[40px] mt-24 text-center">
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
              <p className="font-raleway text-center text-[22px] font-bold">
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
              <p className="font-raleway text-center text-[22px] font-bold">
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
              <p className="font-raleway text-[22px] text-center font-bold">
                Forex
              </p>
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
              <p className="font-raleway text-[22px] text-center font-bold">
                Romance
              </p>
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
              <p className="font-raleway text-[22px] text-center font-bold">
                Property Scams
              </p>
            </div>
            <div
              onClick={() => router.push("/binary")}
              className="flex flex-col border  group hover:bg-primary hover:text-white   border-primary gap-2 items-center justify-center py-6"
            >
              <img
                src="/logos/29.svg"
                alt=""
                className="w-[15%] group-hover:invert"
              />
              <p className="font-raleway text-[22px] text-center font-bold">
                Credit card phishing
              </p>
            </div>
            <div
              onClick={() => router.push("/binary")}
              className="flex flex-col border  group hover:bg-primary hover:text-white   border-primary gap-2 items-center justify-center py-6"
            >
              <img
                src="/logos/30.svg"
                alt=""
                className="w-[15%] group-hover:invert"
              />
              <p className="font-raleway text-[22px] text-center font-bold">
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
              <p className="font-raleway text-[22px] text-center font-bold">
                Other scams
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-white text-primary   overflow-hidden ">
        <div className="xl:max-w-6xl px-5 xl:px-0 flex-col gap-6 max-w-4xl  mx-auto items-center w-full   xl:pb-20 py-10 flex ">
          <h1 className="font-raleway max-w-lg font-bold text-[40px] leading-tight text-center">
            the chargeback industry
          </h1>
          <Accordion type="single" collapsible className="w-full max-w-2xl">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold w-full text-[20px]">
                Learn more about Payback and the chargeback industry right here
              </AccordionTrigger>
              <AccordionContent>
                Online scams are prevalent among illegitimate shops and
                merchants on the internet today. It is laden with untrustworthy
                transactions that seek to victimize those who are vulnerable.
                While we guard ourselves against these dangerous tradings, there
                are times when they cannot be prevented.
                <br /> <br />
                For instance, there are a lot of online markets and traders that
                can easily fool people by posing as a legitimate authority. They
                can be so real that not a lot of people can spot their real
                motives. Falling victim into this kind of scam can be really
                frustrating and painful, not just in our credits but also in our
                integrity as a buyer or a trader. While we think that all hope
                is lost, it’s not quite over.
                <br /> <br />
                PayBack’s funds’ recovery program has been helping consumers and
                users online recover what is rightfully theirs after being
                victimized by trading scams, trade platform scams, and the
                likes.
                <br /> <br />
                Funds recovery has been a prominent method of wealth recovery
                and scam money recovery. Due to this, there are also recovery
                scams that have been spreading online. With all the deceptions
                and frauds circulating on the internet, you must be smart about
                it.
                <br /> <br />
                For a legitimate wealth recovery expert, PayBack can help you.
                PayBack scam recovery has helped victims all over the world to
                retrieve their money with their wealth recovery experts on
                scams. For recovery funds in the UK, they are adept at the area.
                To learn more about them and the trade industry, here is
                everything you need to know.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-semibold text-[20px]">
                The chargeback industry
              </AccordionTrigger>
              <AccordionContent>
                In the chargeback industry, chargebacks serve as a mechanism for
                consumers to initiate a funds retrieval request with their bank,
                primarily for transactions that are disputed or fraudulent. This
                process is in place to safeguard consumer rights by allowing for
                the return of funds in cases of merchant errors, disagreements,
                or scams. It is a critical consumer protection tool, especially
                in online shopping, ensuring transaction integrity and
                preventing fraud. Chargebacks bypass traditional refund requests
                from merchants, offering a direct path to financial redress
                through the customer's bank, enhancing safety and transparency
                in digital commerce.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-semibold text-[20px]">
                Recovering money losses with Payback
              </AccordionTrigger>
              <AccordionContent>
                Payback leverages expertise in wealth and fund recovery to
                assist victims of online scams in reclaiming their investments.
                Fund recovery is a consultative and investigative service aimed
                at retrieving money lost to internet fraud. Through thorough
                investigations, digital tracking, and strategic disputes,
                Payback specializes in combating various online scams, offering
                a significant success rate in crypto and Bitcoin scam
                recoveries. Upon receiving a victim's complaint, Payback
                promptly reviews the case details, ensuring adherence to its
                terms for a successful recovery process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-semibold text-[20px]">
                Helping victims of online trading scams
              </AccordionTrigger>
              <AccordionContent>
                Victims of online trading scams, particularly in Forex and
                cryptocurrencies, often seek ways to recover their lost funds.
                The prevalence of investment scams, especially on social media,
                where fraudulent traders promise high returns, has made many
                vulnerable. PayBack specializes in assisting victims by
                navigating through these scams, offering solutions to recover
                investments from trade platform scams and Bitcoin fraud. Their
                approach is geared towards quick recovery, leveraging their
                expertise to combat scams that often appear professional and
                legitimate to unsuspecting investors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-semibold text-[20px]">
                About Payback
              </AccordionTrigger>
              <AccordionContent>
                PayBack LTD is dedicated to protecting individuals from online
                frauds and scams globally. With a team of wealth recovery
                experts, scam money recovery professionals, and fund recovery
                specialists, they focus on assisting victims of unregulated
                Forex and Binary Options Brokers. PayBack has a significant
                global impact, boasting a high recovery turnover, including a
                substantial amount recovered in July alone. Their experienced
                team aids in avoiding recovery scams, offering expertise in the
                forex industry, international banking, and cybercrime law,
                ensuring safe online transactions and specializing in various
                scam recoveries.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="w-full bg-cover bg-primary mt-20  overflow-hidden ">
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
    </main>
  )
}
