"use client";
import { ArrowLeft, ArrowUp, Home } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { ChapterContainerSheet } from "./ChapterContainerSheet";
// import { Button } from "./ui/button";
import ChapterChange from "./ChapterChange";

const ReadHeader = ({
  chapterNo,
  chapterTitle,
  id,
  Sheet,
}: {
  chapterNo: number;
  chapterTitle: string;
  id: string;
  Sheet: React.ComponentType<{ id: string }> | React.ReactNode;
}) => {
  const [hidden, setHidden] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed   z-10 ">
      <div
        className="w-screen  top-0   transition-transform "
        style={{ transform: hidden ? "translateY(-100%)" : "translateY(0%)" }}
      >
        <nav className="flex justify-between w-full items-center px-5 gap-10">
          <div className="flex gap-2">
            <Link href={`/novel/${id}`}>
              <ArrowLeft />
            </Link>
            <Link href="/">
              <Home />
            </Link>
          </div>

          <div className=" bg-muted px-2 max-md:text-sm text-center py-1 rounded-full my-5 line-clamp-2 ">
            Chapter {chapterNo}: {chapterTitle}
          </div>
          {typeof Sheet === "function" ? <Sheet id={id} /> : Sheet}
        </nav>
      </div>
      <div
        className="w-fit fixed bottom-0 z-10 right-10 transition-transform flex justify-end gap-2"
        style={{ transform: hidden ? "translateY(200%)" : "translateY(0%)" }}
      >
        <ChapterChange id={id} no={chapterNo} />
      </div>
    </div>
  );
};

export default ReadHeader;
