import { useParams } from "react-router-dom";
import useCreator from "../hooks/useCreator";

const ViewCreator = () => {
  const { id } = useParams(); // Use RouteParams to define the type
  const creatorDetails = useCreator(id);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {creatorDetails && (
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">{creatorDetails.name}</h1>
          <p className="text-gray-700 mb-4">{creatorDetails.description}</p>
          <div>
            {creatorDetails.urls.map((url, index) => (
              <a
                href={url}
                key={url}
                className="block text-blue-500 hover:underline"
              >
                Url {index + 1}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCreator;
