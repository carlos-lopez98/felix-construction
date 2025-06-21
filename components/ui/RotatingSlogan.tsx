'use client';
import { useEffect, useState, ReactNode } from 'react';
import styles from './RotatingSlogan.module.css';

type Props = {
    phrases: ReactNode[];
    interval?: number;
    width?: string | number;
    centered?: boolean;
    color?: string;
    fontSize?: string | number;
};

export default function RotatingSlogan({
    phrases,
    interval = 4000,
    width,
    centered,
    color,
    fontSize,
}: Props) {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const id = setInterval(() => {
            setVisible(false); // start fade-out
            setTimeout(() => {
                setIndex((i) => (i + 1) % phrases.length);
                setVisible(true); // fade back in
            }, 300); // match your transition duration
        }, interval);

        return () => clearInterval(id);
    }, [interval, phrases.length]);

    return (
        <div className={styles.wrapper} style={width ? { width } : undefined}>
            <span
                className={`${styles.phrase} ${visible ? styles.show : ''} ${centered ? styles.centered : ''}`}
                style={{ color, fontSize }}
            >
                {phrases[index]}
            </span>
        </div>
    );
}
