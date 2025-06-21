'use client'


import styles from './MeetTheTeam.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'


export default function MeetTheTeam() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ['-55%', '50%']);

    return (
        <section id="meettheteam" className={styles.teamSection}>
            <motion.div
                ref={ref}
                style={{ y }}
                className={styles.parallaxBackground}
            >
                <div className={styles.container}>
                    <div className={styles.overlayContent}>
                        <div className={styles.teamDivider}>
                            <h2 className={styles.title}>Meet The Team</h2>
                            <p className={styles.description}>
                                Our team is a family of experienced builders, designers, and problem solvers dedicated to quality craftsmanship and honest service. Every member plays a vital role in turning your vision into reality—and we treat your home like it&apos;s our own.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
