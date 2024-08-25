import { CarouselSize } from "@/components/Carousal";
import { GenreTabs } from "@/components/GenreTabsContainer";
import LatestChapterContainer from "@/components/LatestChapterContainer";

import SeriesContainer from "@/components/SeriesContainer";

export default function Home() {
  return (
    <main className="flex bg-[#0f0f0f] min-h-screen flex-col items-center justify-between px-2 md:px-24 ">
      <h3 className="self-start my-5 font-bold text-lg text-yellow-500">Featured</h3>
      <CarouselSize />
      <h3 className="self-start my-5 font-bold text-lg">Latest Chapters</h3>
      <LatestChapterContainer />
      <h3 className="self-start my-5 font-bold text-lg">Latest Series</h3>
      <SeriesContainer />
      <h3 className="self-start my-5 font-bold text-lg ">By Genre</h3>
      <GenreTabs />
    </main>
  );
}
