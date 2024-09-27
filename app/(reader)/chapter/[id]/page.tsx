import BuyPremium from "@/components/BuyPremium";
import { ChapterContainerSheet } from "@/components/ChapterContainerSheet";
import ReadEditor from "@/components/ReadEditor";
import ReadHeader from "@/components/ReadHeader";
import { getChapterById } from "@/lib/Chapter/chapterController";

interface Params {
  id: string;
}
const Page = async ({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: any;
}) => {
  const series_id = searchParams.n;
  const chapter = await getChapterById(params.id);

  return (
    <div className="items-center flex flex-col relative w-screen overflow-x-hidden">
      {chapter ? (
        <>
          <ReadHeader
            chapterNo={chapter.no}
            chapterTitle={chapter.title}
            id={series_id}
            Sheet={<ChapterContainerSheet id={series_id} />}
          />
          <main className="mt-20 px-2">
            {chapter.premium ? (
              <div>
                <BuyPremium id={params.id} content={chapter.content} />
              </div>
            ) : (
              <div className="w-full" >
                <ReadEditor content={chapter.content} />
              </div>
            )}
          </main>
        </>
      ) : (
        <>No chapter available</>
      )}
    </div>
  );
};

export default Page;
