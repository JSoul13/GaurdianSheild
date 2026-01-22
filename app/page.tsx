import { HeroSection } from '@/components/hero-section'
import { ServicesPreview } from '@/components/services-preview'
import { WhyChooseUs } from '@/components/why-choose-us'
import { TrustSignals } from '@/components/trust-signals'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <TrustSignals />
    </div>
  )
}
