'use client'
import { motion } from 'framer-motion';
import styles from './About.module.css'
import ServiceCard from './ServiceCard'
import { Wrench, Home, Layers, Zap, Hammer, PencilRuler, Utensils, TreePine, House } from 'lucide-react'
import RotatingSlogan from '../ui/RotatingSlogan'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const cards = [
    {
        icon: <Wrench />,
        title: "Restoration",
        description: "When your home has been impacted by water, fire, or age-related damage, our restoration services bring it back to life. We approach every project with care, working to preserve the character of your space while updating it with durable, modern materials. Your home will not only be restored—it’ll be renewed."
    },
    {
        icon: <Home />,
        title: "ADU",
        description: "We specialize in designing and building ADUs that perfectly complement your main residence. Whether you're creating a guest house, rental unit, or multigenerational living space, we handle everything from planning and permits to construction. Our team ensures every ADU is efficient, stylish, and fully compliant with local building codes."
    },
    {
        icon: <Layers />,
        title: "Flooring",
        description: "Your floors set the tone for your entire home, and we help you choose the right material, color, and style to match your vision. Whether it's hardwood, tile, laminate, or vinyl plank, our installers are detail-oriented and efficient. We ensure every board and tile fits perfectly and lasts for years."
    },
    {
        icon: <Zap />,
        title: "Electric",
        description: "Our certified electricians provide safe, reliable service for both upgrades and repairs. From panel replacements and outlet installations to full home rewiring and smart home integration, we’ve got you covered. We prioritize safety, compliance, and clean finishes, ensuring your home is powered the right way—without shortcuts."
    },
    {
        icon: <Hammer />,
        title: "Framing + Drywall",
        description: "Every solid build starts with precise framing and expert drywall work. We construct strong, level frames and follow up with seamless drywall finishes, giving you straight edges and smooth walls that last. Whether it's a remodel or a new room addition, we build with durability and accuracy as our foundation."
    },
    {
        icon: <PencilRuler />,
        title: "Handyman Work",
        description: "Our handyman services cover a wide range of home improvement needs, from small repairs to custom installations. We’re the team you can rely on for quick fixes done right—leaky faucets, loose cabinets, squeaky doors, and more. No task is too minor when it comes to keeping your home running smoothly."
    },
    {
        icon: <Utensils />,
        title: "Kitchen",
        description: "The kitchen is the heart of every home, and we build spaces that are both functional and beautiful. From layout optimization and cabinet installation to lighting and tile work, we handle every detail. Whether you’re updating your existing kitchen or starting fresh, we tailor each design to fit your lifestyle."
    },
    {
        icon: <TreePine />,
        title: "Outdoor",
        description: "Extend your living space into the great outdoors with our custom outdoor solutions. We build decks, patios, pergolas, and more—spaces that are perfect for relaxing, hosting, or enjoying family time. Using weather-resistant materials and thoughtful layouts, we turn your yard into a natural extension of your home."
    }
]

type Props = {
    onOpenModal: () => void
}

export default function About({ onOpenModal }: Props) {
    const [isMobile, setIsMobile] = useState(false);

    const chunkCards = (arr: typeof cards, size: number) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    const visibleCards = isMobile ? cards.slice(0, 4) : cards;
    const grouped = chunkCards(visibleCards, 2);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // Run on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="services" className={styles.aboutSection}>
            <motion.div className={styles.rotatingSlogan}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeIn' }}
            >
                <RotatingSlogan width="700px" centered={true}
                    phrases={[
                        <span key="en" className={styles.rotatingText}>Every job is <span className={styles.highlight}>BUILT</span> by Family</span>,
                        <span key="es" className={styles.rotatingText}>Cada trabajo se <span className={styles.highlight}>CONSTRUYE</span> <span className={styles.breakMobile}>con Familia</span></span>,
                    ]}
                />
            </motion.div>

            {/* <h2 className={styles.title}>Every job is <span className={styles.highlight}>BUILT</span> by Family</h2> */}
            <div className={styles.divider} />

            <div className={styles.columns}>
                {grouped.map((cardPair, colIndex) => (
                    <div className={styles.column} key={colIndex}>
                        {cardPair.map((card) => (
                            <motion.div
                                key={card.title}
                                className={styles.service_card}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <ServiceCard
                                    icon={card.icon}
                                    title={card.title}
                                    description={card.description}
                                />
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>

            <div className={styles.catalogRow}>
                <House />
                <Link href="/services#full-catalog" className={styles.catalogText}>View Full Service Catalog</Link>
            </div>

            <div className={styles.contactRow} onClick={onOpenModal}>
                Contact Us
            </div>
        </section>
    )
}
