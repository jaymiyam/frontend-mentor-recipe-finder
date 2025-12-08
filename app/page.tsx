import HomeHeroSection from '@/components/homepage/HomeHeroSection';
import HomeFeaturesSection from '@/components/homepage/HomeFeaturesSection';
import HomeSubSection from '@/components/homepage/HomeSubSection';
import CallToAction from '@/components/layouts/CallToAction';
import connectDB from '@/config/database';

export default function HomePage() {
  connectDB();
  return (
    <>
      <section className="w-full bg-[url('/images/pattern-squiggle-1.svg')] bg-contain bg-no-repeat bg-[center_top_17%]">
        <div className="max-w-[1200px] mx-4 md:mx-8 xl:mx-auto pt-16 md:pt-20 pb-20 md:pb-24">
          <HomeHeroSection />
          <HomeFeaturesSection />
          <HomeSubSection />
        </div>
      </section>
      <CallToAction />
    </>
  );
}
