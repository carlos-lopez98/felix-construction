'use client'
import { useEffect, useState, ReactNode } from 'react';
import styles from './RotatingSlogan.module.css';

type Props = {
    phrases: ReactNode[];        // e.g. ["We are Builders", "Somos Constructores"]
    interval?: number;      // ms between flips (default 4000)
    width?: string | number;
    centered?: boolean;
    color?: string;
    fontSize?: string | number;
};

export default function RotatingSlogan({ phrases, interval = 4000, width, centered, color, fontSize }: Props) {
    const [index, setIndex] = useState(0);

    // advance index every <interval> ms
    useEffect(() => {
        const id = setInterval(
            () => setIndex((i) => (i + 1) % phrases.length),
            interval
        );
        return () => clearInterval(id);
    }, [interval, phrases.length]);

    return (
        <div className={styles.wrapper} style={width ? { width } : undefined}>
            {phrases.map((text, i) => (
                <span
                    key={i}
                    className={`${styles.phrase} ${i === index ? styles.show : styles.hide} ${centered ? styles.centered : ''}`}
                    style={{ color, fontSize }}
                >
                    {text}
                </span>
            ))}
        </div>
    );
}

