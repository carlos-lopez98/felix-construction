import styles from './Posts.module.css'
import { ImInstagram } from "react-icons/im";
import RotatingSlogan from '../ui/RotatingSlogan';
import ig1 from '@/assets/IGPHOTOS/ig_1_compressed.jpg'
import ig2 from '@/assets/IGPHOTOS/ig_2_compressed.jpg'
import ig3 from '@/assets/IGPHOTOS/ig_3_compressed.jpg'
import ig4 from '@/assets/IGPHOTOS/ig_4_compressed.jpg'
import ig5 from '@/assets/IGPHOTOS/ig_5_compressed.jpg'

const images = [
    ig1, ig2, ig3, ig4, ig5
]

export default function Posts() {
    return (
        <section className={styles.postsSection}>

            <div className={styles.rotating_slogan}>
                <RotatingSlogan width="400px" centered={true}
                    phrases={[
                        <span key="en" className={styles.rotating_text}>Built with <span className={styles.highlight}>Pride.</span> See for <span className={styles.highlight}>Yourself.</span></span>,
                        <span key="es" className={styles.rotating_text}>Construido con <span className={styles.highlight}>Orgullo.</span> <span className={styles.breakMobile}>Vea usted <span className={styles.highlight}>Mismo.</span></span></span>,
                    ]}
                />
            </div>

            <div className={styles.divider} />

            <div className={styles.container_bot}>
                <div className={styles.imageRow}>
                    {images.map((src, idx) => (
                        <div key={idx} className={styles.imageContainer}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={src.src} alt={`Post ${idx + 1}`} className={styles.image} />
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
