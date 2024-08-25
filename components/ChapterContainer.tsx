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
const ChapterContainer = async ({
  id,
  isSheet,
}: {
  id: string;
  isSheet: boolean;
}) => {
  console.log(id, "kk");

  const chapters = await getAllChapter(id);
  if (chapters == null) return <div>no chapters</div>;

  const premiumChapter = chapters.filter((e) => e.premium == true);
  const freeChapter = chapters.filter((e) => e.premium == false);
  dayjs.extend(relativeTime);
  return (
    <div className=" w-full ">
      {chapters.length > 0 ? (
        <div>
          {isSheet ? (
            <div>
              {chapters.map((e) => (
                <>
                  <Link
                    key={e.id}
                    href={`/chapter/${e.id}?n=${e.series}`}
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
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="w-full   ">
                  <AccordionTrigger className="flex  w-full  p-3 h-32 ">
                    <div className=" overflow-hidden  aspect-square  flex h-full relative ">
                      <img
                        src={
                          premiumChapter.length > 0
                            ? premiumChapter[0].thumbnail
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
                        {premiumChapter.length} Chapters
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ScrollArea className="border-l-4 border-blue-600">
                      {premiumChapter.length > 0 &&
                        premiumChapter.map((e) => (
                          <>
                            <Link
                              key={e.id}
                              href={`/chapter/${e.id}?n=${e.series}`}
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
                {freeChapter.length > 0 && (
                  <AccordionItem value="item-2" className="w-full h-32  ">
                    <AccordionTrigger className="flex  w-full h-full p-3  ">
                      <div className=" overflow-hidden  aspect-square  flex h-full  ">
                        <img
                          src={freeChapter[0].thumbnail}
                          alt=""
                          className="h-full object-cover w-full rounded-xl"
                        />
                      </div>

                      <div className="flex  h-full flex-col ml-10 justify-center">
                        <span className="font-bold text-lg">Free</span>
                        <span className="text-muted-foreground">
                          {freeChapter.length} Chapters
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ScrollArea className="border-l-4 border-blue-600">
                        {freeChapter.map((e) => (
                          <>
                            <Link
                              key={e.id}
                              href={`/chapter/${e.id}?n=${e.series}`}
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
                )}
              </Accordion>
            </div>
          )}
        </div>
      ) : (
        <>No novel with this f***ing id</>
      )}
    </div>
  );
};

export default ChapterContainer;
