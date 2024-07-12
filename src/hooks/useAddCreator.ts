import { useEffect } from "react";
import { supabase } from "../client";

interface Creator {
  id: number;
  name: string;
  url: string;
  description: string;
  imageURL: string;
  created_at: string;
}

export default function useAllCreators({
  name,
  url,
  description,
  imageURL,
}: Creator) {
  useEffect(() => {
    const fetchCreators = async () => {
      try {
        await supabase
          .from("creators")
          .insert({
            name: name,
            url: url,
            description: description,
            imageURL: imageURL,
          })
          .select();
      } catch (err) {
        console.error(err);
      }
    };

    fetchCreators();
  }, []);
}
