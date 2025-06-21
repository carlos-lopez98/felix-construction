import styles from './MeetTheTeam.module.css'

export default function MeetTheTeam() {
    return (
        <section id="meettheteam" className={styles.teamSection}>
            <div className={styles.overlayContent}>
                <div className={styles.teamDivider}>
                    <h2 className={styles.title}>Meet The Team</h2>
                    <p className={styles.description}>
                        Our team is a family of experienced builders, designers, and problem solvers dedicated to quality craftsmanship and honest service. Every member plays a vital role in turning your vision into reality—and we treat your home like it's our own.
                    </p>
                </div>
            </div>
        </section>
    )
}
