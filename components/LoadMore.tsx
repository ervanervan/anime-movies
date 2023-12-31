"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import AnimeCard from "./AnimeCard";

import { fetchAnime } from "@/app/action";
import { useInView } from "react-intersection-observer";

let page = 2;

export type AnimeCard = JSX.Element;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 md:gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain w-8 md:w-11 lg:w-14"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
