"use client";

import { useState } from "react";
import styles from "@/components/Text-Editor/TextEditor.module.css";
import CodeMirror from "@uiw/react-codemirror";
import {javascript} from "@codemirror/lang-javascript";
import ReviewSection from "../Review-Section/ReviewSection";


export default function TextEditor() {

  const [value, setValue] = useState("");
  
  function handleReview (text:string) {
    console.log(text);
    // main api calling to the api and the response setting will be done here 
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
      <ReviewSection review={value} />
    </div>
  );
}
