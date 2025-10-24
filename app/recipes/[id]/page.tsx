import recipes from '@/data.json';
import BulletPoint from '@/components/BulletPoint.tsx';
import RecipeCard from '@/components/RecipeCard.tsx';
import FadeInTransition from '@/components/FadeInTransition.tsx';
import Image from 'next/image';
import Link from 'next/link';

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

const RecipePage = async ({ params }: RecipePageProps) => {
  const { id } = await params;

  const recipe = recipes.find((r) => String(r.id) === id);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const moreRecipes = recipes
    .filter((r) => String(r.id) !== id) //filter out current recipe
    .sort(() => 0.5 - Math.random()) //use a random +ve/-ve number to shuffle recipes
    .slice(0, 3); //slice and pick out first 3 recipes

  return (
    <section>
      <div className="max-w-[1200px] mx-8 xl:mx-auto">
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
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            <div className="relative">
              <Image
                src={recipe.image.large}
                width={1236}
                height={1200}
                alt=""
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6 items-start justify-center">
              <h2 className="font-heading text-neutral-900 tracking-tight font-extrabold text-4xl md:text-5xl leading-tight">
                {recipe.title}
              </h2>
              <p className="text-xl max-w-[45ch] leading-relaxed">
                {recipe.overview}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-base">
                <span className="flex gap-1 shrink-0 font-semibold text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#163A34"
                      fillRule="evenodd"
                      d="M9.76 10.595c2.08 0 3.76-1.68 3.76-3.76.08-2.08-1.6-3.76-3.76-3.76-2.08 0-3.76 1.68-3.76 3.76s1.68 3.76 3.76 3.76ZM15.28 15.636c-.24-.88-.72-1.68-1.68-2.32-.8-.56-2.08-.96-3.84-.96-3.44 0-5.12 1.6-5.6 3.28-.16.48.08.96.48 1.2 1.44.96 3.2 1.44 5.12 1.44 1.84 0 3.6-.56 5.04-1.44.4-.24.64-.72.48-1.2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Servings: {recipe.servings}
                </span>
                <span className="flex gap-1 shrink-0 font-semibold text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    fill="none"
                    viewBox="0 0 21 20"
                  >
                    <path
                      fill="#163A34"
                      fillRule="evenodd"
                      d="M13.002 13.088a.618.618 0 0 1-.859.216l-2.275-1.366a.616.616 0 0 1-.308-.534V8.463a.624.624 0 1 1 1.25 0v2.583l1.975 1.192c.3.175.4.558.217.85Zm-2.675-8.892a6.658 6.658 0 0 0-6.65 6.65 6.658 6.658 0 0 0 6.65 6.65 6.658 6.658 0 0 0 6.65-6.65 6.658 6.658 0 0 0-6.65-6.65ZM5.864 3.669a.624.624 0 1 0-.657-1.064A9.665 9.665 0 0 0 2.316 5.36a.625.625 0 0 0 1.032.705 8.422 8.422 0 0 1 2.516-2.396ZM18.349 5.36a9.613 9.613 0 0 0-2.901-2.764.626.626 0 0 0-.654 1.066 8.351 8.351 0 0 1 2.522 2.402.623.623 0 0 0 .868.164.625.625 0 0 0 .165-.868Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Prep: {recipe.prepMinutes} mins
                </span>
                <span className="flex gap-1 shrink-0 font-semibold text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#163A34"
                      d="M7.222 2.097a.625.625 0 1 0-.884.884.37.37 0 0 1 0 .524 1.621 1.621 0 0 0 0 2.293.625.625 0 1 0 .883-.884.37.37 0 0 1 0-.525 1.62 1.62 0 0 0 0-2.292ZM15.461 4.906a.625.625 0 1 0-.883-.884 1.62 1.62 0 0 0 0 2.293.625.625 0 0 0 .883-.885.37.37 0 0 1 0-.524ZM3.503 5.43a.625.625 0 0 0-.884.884.37.37 0 0 1 0 .524.625.625 0 0 0 .884.885 1.62 1.62 0 0 0 0-2.293Z"
                    />
                    <path
                      fill="#163A34"
                      fillRule="evenodd"
                      d="M10 5.218c-.955 0-1.727.774-1.727 1.728v.568c-3.156.669-5.525 3.129-5.347 6.095.013.22.195.392.416.392h13.316c.22 0 .403-.172.416-.392.178-2.966-2.192-5.426-5.347-6.095v-.568c0-.954-.774-1.728-1.727-1.728Zm.477 2.13v-.402a.478.478 0 1 0-.954 0v.401a8.45 8.45 0 0 1 .954 0Z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="#163A34"
                      d="M2.332 15.07a.915.915 0 0 1 .585-.188h14.166c.21 0 .417.053.585.188a.84.84 0 0 1 .29.488c.07.32-.01.684-.106.972a1.974 1.974 0 0 1-1.872 1.349H4.02a1.973 1.973 0 0 1-1.872-1.349c-.096-.288-.175-.651-.106-.972a.84.84 0 0 1 .29-.488Z"
                    />
                  </svg>
                  Cook: {recipe.cookMinutes} mins
                </span>
              </div>
              <h3 className="font-bold font-heading text-neutral-900 leading-tight text-2xl">
                Ingredients:
              </h3>
              <div className="grid gap-2 mb-4">
                {recipe.ingredients.map((item, index) => (
                  <BulletPoint key={index} text={item} noTitle />
                ))}
              </div>
              <h3 className="font-bold font-heading text-neutral-900 leading-tight text-2xl">
                Instructions:
              </h3>
              <div className="grid gap-2 mb-4">
                {recipe.instructions.map((item, index) => (
                  <BulletPoint key={index} text={item} noTitle />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* More recipes */}
        <FadeInTransition>
          <div className="py-16 md:py-20 border-b border-b-neutral-200">
            <h2 className="font-heading text-neutral-900 tracking-tight font-bold text-4xl leading-tight mb-6">
              More recipes
            </h2>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {moreRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id.toString()}
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
      </div>
    </section>
  );
};

export default RecipePage;
