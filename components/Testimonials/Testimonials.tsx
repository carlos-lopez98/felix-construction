import RotatingSlogan from '../ui/RotatingSlogan'
import styles from './Testimonials.module.css'

export default function Testimonials() {
    return (
        <section className={styles.testimonialSection}>

            <div className={styles.rotating_slogan}>
                <RotatingSlogan width="400px" centered={true}
                    phrases={[
                        <span key="en">We Speak <span className={styles.banner}>ENGLISH</span></span>,
                        <span key="es">Se Habla <span className={styles.banner}>ESPAÑOL</span></span>,
                    ]}
                />
            </div>

            <div className={styles.columns}>
                <div className={styles.reviewCard}>
                    <p className={styles.reviewText}>
                        &quot;We had an <span className={styles.highlight}>incredible experience</span> working with this team. They kept us informed at every stage, finished ahead of schedule, and the results were better than we imagined. Our kitchen looks amazing, and we&apos;ve already recommended them to two of our neighbors. <span className={styles.highlight}>Trustworthy, clean, and professional</span> from start to finish. &quot;
                    </p>
                    <div className={styles.divider}></div>
                    <p className={styles.reviewer}>James Mendez</p>
                </div>

                <div className={styles.reviewCard}>
                    <p className={styles.reviewText}>
                        &quot;<span className={styles.highlight}>Quedamos muy contentos</span> con el trabajo que hicieron en nuestra casa. Nos explicaron cada paso del proyecto y siempre fueron muy respetuosos con nuestro espacio. La calidad del trabajo <span className={styles.highlight}>fue excelente</span> y definitivamente los volveríamos a contratar para futuros proyectos. &quot;
                    </p>
                    <div className={styles.divider}></div>
                    <p className={styles.reviewer}>Lucía Fernández</p>
                </div>
            </div>
        </section>
    )
}
