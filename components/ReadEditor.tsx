/* eslint-disable react/no-unescaped-entities */
"use client";
import '@/components/font.css'
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import ReadingSetting from "./ReadingSetting";
import PubfutureAd from "./PubFuture";
import GoogleAd from "./PubFuture";
import DisqusComponent from "./Disqus";

const ReadEditor = ({ content }: { content: string }) => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const id = url.substring(url.lastIndexOf("/") + 1);
  const [fontSize, setFontSize] = useState(16);

  const [fontFamily, setFontFamily] = useState("");
  const [lineHeight, setLineHeight] = useState(2);
  const editor = useEditor({
    extensions: [StarterKit],
    content: content, // Initial content
  });

  editor?.setEditable(false);

  useEffect(() => {
    try {
      const fsize = localStorage.getItem("fontSize");
      const ffamily = localStorage.getItem("fontFamily");
      const fline = localStorage.getItem("lineHeight");
      fsize && setFontSize(Number(fsize));
      ffamily && setFontFamily(ffamily);
      fline && setLineHeight(Number(fline));
    } catch {
      localStorage.setItem("fontFamily", "sans-serif");
      localStorage.setItem("fontSize", "16");
      localStorage.setItem("lineHeight", "2");
    }
  }, []);

  return (
    <div>
      
      <div className="">
        <GoogleAd />
      </div>
      <div className="w-full px-5 ">
        <ReadingSetting
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
          lineHeight={lineHeight}
          setLineHeight={setLineHeight}
        />

        <EditorContent
          editor={editor}
          className="w-fit max-w-[1500px] "
          style={{
            fontSize: `${fontSize}px`,
            fontFamily: fontFamily,
            lineHeight: `${lineHeight}`,
          }}
        />
      </div>
      <div className='h-10 w-full  '> </div>
      <GoogleAd />
      <div className='p-10 bg-muted rounded-md'>
      <h3 className='self-start my-5 ml-10 font-bold text-xl '>Comments</h3>
      <DisqusComponent
        article={{ url, id: id, title: content.substring(0, 100) }}
      /></div>
    </div>
  );
};

export default ReadEditor;
