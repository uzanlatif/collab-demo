import HeroSection from "@/components/contact-us/hero"
import UserForm from "@/components/contact-us/form"
import FooterSection from "@/components/contact-us/footer-section";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <UserForm />
      <FooterSection />
    </div>
  )
}
