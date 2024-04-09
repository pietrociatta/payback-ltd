import React, { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const Scams = () => {
  const router = useRouter()
  // State to hold the current page's data
  const [data, setData] = useState([])
  // State to hold the current page number, defaulting to 1 or a value from URL params
  const [page, setPage] = useState(parseInt(router.query.page) || 1)
  // Total number of pages, given 127 files with 25 items each
  const totalPages = 127
  const loader = useRef(null)
  useEffect(() => {
    // Function to dynamically import the JSON data for the current page
    const fetchData = async () => {
      try {
        // Dynamically import the JSON file based on the current page
        const result = await import(`../public/content/scam/page_${page}.json`)
        setData((prevData) => [...prevData, ...result.data]) // Merge the new data with existing data
      } catch (error) {
        console.error("Failed to fetch data", error)
        setData([])
      }
    }

    fetchData()
  }, [page]) // Re-run the effect if the page number changes

  useEffect(() => {
    const options = {
      root: null, // Indicates the viewport
      rootMargin: "50px",
      threshold: 1.0,
    }

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0]
      if (target.isIntersecting && page < totalPages) {
        setPage((prevPage) => prevPage + 1)
      }
    }, options)

    if (loader.current) {
      observer.observe(loader.current)
    }

    // Cleanup
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current)
      }
    }
  }, [loader, page])

  return (
    <div className="w-full flex flex-col">
      <div className="w-full relative  bg-primary text-white  ">
        <div className="xl:max-w-7xl max-w-2xl  mx-auto items-center w-full  gap-2 xl:py-20 pt-10 pb-20  flex xl:flex-row flex-col">
          <div className="items-center  w-full gap-4 pt-10 pb-5  px-5 xl:px-0 flex flex-col  ">
            <h1 className="text-center  xl:text-[72px] md:text-[64px] text-[52px]   font-extrabold font-raleway xl:leading-[80px] leading-tight">
              <span className="text-[#e22020] ">
                Black listed companies
                <br className="hidden xl:flex" />
              </span>{" "}
              & websites
            </h1>
            <p
              className={`text-center  sm:text-[20px] text-[16px] max-w-xl  font-normal font-rubik`}
            >
              Below is a list of companies & websites that have been flagged as
              scams or fraudulent by us or official regulatory bodies of various
              countries. Feel free to search this database to determine if you
              have encountered any of these dubious entities.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-5 xl:px-0 justify-center gap-10 mt-20 mb-20">
        {/* Your content rendering logic here */}
        {data.map((article, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col   border shadow-lg max-w-6xl"
          >
            {/* Render your article data here */}
            <div className="md:min-w-[15%] md:w-[15%] flex items-center justify-center w-full">
              {article.logo && (
                <img
                  src={article.logo}
                  alt=""
                  className=" w-full h-auto object-contain"
                />
              )}
              {!article.logo && (
                <div className="w-32 h-32 flex items-center justify-center bg-gray-100">
                  <p className="text-center">{article.name}</p>
                </div>
              )}
            </div>
            <div className="flex flex-col items-start justify-center md:px-6 p-6">
              <h2 className="flex md:flex-row flex-col gap-3 font-bold font-raleway text-xl">
                <span>{article.name}</span>
                <span>{article.website}</span>
              </h2>
              <p className="md:mt-0 mt-2">{article.short_description}</p>
            </div>
            <Link
              href={"/contact"}
              className="bg-primary md:w-[20%] md:min-w-[20%] w-full p-8 md:p-0 text-white font-bold font-raleway items-center justify-center flex text-center"
            >
              Get you money back
            </Link>
          </div>
        ))}

        <div ref={loader} style={{ height: "20px", margin: "10px" }}>
          {page < totalPages && <p>Loading more...</p>}
        </div>
      </div>
    </div>
  )
}

export default Scams
