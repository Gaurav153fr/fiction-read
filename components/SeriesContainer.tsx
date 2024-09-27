import { getAllSeries } from "@/lib/Series/seriesController";
import React from "react";
import SeriesCard from "./SeriesCard";
import Link from "next/link";

const SeriesContainer = async () => {
  const data = await getAllSeries();
  console.log(data);

  return (
    <section className="grid grid-flow-col w-full gap-5 max-md:grid-flow-row">
      {data &&
        data.map((e) => (
          <Link href={`/novel/${e._id}`} key={e._id} className=" h-52 w- max-md:w-full">

            <SeriesCard series={e} />
          </Link>
        ))}
    </section>
  );
};

export default SeriesContainer;
