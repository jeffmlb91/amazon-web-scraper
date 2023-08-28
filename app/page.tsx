import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <div className="flex fex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20"/>

        <h1 className="text-3xl mt-2 text-center text-black font-bold opacity-70 mb-5">Welcome to the Amazon Web Scraper</h1>

        <h2 className="text-lg utalic text-center text-black/50">Save Cost. Web Scraping saves cost and time as it reduces the time involved in the data extraction task. </h2>

        <h3 className="text-lg text-center italic text-black/50">https://github.com/jeffmlb91</h3>
      </div>
    </div>
  )
}
