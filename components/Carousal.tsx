import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getFeatured } from "@/lib/featured/featuredController";
import Link from "next/link";

export async  function CarouselSize() {
  const data = await getFeatured()
  if(data){
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className="p-0">
        {data.data.map((e:any, index:string) => (
          <CarouselItem key={index} className="h-fit p-0 w-full  ">
            <Link className="p-0" href={`/novel/${e.id}`}>
              <Card className=" p-0 h-fit">
                <CardContent className="flex   relative">
                  <img
                    src={e.url}
                    alt=""
                    className="w-full"
                  />
            
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-md:hidden" />
      <CarouselNext className="max-md:hidden" />
    </Carousel>
  );}
  else return <div>no featured data</div>
}
