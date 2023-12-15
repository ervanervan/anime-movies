import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";

async function Home() {
  const data = await fetchAnime(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
        <div className="flex items-center justify-start rounded-lg py-1 px-3 gap-2 bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            placeholder="search..."
            className="w-full md:w-60 py-2 px-1 focus:outline-none bg-gray-800"
          />
        </div>
      </div>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
