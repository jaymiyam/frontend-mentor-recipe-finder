import { getSessionUser } from '@/utils/getSessionUser';
import connectDB from '@/config/database';
import Recipe from '@/models/Recipe';
import UserRecipeCard from '@/components/UserRecipeCard';

export default async function ProfilePage() {
  const sessionUser = await getSessionUser();

  if (!sessionUser) {
    throw new Error('A valid user is required to submit recipes');
  }

  await connectDB();

  const userRecipes = await Recipe.find({ owner: sessionUser.user.id });

  return (
    <section>
      <div className="max-w-[1200px] mx-4 md:mx-8 xl:mx-auto">
        {/* Hero section */}
        <div className="py-8 md:py-16 text-left md:text-center text-pretty flex flex-col items-center justify-center">
          <h1 className=" font-heading font-extrabold tracking-tight text-neutral-900 text-4xl md:text-5xl">
            Your recipes
          </h1>
        </div>
        {/* Recipe Cards Grid */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 border-b border-b-neutral-200">
          {userRecipes.length === 0 ? (
            <p>You have no recipes yet!</p>
          ) : (
            userRecipes.map((recipe) => (
              <UserRecipeCard
                key={recipe._id.toString()}
                id={recipe._id.toString()}
                image={recipe.image.small}
                title={recipe.title}
                overview={recipe.overview}
                servings={recipe.servings}
                prepTime={recipe.prepMinutes}
                cookTime={recipe.cookMinutes}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
