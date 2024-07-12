
const Card = () => {
  return (
    <div className="flex flex-col border border-black m-10 p-10 w-1/5 h-72 rounded-lg bg-gray-100">
      <h1 className="text-3xl font-bold">Name</h1>
      <h2 className="text-lg">Description</h2>
      <p>......................</p>
      <button className="border border-black rounded-lg">Edit</button>
    </div>
  )
}

export default Card
