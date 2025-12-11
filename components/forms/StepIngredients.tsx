import { UseFormReturn } from 'react-hook-form';
import { AddRecipeFormValues } from '@/schemas/recipeSchema';

type StepIngredientsProps = {
  form: UseFormReturn<AddRecipeFormValues>;
};

const StepIngredients = ({ form }: StepIngredientsProps) => {
  const {
    register,
    setValue,
    watch,
    unregister,
    formState: { errors },
  } = form;

  // watch and keep a live copy of ingredients and instructions input fields
  const ingredients = watch('ingredients') ?? [];
  const instructions = watch('instructions') ?? [];

  const appendIngredient = () => {
    const next = [...ingredients, ''];
    setValue('ingredients', next, { shouldDirty: true, shouldValidate: true });
  };

  const removeIngredient = (index: number) => {
    if (ingredients.length <= 1) {
      return;
    }

    unregister(`ingredients.${index}` as const);
    const next = ingredients.filter(
      (_, currentIndex) => currentIndex !== index
    );
    setValue('ingredients', next, { shouldDirty: true, shouldValidate: true });
  };

  const appendInstruction = () => {
    const next = [...instructions, ''];
    setValue('instructions', next, { shouldDirty: true, shouldValidate: true });
  };

  const removeInstruction = (index: number) => {
    if (instructions.length <= 1) {
      return;
    }

    unregister(`instructions.${index}` as const);
    const next = instructions.filter(
      (_, currentIndex) => currentIndex !== index
    );
    setValue('instructions', next, { shouldDirty: true, shouldValidate: true });
  };

  return (
    <div>
      <fieldset className="grid gap-y-4">
        <legend className="text-lg font-semibold text-neutral-900">
          Ingredients
        </legend>

        <div className="grid gap-y-3">
          {ingredients.map((_, index) => (
            <div key={`ingredient-${index}`} className="grid gap-y-2">
              <div className="flex items-start gap-x-3">
                <input
                  type="text"
                  {...register(`ingredients.${index}` as const)}
                  className="grow rounded-lg border border-neutral-300 px-3 py-2 text-base outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
                  placeholder={`Ingredient ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  disabled={ingredients.length === 1}
                  className="cursor-pointer rounded-md border border-neutral-300 px-2 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Remove
                </button>
              </div>
              {errors.ingredients?.[index] && (
                <span
                  id={`ingredient-${index}-error`}
                  className="text-sm text-red-600"
                >
                  {errors.ingredients[index]?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={appendIngredient}
          className="cursor-pointer inline-flex w-fit items-center gap-x-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
        >
          Add ingredient
        </button>

        {typeof errors.ingredients?.message === 'string' && (
          <span className="text-sm text-red-600">
            {errors.ingredients?.message}
          </span>
        )}
      </fieldset>

      <fieldset className="grid gap-y-4">
        <legend className="text-lg font-semibold text-neutral-900">
          Instructions
        </legend>

        <div className="grid gap-y-3">
          {instructions.map((_, index) => (
            <div key={`instruction-${index}`} className="grid gap-y-2">
              <div className="flex items-start gap-x-3">
                <input
                  {...register(`instructions.${index}` as const)}
                  className="grow rounded-lg border border-neutral-300 px-3 py-2 text-base outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
                  placeholder={`Step ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeInstruction(index)}
                  disabled={instructions.length === 1}
                  className="cursor-pointer rounded-md border border-neutral-300 px-2 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Remove
                </button>
              </div>
              {errors.instructions?.[index] && (
                <span
                  id={`instruction-${index}-error`}
                  className="text-sm text-red-600"
                >
                  {errors.instructions[index]?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={appendInstruction}
          className="cursor-pointer inline-flex w-fit items-center gap-x-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
        >
          Add instruction
        </button>

        {typeof errors.instructions?.message === 'string' && (
          <span className="text-sm text-red-600">
            {errors.instructions?.message}
          </span>
        )}
      </fieldset>
    </div>
  );
};

export default StepIngredients;
