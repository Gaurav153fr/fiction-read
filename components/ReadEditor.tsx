/* eslint-disable react/no-unescaped-entities */
"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import ReadingSetting from "./ReadingSetting";

const ReadEditor = ({ content }: { content: string }) => {
  const [fontSize, setFontSize] = useState(16);

  const [fontFamily, setFontFamily] = useState("");
  const[lineHeight,setLineHeight] = useState(2)
  const editor = useEditor({
    extensions: [StarterKit],
    content: content, // Initial content
  });

  editor?.setEditable(false);

  return (
    <div>
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
        className="w-full  "
        style={{ fontSize: `${fontSize}px`,fontFamily:fontFamily,lineHeight:`${lineHeight}` }}
      />
    </div>
  );
};

export default ReadEditor;
