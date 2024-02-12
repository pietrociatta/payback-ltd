import "@/styles/globals.css"
import { ChevronDown, Menu } from "lucide-react"
import { Raleway, Poppins } from "next/font/google"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
          <div
            onClick={() => router.push("/")}
            className=" cursor-pointer max-w-[150px]"
          >
            <img src="logo.svg" alt="" className="w-full" />
          </div>
          <div className="font-poppins hidden lg:block col-span-3 text-[16px] font-normal">
            <ul className="flex justify-center gap-4">
              <li className="py-2">
                <Link href="/">Testimonials</Link>
              </li>
              <li className="relative group py-2">
                <a href="#why" className="flex gap-2 items-center">
                  Recovery Services
                  <ChevronDown
                    size={20}
                    className="group-hover:rotate-180 transition-all"
                  />
                </a>
                <ul className="absolute w-[220px] left-0 top-10   text-primary bg-white invisible group-hover:visible transition-opacity duration-300">
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

              <li className="py-2">
                <a href="#why" className="flex gap-2 items-center">
                  Blacklist
                  <ChevronDown size={20} />
                </a>
              </li>
              <Link href="/contact-us" className="py-2">
                Contact Us
              </Link>
              <Link href="/about-us" className="py-2">
                About Us
              </Link>
              <li className="py-2">
                <a href="/contact-us">Blog</a>
              </li>
              <li className="py-2">
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
      <footer className="bg-[#030e31]  text-white py-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center">
            Money Back Ltd (which trades as Payback) Israeli company #515711653,
            is authorised and regulated in Israel and operates globally. In the
            UK, the company operates through a legal exclusion, which removes
            the need for Money Back Ltd to be authorised and regulated by the
            FCA.
          </p>
        </div>
        <div className="w-full lg:grid hidden max-w-7xl border-b border-white gap-10 pb-10 mx-auto mt-16  lg:grid-cols-4 grid-cols-1  ">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-xl font-bold">Sitelinks</h1>
            <ul className="flex flex-col items-start text-gray-300 gap-2">
              <li>Testimonials</li>
              <li>Contact us</li>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <ul className="flex flex-col items-start text-gray-300 gap-2">
              <li>IT 222 345 5677</li>
              <li>IT 222 345 5677</li>
              <li>IT 222 345 5677</li>
              <li>IT 222 345 5677</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-xl font-bold">Location</h1>
            <ul className="flex flex-col items-start text-gray-300 gap-2">
              <li>Hilazon 5, Ramat Gan, Israel, 5252269</li>
            </ul>
            <h1 className="text-xl font-bold">Our office hours</h1>
            <ul className="flex flex-col items-start text-gray-300 gap-2">
              <li>Mon-Fr: 8:00-19:00 GMT</li>
              <li>Su: 8:00-14:00 GMT</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-xl font-bold">Social</h1>
            <ul className="flex flex-col items-start text-gray-300 gap-2">
              <li>Facebook </li>
              <li>Twitter </li>
              <li>Youtube </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col px-5 lg:hidden justify-center items-center">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-[22px]">
                Sitelinks
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col items-start text-gray-300 gap-2">
                  <li>Testimonials</li>
                  <li>Contact us</li>
                  <li>About Us</li>
                  <li>FAQ</li>
                  <li>Sitemap</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold text-[22px]">
                Contact Us
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col items-start text-gray-300 gap-2">
                  <li>IT 222 345 5677</li>
                  <li>IT 222 345 5677</li>
                  <li>IT 222 345 5677</li>
                  <li>IT 222 345 5677</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full max-w-7xl px-5 lg:px-0   gap-10  mx-auto mt-10 grid lg:grid-cols-2 grid-cols-1  ">
          <div>
            <ul className="flex gap-4 items-center justify-center lg:justify-start">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Legal</li>
            </ul>
          </div>
          <div className="flex lg:justify-end justify-center">
            <p>© Payback Ltd</p>
          </div>
        </div>
      </footer>
      <div className="bg-primary  text-white py-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center">
            Disclaimer: Payback Ltd offers each new client a free consultation.
            Funds Recovery or other services that will be subsequently
            commissioned will incur fees and/or commissions, based on the
            service and the complexity of each individual case. Payback Ltd
            doesn’t offer any investments, financial services, or advice.
            <br />
            <br /> At Payback we do not initiate calls without request. We only
            call clients that reached out to us.
            <br />
            <br /> The Company cannot accept prohibited payment methods.
            <br />
            <br /> Every payment received by the company is secure under the
            PCI-DSS protocol.
          </p>
        </div>
      </div>
    </div>
  )
}
