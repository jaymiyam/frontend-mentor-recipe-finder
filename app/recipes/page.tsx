'use client';
import { useState, useEffect } from 'react';
import RecipeCard from '@/components/RecipeCard';
import RecipeFilterForm from '@/components/RecipeFilterForm';
import { RecipeType } from '@/models/Recipe';

export type RecipeDataType = RecipeType & {
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<RecipeDataType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [maxCooktime, setMaxCooktime] = useState(120);
  const [maxPreptime, setMaxPreptime] = useState(120);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch('/api/recipes');
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchRecipes();
  }, []);

  // filteredRecipes will be updated whenever searchQuery change and trigger re-render
  const filteredRecipes = recipes.filter((r) => {
    const matchSearchQuery = r.title
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
    const matchMaxCooktime = r.cookMinutes <= maxCooktime;
    const matchMaxPreptime = r.prepMinutes <= maxPreptime;

    return matchSearchQuery && matchMaxCooktime && matchMaxPreptime;
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-8 xl:mx-auto">
        {/* Hero section */}
        <div className="py-16 md:py-20 text-left md:text-center text-pretty flex flex-col items-center justify-center">
          <h1 className=" font-heading font-extrabold tracking-tight text-neutral-900 text-4xl md:text-5xl mb-4">
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
        <RecipeFilterForm
          searchQuery={searchQuery}
          onSearhQueryChange={setSearchQuery}
          maxCooktime={maxCooktime}
          onMaxCooktimeChange={setMaxCooktime}
          maxPreptime={maxPreptime}
          onMaxPreptimeChange={setMaxPreptime}
        />
        {/* Recipe Cards Grid */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 border-b border-b-neutral-200">
          {filteredRecipes.length === 0 ? (
            <p>No recipes found</p>
          ) : (
            filteredRecipes.map((recipe) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
