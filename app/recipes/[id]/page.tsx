import RecipeIngredients from '@/components/recipepage/RecipeIngredients';
import RecipeInstructions from '@/components/recipepage/RecipeInstructions';
import RecipeHeader from '@/components/recipepage/RecipeHeader';
import MoreRecipes from '@/components/recipepage/MoreRecipes';
import Image from 'next/image';
import Link from 'next/link';
import connectDB from '@/config/database';
import Recipe from '@/models/Recipe';
import { RecipeDataType } from '../page';

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

const RecipePage = async ({ params }: RecipePageProps) => {
  const { id } = await params;

  await connectDB();
  const recipes = await Recipe.find({}).lean<RecipeDataType[]>();
  const recipe = await Recipe.findById(id).lean<RecipeDataType>();

  if (!recipe) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Sorry, recipe not found
      </h1>
    );
  }

  const moreRecipes = recipes
    .filter((r) => String(r._id) !== id) //filter out current recipe
    .sort(() => 0.5 - Math.random()) //use a random +ve/-ve number to shuffle recipes
    .slice(0, 3); //slice and pick out first 3 recipes

  return (
    <section>
      <div className="max-w-[1200px] mx-4 md:mx-8 xl:mx-auto">
        <div className="py-16 md:py-20 border-b border-b-neutral-200">
          {/* Breadcrumbs */}
          <div className="mb-4 text-lg">
            <Link href="/recipes" className="opacity-80 hover:text-neutral-900">
              Recipes /{' '}
            </Link>
            <span className="text-neutral-900 font-semibold">
              {recipe.title}
            </span>
          </div>
          {/* Recipe main content */}
          <RecipeHeader
            image={recipe.image.large}
            title={recipe.title}
            overview={recipe.overview}
            servings={recipe.servings}
            prepMinutes={recipe.prepMinutes}
            cookMinutes={recipe.cookMinutes}
          />
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 pt-12">
            <RecipeIngredients ingredients={recipe.ingredients} />
            <RecipeInstructions instructions={recipe.instructions} />
          </div>
        </div>
        {/* More recipes */}
        <MoreRecipes moreRecipes={moreRecipes} />
      </div>
    </section>
  );
};

export default RecipePage;
