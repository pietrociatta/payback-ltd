import React, { useCallback, useEffect, useMemo, useState } from "react"
import ReactMarkdown from "react-markdown"
import ReactPlayer from "react-player"

const Testimonials = () => {
  const [headings, setHeadings] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("TrustPilot")

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
  const testimonials = [
    {
      name: "Rosalyn Brown",
      rating: 5,
      date: "2023-12-18",
      text: "I was very hopeless that I was going to get any money that I lost back until I got in contact with one of their workers. She was...",
      img: "./logos/logo-1.png",
    },
    {
      name: "Jakub Vymazal",
      rating: 5,
      date: "2023-12-18",
      text: "I started to work with Payback Ltd because I was the victim of a cryptocurrency scam. My manager Yana is accommodating and...",
      img: "./logos/logo-2.png",
    },
    {
      name: "Kenny Young",
      rating: 5,
      date: "2023-12-18",
      text: "Payback helped me through the process of getting my money back from a scammer. Thank you Payback, and thank you Omer...",
      img: "./logos/logo-3.png",
    },
    {
      name: "KEVIN M",
      rating: 5,
      date: "2023-10-31",
      text: "I am very confident of the successful return of my funds through the diligent and immediate determination of my managing agent namely...",
      img: "./logos/logo-placeholder.png",
    },
    {
      name: "Anna Ovsjanika",
      rating: 5,
      date: "2023-09-21",
      text: "I got scammed by a forex company in March 2023. Having lost a substantial amount of my savings to the scammers I almost gave up...",
      img: "./logos/logo-placeholder.png",
    },
    {
      name: "Merwyn Rodrigues",
      rating: 5,
      date: "2023-10-22",
      text: "Would like to thank Money Back for professional advice and service, I would even say friendly support for people who unluckily get in...",
      img: "./logos/logo-placeholder.png",
    },
    {
      name: "Jean Balmer",
      rating: 1,
      date: "2023-09-14",
      text: "Don't give up hope - it actually took nearly four years but Payback stuck with me and saw my claim right through to a successful outcome...",
      img: "./logos/logo-placeholder.png",
    },
    {
      name: "Gary Cordoza",
      rating: 1,
      date: "2023-10-04",
      text: "I contacted Payback ltd. In mid May 2023 after I was scammed out of a substancial sum of money. I kept all receipts and texts and as much...",
      img: "./logos/logo-placeholder.png",
    },
    {
      name: "Naveen Singh",
      rating: 1,
      date: "2023-08-14",
      text: "I lost a lot of money in trading scam in the year 2017 and all the money I was funded for the trading company using my credit cards. I was...",
      img: "./logos/logo-placeholder.png",
    },
    {
      name: "Swapnil Doshi",
      rating: 1,
      date: "2023-08-10",
      text: "I lost a lot of money in trading scam in the year 2017 and all the money I was funded for the trading company using my credit cards. I was...",
      img: "./logos/logo-placeholder.png",
    },
    {
      name: "Helen Smith",
      rating: 1,
      date: "2023-07-12",
      text: "I lost a lot of money in trading scam in the year 2017 and all the money I was funded for the trading company using my credit cards. I was...",
      img: "./logos/logo-placeholder.png",
    },
    {
      name: "Mrs House",
      rating: 1,
      date: "2023-07-22",
      text: "I lost a lot of money in trading scam in the year 2017 and all the money I was funded for the trading company using my credit cards. I was...",
      img: "./logos/logo-placeholder.png",
    },
  ]

  const videos = [
    {
      url: "https://www.youtube.com/embed/qRfOakNl-uA?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
    {
      url: "https://www.youtube.com/embed/lRlr2T39NTc?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
    {
      url: "https://www.youtube.com/embed/0op67uvszLA?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
    {
      url: "https://www.youtube.com/embed/bvnyHiGfCrg?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
    {
      url: "https://www.youtube.com/embed/X8L05PZWEJg?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
    {
      url: "https://www.youtube.com/embed/gb_x-DltH_Y?si=o26MMfYelB5tHvj5&amp;controls=0&amp;rel=0",
    },
  ]

  return (
    <div className="w-full bg-white  xl:py-20 py-10">
      <div className="xl:max-w-7xl max-w-4xl px-5 xl:px-0 relative  mx-auto items-center w-full  gap-2    flex flex-col">
        <div className="items-center  w-full max-w-4xl mx-auto bg-[#fff] font-poppins  flex flex-col  p-5 ">
          <h1 className="text-primary xl:text-[56px] mb-10 text-[45px] leading-none text-center font-raleway font-bold">
            Customer Reviews and Testimonials
          </h1>
          <div className=" w-[90%] max-w-5xl mb-8  flex overflow-x-scroll  justify-start items-center">
            <div
              className={`flex items-center w-full min-w-max px-4 justify-center py-5   border  border-primary cursor-pointer ${
                selectedCategory === "TrustPilot"
                  ? "bg-primary text-white"
                  : "bg-transparent"
              }`}
              onClick={() => setSelectedCategory("TrustPilot")}
            >
              TrustPilot
            </div>
            <div
              className={`flex items-center w-full min-w-max px-4 justify-center py-5   border  border-primary cursor-pointer ${
                selectedCategory === "Video"
                  ? "bg-primary text-white"
                  : "bg-transparent"
              }`}
              onClick={() => setSelectedCategory("Video")}
            >
              Video
            </div>
          </div>
          <img src="/logos/trust.svg" alt="" className="max-w-[100px]" />
          <p className="text-gray-500 text-xs text-center md:mb-14 mb-7 mt-3">
            Rated 4.4 / 5 based on 1515 reviews. Showing our favorite reviews.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
          {selectedCategory === "TrustPilot" &&
            testimonials.map((slide, index) => (
              <div className="w-full flex flex-col items-center justify-center   md:basis-1/2 xl:basis-1/3 ">
                <div className="w-full  flex flex-col max-w-[500px]">
                  <div className="flex  gap-3">
                    <div className="w-[16%] aspect-square bg-gray-300 flex items-center justify-center">
                      {slide.name.split(" ")[0][0] +
                        slide.name.split(" ")[1][0]}
                    </div>
                    <div className="flex flex-col text-lg font-raleway font-bold gap-1 items-start">
                      {slide.name}
                      <img src="/logos/stars.svg" className="w-[130px]" />
                    </div>
                  </div>
                  <p className="text-gray-600 font-poppins mt-1.5">
                    {slide.date}
                  </p>
                  <p className="text-gray-600 font-poppins font-normal">
                    {slide.text}
                  </p>
                </div>
              </div>
            ))}
          {selectedCategory === "Video" &&
            videos.map((video, index) => (
              <div className="w-full flex flex-col items-center justify-center  ">
                <ReactPlayer
                  url={video.url}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="xl:max-w-5xl max-w-4xl px-5 md:px-0 mt-20  text-primary mx-auto items-start w-full  gap-10   flex md:flex-row flex-col-reverse">
        <div className="md:w-[60%]">
          <div className=" bg-primary w-full h-[1px] flex  my-5" />
          <p className="text-left text-gray-600 font-poppins">
            Payback LTD was founded to protect traders from unregulated Binary
            Option and Forex brokers. The company comprises of professionals
            with vast experience in the Forex industry and cybercrimes. For over
            a decade we have claimed funds for hundreds of victims worldwide.
          </p>
          <div className=" bg-primary  w-full h-[1px] flex  mt-5 mb-10" />
          <ReactMarkdown components={markdownComponents}>
            {`
# The Process We Follow to Trace Misplaced or Lost Funds

We follow a structured process to trace misplaced or lost funds. Here's how we do it:

1. **Review Complaint Details**: We start by reviewing the details provided by the complainant. We gather all necessary information, including correspondence with the merchant/broker, confirmation of the transaction, and access to the broker’s platform/web page.

2. **Privacy Assurance**: We prioritize privacy and ensure that your details are never shared with third parties.

3. **Compilation of Necessary Information**: Once we have all the required information, we compile it to form a comprehensive overview of the situation.

4. **Confrontation**: We confront the owners of the bank or company in question with the gathered evidence.

5. **Funds Reclamation**: Finally, we initiate the process of claiming back your funds using a quick and secure payment method.

# Payback LTD Services

At Payback LTD, we understand the challenges that come with the internet and its usage in daily life. While most websites offer genuine products and services and safeguard your information, some companies have ulterior motives. Here's how we can help:

- **Funds Retrieval**: We specialize in retrieving funds from unregulated brokers and any other company engaging in online fraud.

- **Free Consultation**: We offer a free consultation at any time to discuss your situation and explore how we can assist you.

# Customer Testimonials

Don't just take our word for it. Here's what our customers have to say:

- **Genuine Reviews**: Many genuine Payback LTD Reviews on our website showcase customer satisfaction.

- **Success Stories**: Our clients, who had lost hope in ever retrieving their money, have had their funds secured with our assistance.

- **High Satisfaction Rate**: Currently, our site boasts a score of 4.4/5, reflecting not only our professionalism but also our high success rate.

- **Commitment**: We are committed to resolving your case and will never give up until a solution is found.
`}
          </ReactMarkdown>{" "}
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
    </div>
  )
}

export default Testimonials
