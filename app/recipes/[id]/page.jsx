const RecipePage = async ({ params }) => {
  const { id } = await params;
  return <p>{id}</p>;
};

export default RecipePage;
