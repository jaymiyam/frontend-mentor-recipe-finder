import CallToAction from '@/components/CallToAction';
import FadeInTransition from '@/components/FadeInTransition';
import PrimaryButton from '@/components/PrimaryButton';
import FeatureCard from '@/components/FeatureCard';
import Image from 'next/image';
import hero from '@/assets/images/image-home-hero-large.webp';
import wholeFood from '@/assets/images/icon-whole-food-recipes.svg';
import minimumFuss from '@/assets/images/icon-minimum-fuss.svg';
import searchInSeconds from '@/assets/images/icon-search-in-seconds.svg';
import realLife from '@/assets/images/image-home-real-life-large.webp';

export default function HomePage() {
  return (
    <>
      <section className="w-full bg-[url('/images/pattern-squiggle-1.svg')] bg-contain bg-no-repeat bg-[center_top_17%]">
        <div className="max-w-[1200px] mx-8 xl:mx-auto pt-16 md:pt-20 pb-20 md:pb-24">
          <div className="text-left md:text-center flex flex-col items-start md:items-center justify-center">
            <h1 className=" font-heading font-extrabold tracking-tight text-neutral-900 text-5xl sm:text-7xl mb-4">
              <span className="relative">
                <span
                  className="absolute w-full h-[40%] rounded-sm bottom-2 bg-orange-500/40"
                  aria-hidden="true"
                />
                <span className="relative">Healthy</span>
              </span>{' '}
              meals, zero fuss
            </h1>
            <p className="text-xl mb-10 max-w-[50ch]">
              Discover eight quick, whole-food recipes that you can cook
              tonight—no processed junk, no guesswork.
            </p>
            <PrimaryButton
              text="Start exploring"
              classes="px-8 py-4"
              path="/recipes"
            />
          </div>
          <div className="my-16 md:my-20 rounded-3xl overflow-hidden border-4 md:border-12 border-white bg-white">
            <Image
              src={hero}
              width={2384}
              height={1060}
              alt="a women smiling while preparing a salad in a bright kitchen"
              className="rounded-xl overflow-hidden"
            />
          </div>
          {/* Features Section */}
          <FadeInTransition>
            <div className="border-b border-neutral-200 pb-16 md:pb-20">
              <h2 className="font-heading font-extrabold tracking-tight text-neutral-900 text-5xl mb-12 text-left md:text-center">
                What you&apos;ll get
              </h2>
              <div className="flex flex-col gap-10 md:flex-row justify-between items-start">
                <FeatureCard
                  icon={wholeFood}
                  title="Whole-food recipes"
                  text="Each dish uses everyday, unprocessed ingredients."
                  size={20}
                />
                <FeatureCard
                  icon={minimumFuss}
                  title="Minimum fuss"
                  text="All recipes are designed to make eating healthy quick and easy."
                />
                <FeatureCard
                  icon={searchInSeconds}
                  title="Search in seconds"
                  text="Filter by name or ingredient and jump straight to the recipe you need."
                />
              </div>
            </div>
          </FadeInTransition>
          <FadeInTransition>
            <div className="flex flex-col md:flex-row items-center justify-between gap-16 pt-16 md:pt-20">
              <div>
                <h2 className="font-heading text-neutral-900 tracking-tight font-extrabold text-5xl mb-4 md:mb-12">
                  Built for real life
                </h2>
                <p className="text-xl max-w-[80ch] leading-relaxed mb-4">
                  Cooking shouldn’t be complicated. These recipes come in under{' '}
                  <span className="relative">
                    <span
                      className="absolute w-full h-[40%] rounded-sm bottom-1 bg-orange-500/75"
                      aria-hidden="true"
                    />
                    <span className="relative">30 minutes</span>
                  </span>{' '}
                  of active time, fit busy schedules, and taste good enough to
                  repeat.
                </p>
                <p className="text-xl max-w-[80ch] leading-relaxed">
                  Whether you’re new to the kitchen or just need fresh ideas,
                  we’ve got you covered.
                </p>
              </div>
              <div>
                <Image
                  src={realLife}
                  width={1270}
                  height={900}
                  alt="built for real life"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </FadeInTransition>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
