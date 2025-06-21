import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import About from '@/components/About/About'
import Testimonials from "@/components/Testimonials/Testimonials";
import MeetTheTeam from '@/components/MeetTheTeam/MeetTheTeam'
import Posts from "@/components/Posts/Posts";
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <MeetTheTeam />
      <Posts />
      <Footer />
    </main>
  );
}
