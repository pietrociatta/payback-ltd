import React, { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"

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
      rootMargin: "400px",
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
    <div className="flex flex-col items-center justify-center gap-10 mt-20 mb-20">
      {/* Your content rendering logic here */}
      {data.map((article, index) => (
        <div key={index} className="flex border shadow-lg max-w-4xl">
          {/* Render your article data here */}
          <div className="w-max">
            {article.logo && (
              <img
                src={article.logo}
                alt=""
                className="w-40 h-40 object-contain"
              />
            )}
            {!article.logo && (
              <div className="w-32 h-32 flex items-center justify-center bg-gray-100">
                <p className="text-center">{article.name}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col items-start justify-center px-4">
            {" "}
            <h2 className="flex gap-3 font-bold font-raleway text-xl">
              <span>{article.name}</span>-<span>{article.website}</span>
            </h2>
            <p>{article.short_description}</p>
          </div>
        </div>
      ))}

      <div ref={loader} style={{ height: "20px", margin: "10px" }}>
        {page < totalPages && <p>Loading more...</p>}
      </div>
    </div>
  )
}

export default Scams
