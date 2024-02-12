import React, { useEffect, useState } from "react"
import file from "../../public/content/articles.json"
import { useRouter } from "next/router"
import Link from "next/link"

const BlogPost = () => {
  const router = useRouter()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query
      const foundArticle = file.articles.find((article) => article.slug === id)
      if (foundArticle) {
        console.log(foundArticle.content)
        setArticle(foundArticle)
      }
    }
  }, [router.isReady, router.query]) // Added router.query to dependencies

  if (!article) return <div>Loading...</div>

  return (
    <div className="flex flex-col px-5 lg:px-0 w-full">
      <p className="flex max-w-7xl pt-10 font-poppins gap-2 mx-auto w-full">
        <Link href="/">Home</Link>/<Link href="/blogs">Blog</Link>/{" "}
        <span className="truncate">
          <Link href="/">{article.title}</Link>
        </span>
      </p>

      <div className="flex relative w-full lg:flex-row flex-col max-w-5xl gap-10 mx-auto ">
        <div className="lg:w-[60%] w-full md:pt-20 pt-10 flex flex-col gap-5">
          <h1 className="font-bold leading-tight font-raleway text-4xl">
            {article.title}
          </h1>
          <p className="text-black w-max px-4 py-1 bg-gray-200 mt-3">
            {article?.tags[0]}
          </p>
          <img src={`/content/images/${article.slug}.jpg`} alt="" />
          <div className="w-full h-[1px] bg-gray-600" />
          <p className="text-gray-600">{article.date}</p>
          <div className="w-full h-[1px] bg-gray-600" />
          <div
            dangerouslySetInnerHTML={{
              __html: article.content.replace(/<img[^>]*>/g, ""),
            }}
            className="blog-content "
          />
        </div>
        <div className="lg:w-[40%] w-full flex h-max flex-col sticky top-20  pt-14">
          <div className="bg-primary  px-6 py-10 flex flex-col items-start gap-3 text-white">
            <h2 className="font-bold text-xl">Let's get your money back!</h2>
            <p>
              If you’ve lost money to scammers, contact us now and we’ll work
              with you to get your money back!
            </p>
            <button
              type="submit"
              className="bg-secondary w-full max-w-md font-semibold text-primary px-14 py-3"
            >
              Get a free consultation
            </button>
          </div>
          <div className="bg-[#f4f4f4]   text-primary flex items-center justify-center font-bold text-lg py-3 gap-2 w-full">
            <img src="/logos/8.svg" alt="" className="" />
            <p>Money back guarantee</p>
          </div>
        </div>
      </div>
      <div className="xl:max-w-5xl max-w-4xl px-5 xl:px-0  mx-auto items-center w-full  gap-2 xl:py-28 py-10 flex xl:flex-row flex-col-reverse">
        <div className="items-center justify-center xl:items-start w-full gap-4 flex flex-col xl:w-[55%] ">
          <h1 className="text-center text-primary flex flex-col leading-tight xl:text-left xl:text-[40px] text-[30px]   font-extrabold font-raleway  ">
            Your money back guarantee
          </h1>

          <p
            className={`text-center xl:text-left  text-[16px] text-gray-600  font-normal font-poppins`}
          >
            The fund recovery process can be a lengthy one and requires
            perseverance. Therefore it is vital that our clients are ready for
            it and trust us every step of the way. So if for any reason you are
            doubtful, you can ask for a full refund within the first 14 business
            days of the process.*
          </p>
          <button
            type="submit"
            className="bg-transparent border border-primary font-semibold text-primary px-20 mt-4 py-3"
          >
            *Read Terms and Conditions
          </button>
        </div>
        <div className="items-end w-full     font-raleway text-opacity-0  xl:flex flex-col xl:w-[45%] p-5 ">
          <img
            src="/logos/19.svg"
            alt=""
            className="w-[50%] max-w-[200px] mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default BlogPost
