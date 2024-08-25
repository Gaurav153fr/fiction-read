"use client";

import React, { Dispatch, useEffect, useState } from "react";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/button";

const RichTextEditor = ({ onValueChange }: { onValueChange:(value:string)=>void }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "", // Initial content
  
  });

  const [isEditable, setIsEditable] = useState(true);

  useEffect(() => {
    if (editor) {
    
      // Log content whenever the editor updates
      const handleUpdate = () => {
        const html = editor.getHTML();
      
        console.log("Editor HTML content:", html);
        onValueChange(html.toString()); // Update parent component with content
      };

      // Set up onUpdate handler
      editor.on('update', handleUpdate);

      // Clean up listener on component unmount
      return () => {
        editor.off('update', handleUpdate);
      };
    }
  }, [isEditable, editor]);

  return (
    <>
      <div className="control-group ">
        
      </div>

      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="bubble-menu">
            <Button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "is-active" : ""}
            >
              Bold
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "is-active" : ""}
            >
              Italic
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive("strike") ? "is-active" : ""}
            >
              Strike
            </Button>
          </div>
        </BubbleMenu>
      )}

      <EditorContent
        editor={editor}
        className="w-full h-60 placeholder:text-gray-600 bg-slate-900 "
        placeholder="start writing from here..."
      />
    </>
  );
};

export default RichTextEditor;
