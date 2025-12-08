import { Key } from 'react';
import BulletPoint from '../UI/BulletPoint';

type RecipeInstructionsProps = {
  instructions: string[];
};

const RecipeInstructions = ({ instructions }: RecipeInstructionsProps) => {
  return (
    <div>
      <h3 className="font-bold font-heading text-neutral-900 leading-tight text-2xl mb-2">
        Instructions:
      </h3>
      <div className="grid gap-2 mb-4">
        {instructions.map((item: string, index: Key) => (
          <BulletPoint key={index} text={item} noTitle />
        ))}
      </div>
    </div>
  );
};

export default RecipeInstructions;
