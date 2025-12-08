import { Key } from 'react';
import BulletPoint from '../UI/BulletPoint';

type RecipeIngredientsProps = {
  ingredients: string[];
};

const RecipeIngredients = ({ ingredients }: RecipeIngredientsProps) => {
  return (
    <div>
      <h3 className="font-bold font-heading text-neutral-900 leading-tight text-2xl mb-2">
        Ingredients:
      </h3>
      <div className="grid gap-2 mb-4">
        {ingredients.map((item: string, index: Key) => (
          <BulletPoint key={index} text={item} noTitle />
        ))}
      </div>
    </div>
  );
};

export default RecipeIngredients;
