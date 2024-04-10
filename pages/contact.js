import React, { forwardRef, useState } from "react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { Building, Mail, MapPin } from "lucide-react"

export const CustomInput = forwardRef(({ value, onChange, ...rest }, ref) => (
  <input
    ref={ref}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="bg-transparent outline-none w-full px-4"
    {...rest}
  />
))

const Contactus = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [amountInvested, setAmountInvested] = useState("")
  const [message, setMessage] = useState("")
  const [scamtype, setScamType] = useState("")
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
    } catch (error) {
      console.error("Failed to submit form:", error)
      alert(`Error submitting form: ${error.message}`) // Display the error message from the catch block.
      setSuccess(false)
    } finally {
      setIsLoading(false) // Ensure loading state is reset regardless of the outcome.
    }
  }

  return (
    <div>
      <div className="w-full bg-white  xl:py-20 py-10">
        <div className="xl:max-w-7xl max-w-2xl relative   mx-auto items-center w-full  gap-2    flex xl:flex-row flex-col">
          <div className="items-center  w-full max-w-4xl mx-auto bg-[#fff] font-poppins  flex flex-col  p-5 ">
            <h1 className="text-primary xl:text-[56px] text-[45px] leading-none text-center font-raleway font-bold">
              Contact us now to get
              <br className="xl:flex hidden" />
              <span className="text-secondary ">{` `}your money Back!</span>
            </h1>
            <p className="text-gray-400 text-center mt-8 max-w-lg">
              If you’ve been ripped off by scammers, get in touch and our team
              of experts will work to get your money back
            </p>
            <form
              onSubmit={handleSubmit}
              className="grid w-full grid-cols-2 gap-5 mt-10"
            >
              <input
                type="text"
                name="name"
                maxLength={32}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name*"
                className="py-3 px-4 col-span-2 md:col-span-1 bg-gray-100 outline-primary outline-[1px] text-primary"
              />
              <input
                type="text"
                name="last_name"
                required
                maxLength={32}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name*"
                className="py-3 px-4 col-span-2 md:col-span-1 bg-gray-100 outline-primary outline-[1px] text-primary"
              />
              <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber}
                required
                defaultCountry="US"
                onChange={setPhoneNumber}
                inputComponent={CustomInput} // Use the custom input component
                className="py-3 px-4 bg-gray-100 outline-primary outline-[1px] text-primary w-full col-span-2"
              />
              <input
                type="email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your E-mail"
                className="py-3 px-4 col-span-2 bg-gray-100 outline-primary outline-[1px] text-primary"
              />
              <select
                name="amount_invested"
                value={scamtype}
                required
                onChange={(e) => setScamType(e.target.value)}
                className="py-3 px-4 w-full bg-gray-100 outline-none text-primary col-span-1"
              >
                <option value="" disabled>
                  What type of scam?
                </option>
                <option value="binary_options">Binary Options</option>
                <option value="cryptocurrency">Cryptocurrency</option>
                <option value="forex">Forex</option>
                <option value="stock_trading">Stock Trading</option>
                <option value="property_scam">Property Scam</option>
                <option value="romance_scam">Romance Scam</option>
                <option value="other">Other</option>
              </select>
              <select
                name="amount_invested"
                value={amountInvested}
                required
                onChange={(e) => setAmountInvested(e.target.value)}
                className="py-3 px-4 w-full bg-gray-100 outline-none text-primary col-span-1"
              >
                <option value="" disabled>
                  How much did you invest ($)
                </option>
                <option value="1000">$1000</option>
                <option value="2000">$2000</option>
                <option value="3000">$3000</option>
                <option value="4000">$4000</option>
                <option value="5000">$5000</option>
              </select>
              <textarea
                name="message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Outline your case"
                className="col-span-2 p-4 bg-gray-100 outline-primary outline-[1px] text-primary"
                cols="30"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-secondary text-primary col-span-2 py-3"
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
            <div className="flex flex-col mt-14 w-full items-center justify-center">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full">
                <p className="flex items-center gap-2">
                  <Mail size={20} />
                  PayBack.recovery@outlook.com
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={20} />
                  HarveyClarke_payback@outlook.com
                </p>
                <p className="flex items-center  gap-2">
                  <MapPin size={20} />
                  85 Great Portland Street, London, W1W 7LT
                </p>
                <p className="flex items-center gap-2">
                  <Building size={20} />
                  RECOVERY LTD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
