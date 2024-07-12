import useAllCreators from "../hooks/useAllCreators"
import Card from "../components/Card";
import { Link } from "react-router-dom";
const ShowAllCreators = () => {
  const creatorsList = useAllCreators();

  return (
    <div>
      {
        creatorsList && creatorsList.map((creator) => (
          <Link to={`view/${creator.id}`} key={creator.id}>
            <Card name={creator.name} description={creator.description} />
          </Link>
        ))
      }
    </div >
  )
}

export default ShowAllCreators
