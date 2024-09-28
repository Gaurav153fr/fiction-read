import { getAllChapter } from "@/lib/Chapter/chapterController";
import { BookMinusIcon, CircleDashed, Eye, Star } from "lucide-react";
import React from "react";

const SeriesCard = async ({ series }: { series: seriesType }) => {
  const chapters = await getAllChapter(series._id);

  return (
    <div className="hover:bg-slate-900 hover:border-slate-600 border p-2 flex gap-5 w-full rounded-md ">
      <div className=" h-[9rem] w-24  ">
        <img
          src={series.url}
          alt="series image"
          className="object-cover w-full  h-full rounded-md bg-muted aspect-auto"
        />
      </div>
      <div className="w-3/5 py-3 flex flex-col    ">
        <div className=" text-[1.3rem]  line-clamp-1 ">
          {series.title}
        </div>
        <div className="flex gap-1 mt-1 ">
          <div className="flex gap-2 flex-wrap  my-1 items-center ">
            <span className="w-fit  border-sky-600 rounded-full flex px-2 items-center  bg-sky-900 text-sm ">
              {series.genres[0]}{" "}
            </span> <span className="w-1 h-1 text-md bg-slate-50 rounded-full self-center mx-1 max-md:hidden"></span>
            <span className="w-fit bg-yellow-900 border border-yellow-600 rounded-full flex px-2 items-center text-sm  ">
              {series.rating} <Star className="w-3 h-3 ml-2" />
            </span>
            <span className="w-1 h-1 text-md bg-slate-50 rounded-full self-center mx-1 max-md:hidden "></span>

            <span className="w-fit bg-fuchsia-900 border border-fuchsia-600 rounded-full flex px-2 items-center text-sm ">
              {series.views > 1000
                ? (series.views / 1000).toFixed(2) + "k"
                : series.views}{" "}
              <Eye className="w-3 h-3 ml-2" />
            </span>
           
            {/* <span className="flex  bg-green-900 border border-green-600 w-fit rounded-full px-2  items-center justify-center text-sm" >
            {series.status}
          </span> */}
          </div>
        </div>
        <div className="flex gap-1 flex-wrap w-full justify-start my-2 ">
          <div className="flex gap-1 bg-blue-900 border border-blue-600 w-fit rounded-full px-2 py-1  flex-nowrap max-md:text-sm">
            {chapters && (
              <>
                {" "}
                <BookMinusIcon className="w-5 h-5" /> {chapters.length}{" "}
              </>
            )}
            Chapters
          </div>
          <span className="flex  bg-green-900 border border-green-600 w-fit rounded-full px-2  items-center justify-center text-sm" >
            {series.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;
