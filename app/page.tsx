
'use client'
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import About from '@/components/About/About'
import Testimonials from "@/components/Testimonials/Testimonials";
import MeetTheTeam from '@/components/MeetTheTeam/MeetTheTeam'
import Posts from "@/components/Posts/Posts";
import Footer from '@/components/Footer/Footer'
import ContactModal from "@/components/ContactModal/ContactModal";
import { useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <About onOpenModal={() => setIsModalOpen(true)} />
      <Testimonials />
      <MeetTheTeam />
      <Posts />
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
