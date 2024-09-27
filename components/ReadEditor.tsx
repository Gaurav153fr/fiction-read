/* eslint-disable react/no-unescaped-entities */
"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import ReadingSetting from "./ReadingSetting";
import PubfutureAd from "./PubFuture";
import GoogleAd from "./PubFuture";
import DisqusComponent from "./Disqus";

const ReadEditor = ({ content }: { content: string }) => {
  const url = window.location.href;
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
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Comforter+Brush&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Comforter+Brush&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
      </style>
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
          className="w-fit  "
          style={{
            fontSize: `${fontSize}px`,
            fontFamily: fontFamily,
            lineHeight: `${lineHeight}`,
          }}
        />
      </div>
      <DisqusComponent
        article={{ url, id: id, title: content.substring(0, 100) }}
      />
    </div>
  );
};

export default ReadEditor;
