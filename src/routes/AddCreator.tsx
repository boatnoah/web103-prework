import { useState } from "react";
import useAddCreator from "../hooks/useAddCreator";


const AddCreator: React.FC = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const addCreator = useAddCreator();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await addCreator({ name, url, description, imageURL });
    if (result) {
      // Creator was added successfully
      console.log('Creator added:', result);
      // Clear the form
      setName('');
      setUrl('');
      setDescription('');
      setImageURL('');
    };
  }


  return (
    <div className="flex flex-col justify-center items-center h-screen text-black border border-black bg-gray-100 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required className="border border-gray-300 p-2 rounded" />
        <input value={url} onChange={e => setUrl(e.target.value)} placeholder="URL" required className="border border-gray-300 p-2 rounded" />
        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required className="border border-gray-300 p-2 rounded" />
        <input value={imageURL} onChange={e => setImageURL(e.target.value)} placeholder="Image URL" required className="border border-gray-300 p-2 rounded" />
        <button type="submit" className="border border-black rounded-full p-2">Add Creator</button>
      </form>
    </div>
  );
}

export default AddCreator
