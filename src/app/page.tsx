import styles from "./page.module.css";
import TextEditor from "@/components/Text-Editor/TextEditor";

export default function Home() {
  return (
    <div className={styles.page}>
      <TextEditor />
    </div>
  );
}
