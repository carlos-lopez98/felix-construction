import styles from './Posts.module.css'
import { ImInstagram } from "react-icons/im";
import RotatingSlogan from '../ui/RotatingSlogan';

const images = [
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    'https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg',
    'https://images.pexels.com/photos/4254900/pexels-photo-4254900.jpeg',
    'https://images.pexels.com/photos/6474456/pexels-photo-6474456.jpeg',
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
]

export default function Posts() {
    return (
        <section className={styles.postsSection}>

            <div className={styles.rotating_slogan}>
                <RotatingSlogan width="400px" centered={true}
                    phrases={[
                        <span key="en" className={styles.rotating_text}>Built with <span className={styles.highlight}>Pride.</span> See for <span className={styles.highlight}>Yourself.</span></span>,
                        <span key="es" className={styles.rotating_text}>Construido con <span className={styles.highlight}>Orgullo.</span> Vea usted <span className={styles.highlight}>Mismo.</span></span>,
                    ]}
                />
            </div>

            <div className={styles.divider} />

            <div className={styles.container_bot}>
                <div className={styles.imageRow}>
                    {images.map((src, idx) => (
                        <div key={idx} className={styles.imageContainer}>
                            <img src={src} alt={`Post ${idx + 1}`} className={styles.image} />
                            <div className={styles.hoverText}>
                                <p className={styles.topText}>See Us On</p>
                                <p className={styles.bottomText}>
                                    <ImInstagram />
                                    Instagram
                                </p>
                            </div>
                            <div className={styles.overlay} />
                        </div>
                    ))}
                </div>

                <button className={styles.ctaButton}>FOLLOW ON INSTAGRAM</button>
            </div>
        </section>
    )
}
