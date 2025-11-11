import connectDB from '@/config/database';
import Recipe from '@/models/Recipe';
import { NextResponse } from 'next/server';

// API endpoint settings for GET request to '/api/recipes'
export async function GET() {
  try {
    await connectDB();
    const recipes = await Recipe.find();
    return NextResponse.json(recipes);
  } catch (error) {
    console.log('Error fetching recipes:', error);
    return NextResponse.json(
      { message: 'Failed to fetch recipes' },
      { status: 500 }
    );
  }
}
