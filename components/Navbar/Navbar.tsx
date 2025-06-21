'use client'
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Logo from '@/assets/Construction Temp Logo.png'
import { usePathname } from 'next/navigation'
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import { useState, useEffect } from 'react'

type Props = {
    onOpenModal: () => void
}

const Navbar = ({ onOpenModal }: Props) => {
    const pathname = usePathname();
    const isServicesPage = pathname === '/services';
    const [menuOpen, setMenuOpen] = useState(false)
    const [showBar, setShowBar] = useState(true);   // is navbar visible?
    const [lastY, setLastY] = useState(0);        // last scroll position

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            // show when scrolling up, hide when scrolling down (after 50 px)
            if (y > lastY && y > 50) {
                setShowBar(false);
            } else if (y < lastY) {
                setShowBar(true);
            }

            setLastY(y);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastY]);

    return (
        <header className={`${styles.wrapper} ${!showBar ? styles.hidden : ''}`}>
            <FadeInWrapper>
                <nav className={styles.navbar}>
                    <div className={styles.left}>
                        {/* Replace with your logo */}
                        <div className={styles.logo}>
                            <Image src={Logo.src} alt="Logo" width={64} height={64} />
                        </div>

                        <Link href="/#hero" className={styles.business_name}>FELIX CONSTRUCTION</Link>


                        {/* DOES NOT DISPLAY ON MOBILE */}
                        <div className={styles.vertDivider} />
                        <ul className={styles.links}>
                            <li>
                                {isServicesPage ? (
                                    <Link href="#full-catalog" className={styles.navLink}>Services</Link>
                                ) : (
                                    <Link href="/#services" className={styles.navLink}>Services</Link>
                                )}
                            </li>
                            <li>
                                <Link href="/#meettheteam" className={styles.navLink}>About</Link>
                            </li>
                            <li>
                                <a onClick={onOpenModal} className={styles.navLink}>Contact</a>
                            </li>
                        </ul>

                        <Link href="#estimate" onClick={onOpenModal} className={styles.cta}>REQUEST&nbsp;AN&nbsp;ESTIMATE</Link>
                        {/*************************************************************************************/}

                        <button className={`${styles.mobileToggle}`}
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            Menu
                        </button>
                    </div>
                </nav>

                {/* Mobile Drawer */}
                <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
                    <div className={styles.mobileMenuHeader}>
                        <Image src={Logo.src} alt="Logo" width={48} height={48} />
                        <button onClick={() => setMenuOpen(false)} className={styles.closeButton}>✕</button>
                    </div>

                    <ul className={styles.mobileLinks}>
                        <li>    {isServicesPage ? (
                            <Link href="#full-catalog" onClick={() => setMenuOpen(false)} className={styles.navLink}>Services</Link>
                        ) : (
                            <Link href="/#services" onClick={() => setMenuOpen(false)} className={styles.navLink}>Services</Link>
                        )}</li>
                        <li><Link href="/#meettheteam" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li><Link href="/#contact" onClick={() => {
                            setMenuOpen(false);
                            onOpenModal();
                        }}>Contact</Link></li>
                    </ul>

                    <div className={styles.mobileCta_container}>
                        <a
                            className={styles.mobileCta}
                            onClick={onOpenModal}
                        >
                            REQUEST&nbsp;AN&nbsp;ESTIMATE
                        </a>
                    </div>

                </div>
            </FadeInWrapper>
        </header >
    );
};

export default Navbar;