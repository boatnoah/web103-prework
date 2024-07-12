import useAllCreators from "../hooks/useAllCreators"
import Card from "../components/Card";
const ShowAllCreators = () => {
  const creatorsList = useAllCreators();

  return (
    <div>
      {
        creatorsList && creatorsList.map((creator) => (
          <Card name={creator.name} description={creator.description} id={creator.id} />
        ))
      }
    </div >
  )
}

export default ShowAllCreators
