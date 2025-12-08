import PrimaryButton from '@/components/UI/PrimaryButton';
import Image from 'next/image';
import hero from '@/assets/images/image-home-hero-large.webp';

const HomeHeroSection = () => {
  return (
    <div>
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
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
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
    </div>
  );
};

export default HomeHeroSection;
