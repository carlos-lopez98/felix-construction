import styles from './ServiceCard.module.css'
import { ReactNode } from 'react'

type Props = {
    icon: ReactNode
    title: string
    description: string
}

export default function ServiceCard({ icon, title, description }: Props) {
    return (
        <div className={styles.card}>
            <div className={styles.iconContainer}>
                <div className={styles.icon}>{icon}</div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}
