'use client'
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer"
import FullServiceCatalog from "@/components/FullServiceCatalog/FullServiceCatalog";
import ContactModal from "@/components/ContactModal/ContactModal";
import { useState } from 'react'

export default function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <main>
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <FullServiceCatalog />
            <Footer onOpenModal={() => setIsModalOpen(true)} />

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}