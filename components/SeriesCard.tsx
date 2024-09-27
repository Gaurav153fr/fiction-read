import { getAllChapter } from "@/lib/Chapter/chapterController";
import { BookMinusIcon, Eye, Star } from "lucide-react";
import React from "react";

const SeriesCard = async({ series }: { series: seriesType }) => {
  const chapters = await getAllChapter(series._id) 
  
  
  return (
    <div className="hover:bg-slate-900 hover:border-slate-600 border  h-full p-2 flex gap-5 w-full rounded-md ">
      <div className=" h-full w-40   ">
        <img
          src={series.url}
          alt="series image"
          className="object-cover w-full  h-full rounded-md bg-muted aspect-auto"
        />
      </div>
      <div className="w-full py-3 flex flex-col ">
        <div className=" text-[1.3rem] line-clamp-1 mb-5">{series.title}</div>
        <div className="flex gap-2">
        <div className="flex gap-1 ">
        <span className="w-fit  border-sky-600 rounded-full flex px-2 items-center  bg-sky-900 text-sm">{series.genres[0] } </span>
        <span className="w-1 h-1 text-md bg-slate-50 rounded-full self-center mx-1 max-md:hidden "></span>

        <span className="w-fit bg-fuchsia-900 border border-fuchsia-600 rounded-full flex px-2 items-center text-sm ">{series.views>1000? (series.views/1000).toFixed(2)+"k":series.views } <Eye className="w-3 h-3 ml-2"/></span>
        <span className="w-1 h-1 text-md bg-slate-50 rounded-full self-center mx-1 max-md:hidden"></span>
          <span className="w-fit bg-yellow-900 border border-yellow-600 rounded-full flex px-2 items-center text-sm ">{series.rating } <Star className="w-3 h-3 ml-2"/></span>

         
        </div>
       
      </div>
      <div className="flex gap-2 mt-2">
      <div className="flex gap-2 bg-blue-900 border border-blue-600 w-fit rounded-full px-2 my-2">
      {chapters &&(<> <BookMinusIcon/> {" "} {chapters.length} {" "}</>)}Chapters</div>
      <div className="flex gap-2 bg-green-900 border border-green-600 w-fit rounded-full px-2 my-2">
      {series.status}</div>
      </div>
      </div>
    </div>
  );
};

export default SeriesCard;
