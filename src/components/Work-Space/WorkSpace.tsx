"use client";

import { useState } from "react";
import styles from "@/components/Work-Space/WorkSpace.module.css";
import TextEditorComponent from "../Text-Editor/TextEditor";
import ReviewSection from "../Review-Section/ReviewSection";


export default function WorkSpace() {
  const [text, setText] = useState<string>("");

  return (
    <div className={styles.container}>
      <TextEditorComponent  value={text} setValue={setText}/>
      <ReviewSection review={text} />
    </div>
  );
}
