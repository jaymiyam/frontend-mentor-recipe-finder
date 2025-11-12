import connectDB from '@/config/database';
import Recipe from '@/models/Recipe';
import EditRecipeForm from '@/components/EditRecipeForm';
import { convertToSerializeableObject } from '@/utils/convertToPlainObj';

type EditRecipePageProps = {
  params: Promise<{ id: string }>;
};

const EditRecipePage = async ({ params }: EditRecipePageProps) => {
  const { id } = await params;
  await connectDB();

  const targetRecipeDoc = await Recipe.findById(id).lean();
  const targetRecipe = convertToSerializeableObject(targetRecipeDoc);
  if (!targetRecipe) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Recipe Not Found.
      </h1>
    );
  }

  return (
    <section>
      <div className="max-w-[1200px] mx-4 md:mx-8 xl:mx-auto">
        <div className="py-16 md:py-20 text-pretty flex flex-col items-center justify-center">
          <h1 className=" font-heading font-extrabold tracking-tight text-center text-neutral-900 text-4xl md:text-5xl mb-8">
            Edit recipe
          </h1>
          <EditRecipeForm recipe={targetRecipe} />
        </div>
      </div>
    </section>
  );
};

export default EditRecipePage;
