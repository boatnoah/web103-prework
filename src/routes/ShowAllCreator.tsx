import useAllCreators from "../hooks/useAllCreators";
import Card from "../components/Card";

const ShowAllCreators = () => {
  const creatorsList = useAllCreators();

  return (
    <div className="grid grid-cols-3 h-screen w-full">
      {creatorsList && creatorsList.length > 0 ? (
        creatorsList.map((creator) => (
          <Card key={creator.id} name={creator.name} description={creator.description} id={creator.id} />
        ))
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-bold text-black text-center text-5xl">No creators available</h1>
        </div>
      )}
    </div>
  );
};

export default ShowAllCreators;
