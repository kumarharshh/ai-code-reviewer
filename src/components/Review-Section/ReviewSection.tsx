import MarkdownPreview from '@uiw/react-markdown-preview';
import styles from "./ReviewSection.module.css";

interface ReviewSectionProps {
    review: string;
}

export default function ReviewSection({ review }: ReviewSectionProps) {
    return(
        <div className={styles.container}>
            <div className={styles.reviewSection}>
                <MarkdownPreview
                    className={styles.markdownPreview}
                    source={review}
                    style={{ 
                        whiteSpace: 'pre-wrap',
                        padding: '20px',
                     }}
                />
            </div>
        </div>
    )
}