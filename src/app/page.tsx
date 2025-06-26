import styles from "./page.module.css";
import WorkSpace from "@/components/Work-Space/WorkSpace";

export default function Home() {
  return (
    <div className={styles.page}>
      <WorkSpace />
    </div>
  );
}
