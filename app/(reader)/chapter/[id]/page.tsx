
import BuyPremium from "@/components/BuyPremium";
import ChapterChange from "@/components/ChapterChange";
import { ChapterContainerSheet } from "@/components/ChapterContainerSheet";
import ReadEditor from "@/components/ReadEditor";
import ReadHeader from "@/components/ReadHeader";
import ReadingSetting from "@/components/ReadingSetting";
import { getChapterById } from "@/lib/Chapter/chapterController";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface params {
  id: string;
}
const Page = async ({
  params,
  searchParams,
}: {
  params: params;
  searchParams: any;
}) => {


  const series_id = searchParams.n;
 

  const chapter = await getChapterById(params.id);

  return (
    <div className="w-full items-center flex flex-col relative px-2 md:px-40">
     
      {chapter?(<>
        <ReadHeader chapterNo={chapter.no} chapterTitle={chapter.title} id={series_id} Sheet={<ChapterContainerSheet id={series_id}/>}/>
        <main className="mt-20">
      {chapter.premium ? (
        <div>
          <BuyPremium id={params.id} content={chapter.content} />
        </div>
      ) : (
        <div><ReadEditor content={chapter.content}/></div>
      )}</main></>):(<>No chapter</>)}
          

    </div>
  );
};

export default Page;
