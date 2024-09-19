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
    <div className="w-full items-center flex flex-col relative px-2 md:px-40">
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
              <div>
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
