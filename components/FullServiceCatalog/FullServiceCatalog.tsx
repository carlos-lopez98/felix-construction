'use client'
import ServiceCard from '@/components/About/ServiceCard'
import styles from './FullServiceCatalog.module.css'
import { ShieldCheck, Ruler, Brush, Thermometer, Droplets, Wind, Trash2, CheckCircle, Wrench, Home, Layers, Zap, Hammer, PencilRuler, Utensils, TreePine, House } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper'

export default function FullServiceCatalog() {
    return (
        <section id="full-catalog" className={styles.servicesSection}>
            <FadeInWrapper>
                <div className={styles.full_container}>
                    <div className={styles.headerStack_container}>
                        <div className={styles.headerStack}>
                            <h1 className={styles.backgroundTitle}>SERVICES</h1>
                            <div className={styles.foregroundContent}>
                                <h2 className={styles.mainTitle}>Full Service Catalog</h2>
                                <p className={styles.subText}>Affordable Services</p>
                            </div>
                        </div>

                    </div>


                    <div className={styles.cardsGrid}>
                        <div className={styles.columns}>
                            <div className={styles.column}>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >
                                    <ServiceCard
                                        icon={<Wrench />}
                                        title="Restoration"
                                        description="When your home has been impacted by water, fire, or age-related damage, our restoration services bring it back to life. We approach every project with care, working to preserve the character of your space while updating it with durable, modern materials. Your home will not only be restored—it’ll be renewed."
                                    />
                                </motion.div>

                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >
                                    <ServiceCard
                                        icon={<Home />}
                                        title="ADU"
                                        description="We specialize in designing and building ADUs that perfectly complement your main residence. Whether you're creating a guest house, rental unit, or multigenerational living space, we handle everything from planning and permits to construction. Our team ensures every ADU is efficient, stylish, and fully compliant with local building codes."
                                    />

                                </motion.div>
                            </div>

                            <div className={styles.column}>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >
                                    <ServiceCard
                                        icon={<Layers />}
                                        title="Flooring"
                                        description="Your floors set the tone for your entire home, and we help you choose the right material, color, and style to match your vision. Whether it's hardwood, tile, laminate, or vinyl plank, our installers are detail-oriented and efficient. We ensure every board and tile fits perfectly and lasts for years."
                                    />

                                </motion.div>

                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >
                                    <ServiceCard
                                        icon={<Zap />}
                                        title="Electric"
                                        description="Our certified electricians provide safe, reliable service for both upgrades and repairs. From panel replacements and outlet installations to full home rewiring and smart home integration, we’ve got you covered. We prioritize safety, compliance, and clean finishes, ensuring your home is powered the right way—without shortcuts."
                                    />

                                </motion.div>

                            </div>

                            <div className={styles.column}>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >
                                    <ServiceCard
                                        icon={<Hammer />}
                                        title="Framing + Drywall"
                                        description="Every solid build starts with precise framing and expert drywall work. We construct strong, level frames and follow up with seamless drywall finishes, giving you straight edges and smooth walls that last. Whether it's a remodel or a new room addition, we build with durability and accuracy as our foundation."
                                    />

                                </motion.div>

                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >
                                    <ServiceCard
                                        icon={<PencilRuler />}
                                        title="Handyman Work"
                                        description="Our handyman services cover a wide range of home improvement needs, from small repairs to custom installations. We’re the team you can rely on for quick fixes done right—leaky faucets, loose cabinets, squeaky doors, and more. No task is too minor when it comes to keeping your home running smoothly."
                                    />

                                </motion.div>

                            </div>
                            <div className={styles.column}>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >
                                    <ServiceCard
                                        icon={<Utensils />}
                                        title="Kitchens"
                                        description="The kitchen is the heart of every home, and we build spaces that are both functional and beautiful. From layout optimization and cabinet installation to lighting and tile work, we handle every detail. Whether you’re updating your existing kitchen or starting fresh, we tailor each design to fit your lifestyle."
                                    />

                                </motion.div>

                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >

                                    <ServiceCard
                                        icon={<TreePine />}
                                        title="Outdoor"
                                        description="Extend your living space into the great outdoors with our custom outdoor solutions. We build decks, patios, pergolas, and more—spaces that are perfect for relaxing, hosting, or enjoying family time. Using weather-resistant materials and thoughtful layouts, we turn your yard into a natural extension of your home."
                                    />
                                </motion.div>
                            </div>

                            <div className={styles.column}>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >    <ServiceCard
                                        icon={<ShieldCheck />}
                                        title="Home Security Installations"
                                        description="We install home security systems tailored to your property’s needs, from smart locks to full surveillance setups. Our experts ensure seamless integration with your devices and networks, giving you peace of mind that your home and loved ones are protected—day and night, rain or shine."
                                    /> </motion.div>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >     <ServiceCard
                                        icon={<Ruler />}
                                        title="Custom Cabinetry"
                                        description="Our custom cabinetry service blends form and function to elevate your storage space. Whether it's for kitchens, bathrooms, or unique nooks, we craft pieces that fit perfectly and reflect your aesthetic. Every unit is built with precision, durability, and personalized details in mind."
                                    /> </motion.div>
                            </div>
                            <div className={styles.column}>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >       <ServiceCard
                                        icon={<Brush />}
                                        title="Interior Finishing"
                                        description="We handle all finishing touches that bring your renovation to life—trim, molding, baseboards, doors, and more. Our team ensures crisp lines, clean edges, and smooth transitions throughout your space, leaving you with a polished, professional look that feels complete and cohesive."
                                    /> </motion.div>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >
                                    <ServiceCard
                                        icon={<Thermometer />}
                                        title="HVAC Installation"
                                        description="From central air systems to ductless mini-splits, we install HVAC solutions designed for comfort and energy efficiency. Our team evaluates your home’s layout and needs to recommend and install reliable systems that maintain a consistent temperature year-round, while reducing long-term utility costs."
                                    /> </motion.div>


                            </div>
                            <div className={styles.column}>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >      <ServiceCard
                                        icon={<Droplets />}
                                        title="Plumbing Upgrades"
                                        description="We provide complete plumbing services, from fixture replacements to full system rerouting. Whether you're upgrading your bathroom, fixing outdated pipes, or preparing for a new addition, we ensure your water flows cleanly, safely, and efficiently—with minimal disruption to your home or schedule."
                                    /> </motion.div>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >     <ServiceCard
                                        icon={<Wind />}
                                        title="Attic Ventilation"
                                        description="Proper attic ventilation protects your home from moisture buildup, excessive heat, and structural damage. We assess, upgrade, or install ridge vents, fans, and baffles to ensure air flows as it should—keeping your insulation dry and your home breathing easily year-round."
                                    />  </motion.div>


                            </div>
                            <div className={styles.column}>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >       <ServiceCard
                                        icon={<Trash2 />}
                                        title="Demo + Haul Away"
                                        description="We handle demolition and debris removal for projects big and small. Whether you're tearing out tile or gutting an entire kitchen, we remove materials safely and efficiently, leaving your job site clean, clear, and ready for the next phase without added stress or mess."
                                    /> </motion.div>
                                <motion.div className={styles.service_card}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >   <ServiceCard
                                        icon={<CheckCircle />}
                                        title="Punch List Completion"
                                        description="We specialize in completing the last 5% of any project—the forgotten touch-ups, minor repairs, and lingering to-dos. Whether you're closing out a large renovation or prepping for inspection, we’ll make sure everything is clean, finished, and exactly as it should be before the final handoff."
                                    /> </motion.div>


                            </div>
                        </div>
                    </div>
                </div>
            </FadeInWrapper>
        </section>
    )
}
