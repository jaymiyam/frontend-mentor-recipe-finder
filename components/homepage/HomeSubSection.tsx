import FadeInTransition from '../UI/FadeInTransition';
import Image from 'next/image';
import realLife from '@/assets/images/image-home-real-life-large.webp';

const HomeSubSection = () => {
  return (
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
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p className="text-xl max-w-[80ch] leading-relaxed">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
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
  );
};

export default HomeSubSection;
