import { ajuBajuChapter } from "@/lib/Chapter/chapterController";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";

const ChapterChange =  ({ id, no }: { id: string; no: number }) => {
  const [data, setData] = useState<null | string[]>(null);

  useEffect(() => {
    const getChapters = async () => {
      const chapters = await ajuBajuChapter(id, no);
      setData(chapters);
    };

    getChapters();
  }, []);

  return (
    <div className="bg-muted rounded-full flex mb-5 ">
      {data && data[0] ? (
        <Link
          href={`/chapter/${data[0]}?n=${id}`}
          className={buttonVariants({ variant: "link" })}
        >
          Prev
        </Link>
      ) : (
        <Button disabled variant="link">
          Prev
        </Button>
      )}
      <Separator orientation="vertical" />
      {data && data[1] ? (
        <Link
          href={`/chapter/${data[1]}?n=${id}`}
          className={buttonVariants({ variant: "link" })}
        >
          Next
        </Link>
      ) : (
        <Button disabled variant="link">
          Next
        </Button>
      )}
    </div>
  );
};

export default ChapterChange;
