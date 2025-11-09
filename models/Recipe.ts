import { Schema, models, model } from 'mongoose';

const RecipeSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      large: {
        type: String,
        required: true,
      },
      small: {
        type: String,
        required: true,
      },
    },
    overview: {
      type: String,
      required: true,
    },
    servings: {
      type: Number,
      required: true,
    },
    prepMinutes: { type: Number, required: true },
    cookMinutes: { type: Number, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

const Recipe = models.Recipe || model('Recipe', RecipeSchema);

export default Recipe;

export type RecipeType = {
  owner: string;
  title: string;
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  instructions: string[];
  image: { small: string; large: string };
};
