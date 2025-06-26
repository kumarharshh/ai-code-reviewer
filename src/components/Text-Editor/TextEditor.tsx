"use client";

import { useState } from "react";
import styles from "@/components/Text-Editor/TextEditor.module.css";
import CodeMirror from "@uiw/react-codemirror";
import {javascript} from "@codemirror/lang-javascript";

interface TextEditorProps {
  setReviewText: (value: string) => void;
}

export default function TextEditor({setReviewText}: TextEditorProps) {

  const [value, setValue] = useState<string>("");

  function handleReview (text:string) {
    console.log(text);
    setReviewText("harsh");
  }


  return (
    <div className={styles.container}>
      <button className={styles.reviewBtn} onClick={() => { handleReview(value)}}>Review</button>
      <CodeMirror 
        className={styles.textArea}
        minHeight="100dvh" 
        minWidth="50dvw" 
        value={value} 
        theme="dark" 
        onChange={(value) => setValue(value)}
        extensions={[javascript({ jsx: true })]}
      />
    </div>
  );
}
