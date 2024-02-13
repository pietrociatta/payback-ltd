import React, { useEffect, useState } from "react"
import content from "../../public/content/content.json"
import { Calendar } from "lucide-react"
import { useRouter } from "next/router"

const Blog = () => {
  const router = useRouter()
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 12 // Limit of articles per page
  const [filteredArticles, setFilteredArticles] = useState([])
  const [paginatedArticles, setPaginatedArticles] = useState([])

  useEffect(() => {
    const categoriesSet = new Set()
    content?.articles?.forEach((article) => {
      article?.tags?.forEach((tag) => categoriesSet.add(tag))
    })
    setCategories(["All", ...Array.from(categoriesSet)])
  }, [])

  useEffect(() => {
    let filtered
    if (selectedCategory === "All") {
      filtered = content.articles
    } else {
      filtered = content.articles.filter((article) =>
        article.tags?.includes(selectedCategory)
      )
    }

    setFilteredArticles(filtered)
    // Reset to first page when category changes
    setCurrentPage(1)
  }, [selectedCategory])

  useEffect(() => {
    // Calculate the index of the last article in the current page
    const indexOfLastArticle = currentPage * articlesPerPage
    // Calculate the index of the first article in the current page
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
    // Set the paginated articles for the current page
    const currentArticles = filteredArticles.slice(
      indexOfFirstArticle,
      indexOfLastArticle
    )
    setPaginatedArticles(currentArticles)
  }, [currentPage, filteredArticles])

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-20 mb-20">
      <h1 className="text-primary xl:text-[56px] mb-10 text-[45px] leading-none text-center font-raleway font-bold">
        Articles by Topic
      </h1>
      <div className="md:hidden bg-primary w-[93%]  px-5">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="  !bg-primary text-white outline-none py-3 w-full"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className=" w-[90%] max-w-5xl  md:flex hidden overflow-x-scroll  justify-start items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex items-center w-full min-w-max px-4 justify-center py-5   border  border-primary cursor-pointer ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-transparent"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 px-5 xl:px-0 xl:grid-cols-3 grid-cols-1 max-w-7xl mx-auto gap-10">
        {paginatedArticles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer"
            onClick={() => router.push(article.path)}
          >
            <img
              src={`/content/images/${article.slug}.jpg`}
              alt=""
              className="bg-[#f2f3f0] aspect-video object-cover"
            />
            <h3 className="font-raleway font-medium mt-6 text-gray-600 items-center flex gap-2 text-[16px]">
              <Calendar size={18} />
              {article.date}
            </h3>
            <h1 className="font-bold font-raleway mt-2 text-[20px]">
              {article.title}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex items-center sm:justify-center overflow-x-scroll w-full px-5 ">
        {[
          ...Array(Math.ceil(filteredArticles.length / articlesPerPage)).keys(),
        ].map((number) => (
          <button
            className={`px-6 py-4 bg-[#f4f4f4] ${
              currentPage === number + 1
                ? "border-b-[5px] border-secondary"
                : "border-b-[5px] border-transparent"
            }`}
            key={number + 1}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Blog
