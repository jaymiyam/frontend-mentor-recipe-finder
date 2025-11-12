'use server';
import connectDB from '@/config/database';
import Recipe from '@/models/Recipe';
import cloudinary from '@/config/cloudinary';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

type RecipeImage = {
  large: string;
  small: string;
};

const deleteRecipe = async (recipeId: string) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser) {
      throw new Error('A valid user is required to submit recipes');
    }

    const targetRecipe = await Recipe.findById(recipeId);
    if (!targetRecipe) {
      throw new Error('Recipe not found.');
    }

    //   validate ownership of the recipe
    if (targetRecipe.owner.toString() !== sessionUser.user.id) {
      throw new Error('Not authorized to delete this recipe.');
    }

    const images = targetRecipe.image as RecipeImage;

    const imageIds = Object.values(images).map((imagePath) => {
      const parts = imagePath.split('/');
      return parts.at(-1)?.split('.').at(0);
    });

    for (const id of imageIds) {
      await cloudinary.uploader.destroy(`healthy-recipe-finder/${id}`);
    }

    await targetRecipe.deleteOne();

    revalidatePath('/', 'layout');
  } catch (error) {
    console.error('Failed to delete recipe:', error);
    throw new Error('Failed to delete recipe. Please try again.');
  }
};

export default deleteRecipe;
