'use server';
import type { AddRecipeFormValues } from '@/schemas/recipeSchema';
import connectDB from '@/config/database';
import Recipe from '@/models/Recipe';
import { RecipeType } from '@/models/Recipe';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const updateRecipe = async (
  recipeId: string,
  formData: AddRecipeFormValues
) => {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser) {
    throw new Error('A valid user is required to submit recipes');
  }

  const targetRecipe = await Recipe.findById(recipeId);

  if (!targetRecipe) {
    throw new Error('Recipe not found');
  }

  // validate ownership
  if (targetRecipe.owner.toString() !== sessionUser.user.id) {
    throw new Error('You are not authorized to edit this recipe.');
  }

  const recipeData: Partial<RecipeType> = {
    title: formData.title,
    overview: formData.overview,
    servings: formData.servings,
    prepMinutes: formData.prepMinutes,
    cookMinutes: formData.cookMinutes,
    ingredients: formData.ingredients,
    instructions: formData.instructions,
  };

  const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, recipeData);

  revalidatePath('/', 'layout');
  redirect(`/recipes/${updatedRecipe._id}`);
};

export default updateRecipe;
