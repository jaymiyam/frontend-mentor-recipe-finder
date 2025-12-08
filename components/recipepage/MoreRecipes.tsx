import FadeInTransition from '../UI/FadeInTransition';
import RecipeCard from '../UI/RecipeCard';
import { RecipeDataType } from '@/app/recipes/page';

type MoreRecipesProps = {
  moreRecipes: RecipeDataType[];
};

const MoreRecipes = ({ moreRecipes }: MoreRecipesProps) => {
  return (
    <FadeInTransition>
      <div className="py-16 md:py-20 border-b border-b-neutral-200">
        <h2 className="font-heading text-neutral-900 tracking-tight font-bold text-4xl leading-tight mb-6">
          More recipes
        </h2>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {moreRecipes.map((recipe) => (
            <RecipeCard
              key={recipe._id.toString()}
              id={recipe._id.toString()}
              image={recipe.image.small}
              title={recipe.title}
              overview={recipe.overview}
              servings={recipe.servings}
              prepTime={recipe.prepMinutes}
              cookTime={recipe.cookMinutes}
            />
          ))}
        </div>
      </div>
    </FadeInTransition>
  );
};

export default MoreRecipes;
