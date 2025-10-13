import RecipeCard from '@/components/RecipeCard';
import recipes from '@/data.json';

export default function RecipesPage() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto">
        <div className="py-20 text-center flex flex-col items-center justify-center">
          <h1 className=" font-heading font-extrabold tracking-tight text-neutral-900 text-5xl mb-4">
            Explore our simple, healthy recipes
          </h1>
          <p className="text-xl max-w-[60ch] text-pretty">
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll the list and let something delicious
            catch your eye.
          </p>
        </div>
        {/* Search and filtering */}
        <form className="mb-6">
          <input
            className="bg-white p-2 rounded-sm border border-neutral-200 w-[280px]"
            type="text"
            name="query"
            id="query"
            placeholder="Search by name or ingredient..."
          />
        </form>
        {/* Recipe Cards Grid */}
        <div className="w-full grid grid-cols-3 gap-10 pb-20 border-b border-b-neutral-200">
          {recipes.length === 0 ? (
            <p>No recipes found</p>
          ) : (
            recipes.map((recipe) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
