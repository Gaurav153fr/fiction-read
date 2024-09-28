import { getAllSeries } from "@/lib/Series/seriesController";
import React from "react";
import SeriesCard from "./SeriesCard";
import Link from "next/link";

const SeriesContainer = async () => {
  const data = await getAllSeries();
  console.log(data);

  return (
    <section className="grid grid-cols-2 w-full gap-5 max-md:grid-cols-1">
      {data &&
        data.map((e) => (
          <Link href={`/novel/${e._id}`} key={e._id} className="  max-md:w-full">

            <SeriesCard series={e} />
          </Link>
        ))}
    </section>
  );
};

export default SeriesContainer;
