import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import JobListSection from './components/JobListSection';
import TestimonialSection from './components/TestimonialSection';
import CallToActionSection from './components/CallToActionSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeatureSection />
      <JobListSection />
      <TestimonialSection />
      <CallToActionSection />
    </main>
  );
}