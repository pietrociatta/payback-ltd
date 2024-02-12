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
    <div>
      <div className="w-full bg-white  xl:py-20 py-10">
        <div className="xl:max-w-7xl max-w-2xl relative  mx-auto items-center w-full  gap-2    flex xl:flex-row flex-col">
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
            <form action="" className="grid w-full grid-cols-2 gap-5 mt-10">
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
        </div>
      </div>
    </div>
  )
}

export default Contactus
