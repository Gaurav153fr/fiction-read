import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLatestChapters } from "@/lib/Chapter/chapterController";
import dayjs from "dayjs";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default async function LatestCHapterContainer() {
  const chapters = await getLatestChapters();
  if (chapters == null) return <div>no chapters</div>;

  const premium = chapters.filter((e) => e.premium);
  const free = chapters.filter((e) => !e.premium);
dayjs.extend(relativeTime)
  return (
    <Tabs defaultValue="Free" className="w-full self-start">
      <TabsList className="grid text-xs w-[170px] grid-cols-2 ">
        <TabsTrigger value="Free">Free</TabsTrigger>
        <TabsTrigger value="Premium">Paid</TabsTrigger>
      </TabsList>
      <TabsContent value="Free" >
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-full   "
      > <CarouselContent className="w-full h-fit gap-0 ">
          {free.map((e) => (
            <CarouselItem key={e.id} className=" basis-auto max-md:basis-auto  ">
            <Link  href={`/chapter/${e.id}?n=${e.series}`}>
            <Card className="max-md:w-32 w-44 p-0 hover:bg-slate-900 border hover:border-slate-600" >
            <div className=" w-full p-0 flex justify-center ">
                  <img
                    src={e.thumbnail}
                    alt="series image"
                    className="object-cover w-full max-md:h-44  h-52 rounded-md"
                  />
                </div>
                <CardFooter className=" text-xs items-start   w-full flex flex-col mt-1 p-1"><span className="text-sm">Chapter {e.no}</span><span></span><span className="line-clamp-1 text-[.7rem] text-muted-foreground">{dayjs(e.createdAt.toString()).fromNow()}</span></CardFooter>
              </Card>
            </Link></CarouselItem>
          ))}</CarouselContent>
        </Carousel>
      </TabsContent>
      <TabsContent value="Premium">
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-full "
      ><CarouselContent className="w-full h-fit ">
      {premium.map((e) => (
        <CarouselItem key={e.id} className=" relative basis-auto max-md:basis-auto  ">
        <Link  href={`/chapter/${e.id}?n=${e.series}`}>
          <Card className="max-md:w-32 w-44 p-0 hover:bg-slate-900 border hover:border-slate-600" >
          <span className="absolute top-2 left-6 bg-[#dc6126]  px-3 p-[.3rem] rounded-md text-xs shadow-lg text-[#f1b2b2] border border-orange-900 font-bold ">PAID</span>

            <div className=" w-full p-0 flex justify-center ">
              <img
                src={e.thumbnail}
                alt="series image"
                className="object-cover w-full max-md:h-44 h-52  rounded-md"
              />
            </div>
            <CardFooter className=" text-xs items-start   w-full flex flex-col mt-1 p-1"><span className="text-sm">Chapter {e.no}</span><span></span><span className="line-clamp-1 text-[.7rem] text-muted-foreground">{dayjs(e.createdAt.toString()).fromNow()}</span></CardFooter>
          </Card>
        </Link></CarouselItem>
      ))}</CarouselContent>
        </Carousel>
      </TabsContent>
    </Tabs>
  );
}
