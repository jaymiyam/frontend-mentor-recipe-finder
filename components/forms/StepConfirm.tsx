import { UseFormReturn } from 'react-hook-form';
import { AddRecipeFormValues } from '@/schemas/recipeSchema';
import Image from 'next/image';

type StepConfirmProps = {
  form: UseFormReturn<AddRecipeFormValues>;
};

const StepConfirm = ({ form }: StepConfirmProps) => {
  const values = form.getValues();
  return (
    <div className="grid gap-y-2 md:grid-cols-2">
      <div className="grid gap-y-2">
        <div>
          <h3 className="font-bold">Name:</h3>
          <p>{values.title}</p>
        </div>
        <div>
          <h3 className="font-bold">Overview:</h3>
          <p>{values.overview}</p>
        </div>
        <div>
          <p>
            <strong>Servings:</strong> {values.servings}
          </p>
          <p>
            <strong>Prep Time:</strong> {values.prepMinutes} minutes
          </p>
          <p>
            <strong>Cook Time:</strong> {values.cookMinutes} minutes
          </p>
        </div>

        <div>
          <strong>Ingredients:</strong>
          <ul>
            {values.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Instructions:</strong>
          <ul>
            {values.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>
      </div>

      {values.image?.[0] && (
        <div>
          <strong>Image:</strong>
          <Image
            src={URL.createObjectURL(values.image[0])}
            width={250}
            height={250}
            alt="Preview"
          />
        </div>
      )}
    </div>
  );
};

export default StepConfirm;
