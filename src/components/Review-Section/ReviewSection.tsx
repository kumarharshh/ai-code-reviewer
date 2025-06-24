import styles from "./ReviewSection.module.css";

interface ReviewSectionProps {
    review: string;
}

export default function ReviewSection({ review }: ReviewSectionProps) {
    return(
        <div className={styles.container}>
            <div className={styles.reviewSection}>
                {review}
            </div>
        </div>
    )
}