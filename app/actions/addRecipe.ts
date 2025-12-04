'use server';
import type { AddRecipeFormValues } from '@/components/AddRecipeForm';
import connectDB from '@/config/database';
import Recipe from '@/models/Recipe';
import { RecipeType } from '@/models/Recipe';
import { getSessionUser } from '@/utils/getSessionUser';
import cloudinary from '@/config/cloudinary';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const addRecipe = async (formData: AddRecipeFormValues) => {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser) {
    throw new Error('A valid user is required to submit recipes');
  }

  //   handle image file upload to cloudinary and store the image url
  let imageUploadResult;

  try {
    const imageBuffer = await formData.image[0].arrayBuffer();
    const imageData = Buffer.from(imageBuffer);
    const imageString = imageData.toString('base64');
    const dataUri = `data:image/png;base64,${imageString}`;
    imageUploadResult = await cloudinary.uploader.upload(dataUri, {
      folder: 'healthy-recipe-finder',
    });
  } catch (error) {
    console.log('Cloudinary upload failed', error);
    throw new Error('Image upload failed. Please try again.');
  }

  const largeImageUrl = imageUploadResult.secure_url;
  const smallImageUrl = largeImageUrl.replace('/upload', '/upload/w_600/');

  const recipeData: RecipeType = {
    owner: sessionUser.user.id,
    title: formData.title,
    overview: formData.overview,
    servings: formData.servings,
    prepMinutes: formData.prepMinutes,
    cookMinutes: formData.cookMinutes,
    image: {
      large: largeImageUrl,
      small: smallImageUrl,
    },
    ingredients: formData.ingredients,
    instructions: formData.instructions,
  };

  const newRecipe = new Recipe(recipeData);
  await newRecipe.save();

  revalidatePath('/', 'layout');
  redirect(`/recipes/${newRecipe._id}`);
};

export default addRecipe;
