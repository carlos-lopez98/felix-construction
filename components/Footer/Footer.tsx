'use client'
import styles from './Footer.module.css'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import Logo from '@/assets/Construction Temp Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
    const pathname = usePathname();
    const isServicesPage = pathname === '/services';

    return (
        <footer className={styles.footer}>

            <div className={styles.divider} />

            <div className={styles.footerContent}>
                {/* Left Column – Logo */}
                <div className={styles.logoColumn}>
                    <Image src={Logo.src} alt="Logo" width={128} height={128} />
                    <h1 className={styles.logo}>FELIX CONSTRUCTION</h1>
                </div>

                {/* Right Column – Nav + Quote + Icons */}
                <div className={styles.infoColumn}>
                    {/* Row 1 */}
                    <div className={styles.navRow}>

                        <div className={styles.links}>
                            <Link href="/#hero">Home</Link>

                            <Link href="/#hero">About</Link>
                            {isServicesPage ? (
                                <Link href="#full-catalog">Services</Link>
                            ) : (
                                <Link href="/#services">Services</Link>
                            )}
                        </div>


                        <button className={styles.contactButton}>Contact Us</button>
                    </div>

                    <div className={styles.dividerTwo} />


                    {/* Row 2 – Quote */}
                    {/* <div className={styles.quote}>
                        Craftsmanship is not a skill, it's an attitude. We build like it's our own.
                    </div> */}

                    {/* Row 3 – Social Icons */}
                    <div className={styles.socials}>
                        <FaInstagram />
                        <FaFacebookF />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </footer>
    )
}
