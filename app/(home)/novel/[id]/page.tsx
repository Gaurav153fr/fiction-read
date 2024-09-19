import ChapterContainer from "@/components/ChapterContainer";
import { Button, buttonVariants } from "@/components/ui/button";
import { getSeriesById } from "@/lib/Series/seriesController";
import dayjs from "dayjs";
import { Calendar, CircleDashed, Eye, Pencil, Star } from "lucide-react";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import chapterModel from "@/lib/Chapter/chapterModel";
import Link from "next/link";
interface params {
  id: string;
}
const Page = async ({ params }: { params: params }) => {
  const series = await getSeriesById(params.id);
const firstChapter = await chapterModel.findOne({series:params.id,no:1})
  dayjs.extend(relativeTime);

  return (
    <div className=" h-fit">
      {series && (
        <div className="flex h-fit max-md:flex-col">
          <div className="flex flex-col h-full mx-10 gap-3  p-4  rounded-md my-5">
            <div className=" h-64 w-full  py-5">
              <img
                src={series.url}
                alt="main image"
                className="object-cover h-full rounded-lg m-auto "
              />
            </div>
            <h2 className="font-bold text-xl font-sans text-center ">
              {series.title}
            </h2>
           <Link href={`/chapter/${firstChapter.id}?n=${params.id}`} className={buttonVariants({variant: 'default'})} >Start Reading</Link>
          </div>
          <div className="h-full w-full gap-3 flex flex-col py-10">
            <div className="p-4  text-wrap bg-slate-900  rounded-lg mx-2">
              {series.story}
            </div>
            <div className="p-4  text-wrap bg-slate-900 rounded-lg mx-2 gap-4 flex flex-wrap">
              <span className="w-fit bg-fuchsia-900 border border-fuchsia-600 rounded-full flex px-2 items-center  ">
                {series.views>1000? series.views/1000+"k":series.views} <Eye className="w-3 h-3 ml-2" />
              </span>
              <span className="w-1 h-1 text-md bg-slate-50 rounded-full self-center mx-1 max-md:hidden"></span>
              <span className="w-fit bg-yellow-900 border border-yellow-600 rounded-full flex px-2 items-center  ">
                {series.rating} <Star className="w-3 h-3 ml-2" />
              </span>
              <span className="w-1 h-1 text-md bg-slate-50 rounded-full self-center mx-1 max-md:hidden"></span>

              <span className="w-fit bg-pink-900 border border-pink-600 rounded-full flex px-2 items-center  ">
                {series.author} <Pencil className="w-3 h-3 ml-2" />
              </span>
              <span className="w-1 h-1 text-md bg-slate-50 rounded-full self-center mx-1 max-md:hidden"></span>

              <span className="w-fit bg-blue-900 border border-blue-600 rounded-full flex px-2 items-center  ">
                {dayjs(series.createdAt.toString()).format('YYYY-MM-DD')}
                <Calendar className="w-3 h-3 ml-2" />
              </span>
             


            </div>
            <div className="p-4  text-wrap bg-slate-900  rounded-lg mx-2 gap-2 flex">
            <span className="w-fit bg-green-900 border border-green-600 rounded-full flex px-2 items-center  ">
  {series.status} <CircleDashed className="w-3 h-3 ml-2" />
</span>
              {series.genres.map((e: string, i: string) => (
                <span key={i} className="bg-slate-600 p-1 rounded-lg">
                  {e[0].toUpperCase() + e.slice(1)}
                </span>
              ))}
            </div>
            <div className="p-4   my-2 rounded-lg mx-2 ">
              <ChapterContainer id={params.id} isSheet={false}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
