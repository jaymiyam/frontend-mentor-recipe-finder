import FadeInTransition from '../UI/FadeInTransition';
import FeatureCard from './FeatureCard';
import wholeFood from '@/assets/images/icon-whole-food-recipes.svg';
import minimumFuss from '@/assets/images/icon-minimum-fuss.svg';
import searchInSeconds from '@/assets/images/icon-search-in-seconds.svg';

const HomeFeaturesSection = () => {
  return (
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
  );
};

export default HomeFeaturesSection;
