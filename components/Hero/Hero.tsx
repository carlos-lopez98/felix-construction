'use client'

import styles from './Hero.module.css';
import Image from 'next/image'
import adu from '@/assets/adu_compressed.webp'
import bathroom from '@/assets/bathroom_compressed.webp'
import kitchen from '@/assets/kitchen_compressed.webp'
import { TbBuildingWarehouse } from "react-icons/tb";
import RotatingSlogan from '@/components/ui/RotatingSlogan';
import { circOut, motion } from 'framer-motion'
import Link from 'next/link'
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import { useState, useEffect } from 'react'

type Props = {
    onOpenModal: () => void;
}


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 500 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: circOut
        }
    },
};



const Hero = ({ onOpenModal }: Props) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Run on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="hero" className={styles.hero}>

            <FadeInWrapper>
                <div className={styles.grid_container}>
                    <div className={styles.grid}>
                        {/* Column 1 – Text */}
                        <div className={styles.colText}>
                            <p className={styles.since}>Since 2005</p>
                            <div className={styles.rotatingSlogan}>
                                <RotatingSlogan width="400px" centered={isMobile}
                                    phrases={[
                                        <span key="en">We are <span className={styles.highlight}>BUILDERS</span></span>,
                                        <span key="es">Somos <span className={`${styles.highlight} ${styles.breakMobile}`}>CONSTRUCTORES</span></span>,
                                    ]}
                                />
                            </div>
                            {/* <h1 className={styles.slogan}>
                        We are <span className={styles.highlight}>Builders</span>
                    </h1> */}

                            <div>
                                <p className={styles.body}>Turning ideas into lasting structures.</p>
                                <p className={styles.body}>Quality craftsmanship every step.</p>
                                <p className={styles.body}>Licensed • Bonded • Insured.</p>
                            </div>

                            <a href="#contact" className={styles.contact} onClick={onOpenModal}>Contact&nbsp;Us</a>

                            <div className={styles.services}>
                                {/* Replace this div with your actual icon component */}
                                <TbBuildingWarehouse className={styles.iconPlaceholder} />
                                <Link href="/services">FULL&nbsp;SERVICES&nbsp;CATALOG</Link>
                            </div>
                        </div>



                        <motion.div className={styles.images}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            whileInView="visible"
                        >
                            {/* Column 2 – ADU Construction */}
                            <motion.div className={styles.imageCard}
                                variants={itemVariants}
                            >
                                <Image
                                    src={adu.src}
                                    alt="Kitchen Remodels"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className={styles.overlay} />

                                {/* <span className={styles.imageLabel}>ADU Construction</span> */}
                                <div className={styles.rotating_slogan}>
                                    <RotatingSlogan width="300px" color="white" fontSize="1.5rem" centered={true}
                                        phrases={[
                                            <span key="en">ADU CONSTRUCTION </span>,
                                            <span key="es">AYUDA CON ADUs</span>,
                                        ]}
                                    />
                                </div>
                            </motion.div>

                            {/* Column 3 – Bathroom Remodels */}
                            <motion.div className={styles.imageCard}
                                variants={itemVariants}
                            >
                                <Image
                                    src={bathroom.src}
                                    alt="Kitchen Remodels"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className={styles.overlay} />
                                <div className={styles.rotating_slogan}>
                                    <RotatingSlogan width="300px" color="white" fontSize="1.5rem" centered={true}
                                        phrases={[
                                            <span key="en">BATHROOM REMODEL</span>,
                                            <span key="es">REMODELAMOS BAÑOS</span>,
                                        ]}
                                    />
                                </div>
                            </motion.div>

                            {/* Column 4 – Kitchen Remodels */}
                            <motion.div className={styles.imageCard}
                                variants={itemVariants}
                            >
                                <Image
                                    src={kitchen.src}
                                    alt="Kitchen Remodels"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className={styles.overlay} />
                                <div className={styles.rotating_slogan}>
                                    <RotatingSlogan width="300px" color="white" fontSize="1.5rem" centered={true}
                                        phrases={[
                                            <span key="en">KITCHEN REMODEL</span>,
                                            <span key="es">REMODELAMOS COCINAS</span>,
                                        ]}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

            </FadeInWrapper>


        </section>
    );
};

export default Hero;



