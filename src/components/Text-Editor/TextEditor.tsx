"use client";

import { useState } from "react";
import styles from "@/components/Text-Editor/TextEditor.module.css";
import CodeMirror from "@uiw/react-codemirror";
import {javascript} from "@codemirror/lang-javascript";
import { useQuery } from "@tanstack/react-query";
import getReview from "@/utils/api/getReview";

interface TextEditorProps {
  setReviewText: (value: string) => void;
}

export default function TextEditor({setReviewText}: TextEditorProps) {

  const [value, setValue] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["review", value],
    queryFn: () => getReview(value),
    enabled: !!value, // Only run the query if value is not empty
    // retry: (failureCount, error) => {
    //   if (error) return false;
    //   return failureCount < 2; 
    // },
  });


  function handleReview() {
    if(isLoading){
      setReviewText("Generating review, please wait...");
    }else{
      setReviewText(data);
    }
    console.log("the process is done");
  }


  return (
    <div className={styles.container}>
      <button className={styles.reviewBtn} onClick={() => { handleReview()}}>Review</button>
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
