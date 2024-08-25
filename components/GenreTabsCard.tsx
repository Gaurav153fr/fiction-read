import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getSeriesByGenre } from "@/lib/Series/seriesController";
import Link from "next/link";

export async function GenreTabsCard({ genre }: { genre: string }) {
  const series = await getSeriesByGenre(genre);
  console.log(series);

  return (
    <div className="">
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative "
      >
        <CarouselContent className="basis-auto  outline-none ">
          {series &&
            series.map((e, index) => (
              <CarouselItem
                key={index}
                className="outline-none basis-auto"
              >
                <Link href={`/novel/${e.id}`} className="outline-none">
                  <Card className=" w-44 max-md:w-36 overflow-hidden max-md:h-[17rem] h-72 border hover:bg-slate-900 hover:border-slate-600 transition-all">
                    <div className="flex justify-center ">
                      <img
                        src={e.url}
                        alt="image"
                        className="object-cover w-full h-52  rounded-md"
                      />
                    </div>
                    <CardFooter className=" text-lg items-start   w-full flex flex-col mt-1 p-1">
                      <div className="text-lg items-start   w-full flex flex-col mt-1 p-1 ">
                        <span className=" text-white text-center text-sm max-md:text-[.8rem] font-semibold line-clamp-2">
                          {e.title}
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="absolute -bottom-10 left-1/2 ">
          <CarouselPrevious className="   bg-black shadow-lg rounded-full p-2">
            &lt;
          </CarouselPrevious>
          <CarouselNext className=" bg-black shadow-lg rounded-full p-2">
            &gt;
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}
