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
import Script from "next/script"

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
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [showSubMenu2, setShowSubMenu2] = useState(false)

  return (
    <div className={`${raleway.variable} ${poppins.variable}`}>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '795110229198187');
fbq('track', 'PageView');
`,
        }}
      />
      <header
        className={`flex bg-primary sticky top-0 z-10 text-white   flex-col w-full `}
      >
        <div className="w-full max-w-7xl mx-auto grid xl:grid-cols-5 grid-cols-2  items-center    justify-between  px-5 xl:px-0 py-5">
          <div
            onClick={() => router.push("/")}
            className=" cursor-pointer max-w-[150px]"
          >
            <img src="/logo.svg" alt="" className="w-full" />
          </div>
          <div className="font-poppins hidden xl:block col-span-3 text-[16px] font-normal">
            <ul className="flex justify-center gap-4">
              <li className="py-2">
                <Link href="/reviews">Testimonials</Link>
              </li>
              <li className="relative group py-2">
                <a
                  href="#why"
                  className="flex gap-2 items-center"
                  onClick={() => {
                    setShowSubMenu(!showSubMenu)
                    setShowSubMenu2(false)
                  }}
                >
                  Recovery Services
                  <ChevronDown
                    size={20}
                    className={`${
                      showSubMenu ? "rotate-180" : ""
                    } transition-all`}
                  />
                </a>
                <ul
                  className={`absolute w-[220px] left-0 top-10 text-primary bg-white ${
                    showSubMenu ? "flex" : "hidden"
                  } flex-col transition-opacity duration-300`}
                >
                  {/* Submenu items */}
                  <li
                    onClick={() => {
                      router.push("/binary")
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Binary Options</span>
                  </li>

                  <li
                    onClick={() => {
                      router.push("/crypto")
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Cryptocurrency</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/fx")
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Forex</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/trading")
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Stock trading</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/card-fraud")
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Credit card phishing</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/property-fraud")
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Property Scams</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/relationships")
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Romance Scams</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/other")
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Other Scams</span>
                  </li>
                </ul>
              </li>

              <li className="relative group py-2">
                <a
                  href="#why"
                  className="flex gap-2 items-center"
                  onClick={() => {
                    setShowSubMenu2(!showSubMenu2)
                    setShowSubMenu(false)
                  }}
                >
                  Blacklist
                  <ChevronDown
                    size={20}
                    className={`${
                      showSubMenu2 ? "rotate-180" : ""
                    } transition-all`}
                  />
                </a>
                <ul
                  className={`absolute w-[240px] left-0 top-10 text-primary bg-white ${
                    showSubMenu2 ? "flex" : "hidden"
                  } flex-col transition-opacity duration-300`}
                >
                  {/* Submenu items */}
                  <li
                    onClick={() => {
                      router.push("/scams")
                      setShowSubMenu2(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Scams</span>
                  </li>

                  <li
                    onClick={() => {
                      router.push("/copy")
                      setShowSubMenu2(false)
                    }}
                    className="py-2.5 px-5 w-full cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Imposters & Copycats </span>
                  </li>
                </ul>
              </li>
              <Link href="/contact" className="py-2">
                Contact Us
              </Link>
              <Link href="/who-we-are" className="py-2">
                About Us
              </Link>
              <li className="py-2">
                <Link href="/blogs">Blog </Link>
              </li>
              <li className="py-2">
                <Link href="/faq">Faq</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-end items-center">
            <Link
              href="/contact"
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
          className={`fixed overflow-hidden    flex flex-col w-full  top-[79px] ${
            showMenu ? "animate-menu" : "hidden"
          }`}
        >
          <div className="bg-white overflow-y-scroll p-8 max-h-[100dvh] h-[90dvh] font-rubik text-primary">
            <ul className="flex flex-col justify-center gap-4">
              <li
                onClick={() => {
                  router.push("/reviews")
                  setShowMenu(false)
                  setShowSubMenu2(false)
                }}
                className="py-2"
              >
                <span>Testimonials </span>
              </li>
              <li className="relative group py-2">
                <a
                  href="#why"
                  className="flex gap-2 items-center"
                  onClick={() => setShowSubMenu(!showSubMenu)}
                >
                  Recovery Services
                  <ChevronDown
                    size={20}
                    className={`${
                      showSubMenu ? "rotate-180" : ""
                    } transition-all`}
                  />
                </a>
                <ul
                  className={` w-[220px] left-0 top-10 text-primary bg-white ${
                    showSubMenu ? "flex" : "hidden"
                  } flex-col transition-opacity duration-300`}
                >
                  <li
                    onClick={() => {
                      router.push("/binary")
                      setShowMenu(false)
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Binary Options</span>
                  </li>

                  <li
                    onClick={() => {
                      router.push("/crypto")
                      setShowMenu(false)
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Cryptocurrency</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/fx")
                      setShowMenu(false)
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Forex</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/trading")
                      setShowMenu(false)
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Stock trading</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/card-fraud")
                      setShowMenu(false)
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Credit card phishing</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/property-fraud")
                      setShowMenu(false)
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Property Scams</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/relationships")
                      setShowMenu(false)
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Romance Scams</span>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/other")
                      setShowMenu(false)
                      setShowSubMenu(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Other Scams</span>
                  </li>
                </ul>
              </li>

              <li className="py-2">
                <a
                  href="#why"
                  className="flex gap-2 items-center"
                  onClick={() => setShowSubMenu2(!showSubMenu2)}
                >
                  Blacklist
                  <ChevronDown
                    size={20}
                    className={`${
                      showSubMenu2 ? "rotate-180" : ""
                    } transition-all`}
                  />
                </a>
                <ul
                  className={` w-[240px] left-0 top-10 text-primary bg-white ${
                    showSubMenu2 ? "flex" : "hidden"
                  } flex-col transition-opacity duration-300`}
                >
                  {/* Submenu items */}
                  <li
                    onClick={() => {
                      router.push("/scams")
                      setShowMenu(false)
                      setShowSubMenu2(false)
                    }}
                    className="py-2.5 px-5 cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Scams</span>
                  </li>

                  <li
                    onClick={() => {
                      router.push("/copy")
                      setShowMenu(false)
                      setShowSubMenu2(false)
                    }}
                    className="py-2.5 px-5 w-full cursor-pointer hover:border-l-4 border-l-4 border-transparent hover:border-secondary relative text-gray-600 hover:text-primary"
                  >
                    <span>Imposters & Copycats </span>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => {
                  router.push("/contact")
                  setShowMenu(false)
                }}
                className="py-2"
              >
                <span>Contact Us </span>
              </li>
              <li
                onClick={() => {
                  router.push("/who-we-are")
                  setShowMenu(false)
                }}
                className="py-2"
              >
                <span>About us </span>
              </li>
              <li
                onClick={() => {
                  router.push("/blogs")
                  setShowMenu(false)
                }}
                className="py-2"
              >
                <span>Blog </span>
              </li>
              <li
                onClick={() => {
                  router.push("/faq")
                  setShowMenu(false)
                }}
                className="py-2"
              >
                Faq
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NQRLCBMH');
      `}
      </Script>
      <Component {...pageProps} />
      <footer className="bg-[#030e31]  text-white py-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center">
            Money Back Ltd (which trades as Payback) #04686624 company, is
            authorised and regulated in and operates globally. In the UK, the
            company operates through a legal exclusion, which removes the need
            for Money Back Ltd to be authorised and regulated by the FCA.
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
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-xl font-bold">Email</h1>
            <ul className="flex flex-col items-start text-gray-300 gap-2">
              <li>
                <a href="mailto:recovery@payback-lmtd.com">
                  {" "}
                  recovery@payback-lmtd.com
                </a>
              </li>
              <li>
                <a href="mailto:HarveyClarke@payback-lmtd.com">
                  HarveyClarke@payback-lmtd.com
                </a>
              </li>
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
                  <li> recovery@payback-lmtd.com</li>
                  <li>HarveyClarke@payback-lmtd.com</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full max-w-7xl px-5 lg:px-0   gap-10  mx-auto mt-10 grid lg:grid-cols-2 grid-cols-1  ">
          <div>
            <ul className="flex gap-4 items-center justify-center lg:justify-start">
              <li>
                <Link href="/terms">
                  <p>Terms & Conditions</p>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <p>Privacy Policy</p>
                </Link>
              </li>
              <li>
                <Link href="/legal">
                  <p>Legal</p>
                </Link>
              </li>
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
