"use client";
/* eslint-disable react/no-unescaped-entities */
import { getAllChapter } from "@/lib/Chapter/chapterController";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "./ui/separator";
import { LockKeyhole } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
const ChapterContainer = ({
  id,
  isSheet,
}: {
  id: string;
  isSheet: boolean;
}) => {
  const [chapters, setChapters] = useState<chapterType[]>([]);
  const [premiumChapters, setPremiumChapters] = useState<chapterType[]>([]);
  const [freeChapters, setFreeChapters] = useState<chapterType[]>([]);
  useEffect(() => {
    const handleAsync = async () => {
      const chapters = await getAllChapter(id);
      if (chapters == null) return;
      const premiumChapter = chapters.filter((e) => e.premium == true);
      const freeChapter = chapters.filter((e) => e.premium == false);

      setChapters(chapters);
      setPremiumChapters(premiumChapter);
      setFreeChapters(freeChapter);
    };

    handleAsync();
  });

  dayjs.extend(relativeTime);

  return (
    <div className=" w-full h-fit ">
      {chapters.length > 0 ? (
        <div>
          {isSheet ? (
            <div>
              {chapters.map((e) => (
                <>
                  <Link
                    key={e._id}
                    href={`/chapter/${e._id}?n=${e.series}`}
                    className="flex  flex-col px-2 py-3 hover:bg-slate-900"
                  >
                    <span className="text-muted-foreground ">
                      {" "}
                      Chapter {e.no}
                    </span>
                    <span className="font-bold text-lg">{e.title}</span>
                    <span className="text-muted-foreground">
                      {dayjs(e.createdAt.toString()).fromNow()}
                    </span>
                  </Link>
                  <Separator />
                </>
              ))}
            </div>
          ) : (
            <div >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="w-full   ">
                  <AccordionTrigger className="flex  w-full  py-3 h-32 ">
                    <div className=" overflow-hidden  aspect-square  flex h-full relative ">
                      <img
                        src={
                          premiumChapters.length > 0
                            ? premiumChapters[0].thumbnail
                            : ""
                        }
                        alt=""
                        className="h-full object-cover w-full rounded-xl"
                      />
                      <span className="absolute top-0 bg-black/50 w-full h-full rounded-xl">
                        <LockKeyhole className="m-auto h-full" />
                      </span>
                    </div>

                    <div className="flex  h-full flex-col ml-10 justify-center">
                      <span className="font-bold text-lg">Premium</span>
                      <span className="text-muted-foreground">
                        {premiumChapters.length} Chapters
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ScrollArea className="border-l-4 border-yellow-600">
                      {premiumChapters.length > 0 &&
                        premiumChapters.map((e) => (
                          <>
                            <Link
                              key={e._id}
                              href={`/chapter/${e._id}?n=${e.series}`}
                              className="flex  flex-col px-2 py-3 hover:bg-slate-900"
                            >
                              <span className="text-muted-foreground">
                                {" "}
                                Chapter {e.no}
                              </span>
                              <span className="font-bold text-lg">
                                {e.title}
                              </span>
                              <span className="text-muted-foreground">
                                {dayjs(e.createdAt.toString()).fromNow()}
                              </span>
                            </Link>
                            <Separator />
                          </>
                        ))}
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>
                <Separator />
                {freeChapters.length > 0 && (
                  <AccordionItem value="item-2" className="w-full h-32  ">
                    <AccordionTrigger className="flex  w-full h-full py-3  ">
                      <div className=" overflow-hidden  aspect-square  flex h-full  ">
                        <img
                          src={freeChapters[0].thumbnail}
                          alt=""
                          className="h-full object-cover w-full rounded-xl"
                        />
                      </div>

                      <div className="flex  h-full flex-col ml-10 justify-center">
                        <span className="font-bold text-lg">Free</span>
                        <span className="text-muted-foreground">
                          {freeChapters.length} Chapters
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="h-fit">
                    <ScrollArea className="border-l-4 border-yellow-600 h-96 overflow-y-auto">
  {freeChapters.map((e) => (
    <>
      <Link
        key={e._id}
        href={`/chapter/${e._id}?n=${e.series}`}
        className="flex flex-col px-2 py-3 hover:bg-slate-900"
      >
        <span className="text-muted-foreground">Chapter {e.no}</span>
        <span className="font-bold text-lg">{e.title}</span>
        <span className="text-muted-foreground">
          {dayjs(e.createdAt.toString()).fromNow()}
        </span>
      </Link>
      <Separator />
    </>
  ))}
</ScrollArea>

                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </div>
          )}
        </div>
      ) : (
        <>Can't find any chapter for this series</>
      )}
    </div>
  );
};

export default ChapterContainer;
