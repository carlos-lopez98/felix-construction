// /components/FadeInWrapper.tsx
'use client'

import { useEffect, useState } from "react";

export default function FadeInWrapper({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <div
            style={{
                opacity: show ? 1 : 0,
                transition: 'opacity .7s ease-out'
            }}
        >
            {children}
        </div>
    );
}
