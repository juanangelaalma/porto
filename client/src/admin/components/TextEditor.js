import React, { useEffect, useRef, useState } from "react";
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import "../styles/text-editor.scss";

import { uploadImage } from "../api/image";
import { API_URL } from "../../constants";

export default ({ content, setContent }) => {
  const editor = useEditor({
    extensions: [StarterKit, Image]
  });

  const HtmlContent = editor?.getHTML();

  useEffect(() => {
    setContent({ ...content, body: HtmlContent ? HtmlContent : "" });
  }, [HtmlContent]);

  const addImage = (path) => {
    const url = API_URL + path;
    if(!(content.thumbnail)) {
      setContent({ ...content, thumbnail: url })
    }
    editor.chain().focus().setImage({ src: url }).run();
  };

  const handleUploadChange = async (e) => {
    try {
      const formData = new FormData();
      formData.append("thumbnail", e.target.files[0]);
      const response = await uploadImage(formData);
      const { path } = response.data;
      addImage(path);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-100">
      {editor && (
        <BubbleMenu
          className="bubble-menu"
          tippyOptions={{ duration: 100 }}
          editor={editor}
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            Strike
          </button>
        </BubbleMenu>
      )}

      {editor && (
        <FloatingMenu
          className="floating-menu"
          tippyOptions={{ duration: 100 }}
          editor={editor}
        >
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            H1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            Bullet List
          </button>
          <form encType="multipart/form-data">
            <input
              type="file"
              id="upload"
              placeholder="image"
              hidden
              name="avatar"
              onChange={handleUploadChange}
            />
            <label htmlFor="upload">Image</label>
          </form>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}
          >
            code block
          </button>
        </FloatingMenu>
      )}

      <EditorContent editor={editor} />
    </div>
  );
};
