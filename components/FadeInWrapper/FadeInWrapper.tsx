// /components/FadeInWrapper.tsx
'use client'

import { useEffect, useState } from "react";

export default function FadeInWrapper({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div
            style={{
                opacity: show ? 1 : 0,
                transition: 'opacity .7s ease-out',
                height: '100%'
            }}
        >
            {children}
        </div>
    );
}
