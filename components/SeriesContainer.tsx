import { getAllSeries } from "@/lib/Series/seriesController";
import React from "react";
import SeriesCard from "./SeriesCard";
import Link from "next/link";

const SeriesContainer = async () => {
  const data = await getAllSeries();
  console.log(data);
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 self-start w-full gap-2 ">
      {data.map((e) => (
        <Link href={`/novel/${e._id}`} key={e._id} >
          <SeriesCard series={e} />
        </Link>
      ))}
    </section>
  );
};

export default SeriesContainer;
