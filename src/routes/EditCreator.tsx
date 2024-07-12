import { useParams } from "react-router-dom";
import useCreator from "../hooks/useCreator";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUpdateCreator from "../hooks/useUpdateCreator";
import useDeleteCreator from "../hooks/useDeleteCreator";

const EditCreator: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [urls, setUrls] = useState<string[]>(['']);
  const [description, setDescription] = useState<string>('');
  const { id } = useParams(); // Use RouteParams to define the type
  const creatorDetails = useCreator(id);
  const updateCreator = useUpdateCreator(id);
  const deleteCreator = useDeleteCreator();

  useEffect(() => {
    if (creatorDetails) {
      setName(creatorDetails.name);
      setUrls(creatorDetails.urls);
      setDescription(creatorDetails.description);
    }
  }, [creatorDetails]);

  const navigate = useNavigate();


  const handleUrlChange = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const addUrlField = () => {
    setUrls([...urls, '']);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await updateCreator({ name, urls, description });

    if (result) {
      console.log(result);
    }

    navigate("/all");

  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    await deleteCreator(id);
    navigate("/all");
  }

  return (

    <div className="flex flex-col justify-center items-center h-screen text-white w-full p-4">
      <form className="max-w-lg w-full p-8 rounded shadow-md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative z-0 w-full mb-5 group col-span-2">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name" className="absolute text-sm text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Name
            </label>
          </div>

          {urls.map((url, index) => (
            <div key={index} className="relative z-0 w-full mb-5 group col-span-2">
              <input
                type="url"
                name={`url${index}`}
                id={`url${index}`}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder={`URL ${index + 1}`}
                value={url}
                onChange={(e) => handleUrlChange(index, e.target.value)}
                required={index === 0}
              />
              {index === urls.length - 1 && (
                <button type="button" className="text-black mt-1" onClick={addUrlField}>
                  Add Another URL
                </button>
              )}
            </div>
          ))}

          <div className="relative z-0 w-full mb-5 group col-span-2">
            <textarea
              name="description"
              id="description"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <label htmlFor="description" className="absolute text-sm text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
          </div>
          <div className="flex gap-10 col-span-2">
            <button type="submit" className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              Update Creator
            </button>
            <button onClick={handleDelete} className="text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              Delete Creator
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCreator;
