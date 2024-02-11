import "@/styles/globals.css"
import { ChevronDown, Menu } from "lucide-react"
import { Raleway, Poppins } from "next/font/google"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={`${raleway.variable} ${poppins.variable}`}>
      <header
        className={`flex bg-primary sticky top-0 z-10 text-white   flex-col w-full `}
      >
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-5 grid-cols-2  items-center    justify-between  px-5 xl:px-0 py-5">
          <div className="max-w-[150px]">
            <img src="logo.svg" alt="" className="w-full" />
          </div>
          <div className="font-poppins hidden lg:block col-span-3 text-[16px] font-normal">
            <ul className="flex justify-center gap-4">
              <li>
                <Link href="/">Testimonials</Link>
              </li>
              <li className="relative group">
                <a href="#why" className="flex gap-2 items-center">
                  Recovery Services
                  <ChevronDown
                    size={20}
                    className="group-hover:rotate-180 transition-all"
                  />
                </a>
                <ul className="absolute w-[220px] left-0 top-10  group-hover:block text-primary bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <li
                    onClick={() => router.push("/binary-options")}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Binary Options</span>
                  </li>

                  <li className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary">
                    <span>Cryptocurrency</span>
                  </li>
                  <li
                    onClick={() => router.push("/forex")}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Forex</span>
                  </li>
                  <li
                    onClick={() => router.push("/stock-trading")}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Stock trading</span>
                  </li>
                  <li
                    onClick={() => router.push("/credit-card-phishing")}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Credit card phishing</span>
                  </li>
                  <li
                    onClick={() => router.push("/property-scams")}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Property Scams</span>
                  </li>
                  <li
                    onClick={() => router.push("/romance-scams")}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Romance Scams</span>
                  </li>
                  <li
                    onClick={() => router.push("/other-scams")}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Other Scams</span>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#why" className="flex gap-2 items-center">
                  Blacklist
                  <ChevronDown size={20} />
                </a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/contact-us">About</a>
              </li>
              <li>
                <a href="/contact-us">Blog</a>
              </li>
              <li>
                <a href="/contact-us">Faq</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-end items-center">
            <Link
              href="/contact-us"
              className="bg-transparent border hidden xl:flex border-white text-white hover:bg-white hover:text-primary font-medium transition-all   font-rubik py-2.5 px-8 "
            >
              Get your money back
            </Link>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className=" text-white xl:hidden flex font-rubik "
            >
              <Menu size={36} />
            </button>
          </div>
        </div>
        <div
          className={`absolute overflow-hidden  flex flex-col w-full  top-[168px] ${
            showMenu ? "animate-menu" : "hidden"
          }`}
        >
          <div className="bg-white font-rubik text-primary">
            <ul className="flex flex-col gap-10 p-6">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#why">Why Trust Cybernetics</a>
              </li>
              <li>
                <a href="#faq">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  )
}
