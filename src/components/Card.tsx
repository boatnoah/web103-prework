import { useNavigate } from "react-router-dom"

interface CardInfo {
  id: string,
  name: string,
  description: string,
};

const Card = ({ name, description, id }: CardInfo) => {
  const navigate = useNavigate();

  const handleDivClick = () => {
    navigate(`/view/${id}`)
  }

  const handleClick = () => {
    navigate(`/edit/${id}`)
  }


  return (
    <div className="flex flex-col border border-black m-10 p-10 w-1/5 rounded-lg bg-gray-100 gap-4">
      <div onClick={handleDivClick}>
        <h1 className="text-3xl font-bold">{name || "Name"}</h1>
        <h2 className="text-lg font-semibold">Description</h2>
        <p>{description}</p>
      </div>
      <button className="border border-black rounded-lg p-2 mt-auto" onClick={handleClick}>Edit</button>
    </div>
  )
}

export default Card;
