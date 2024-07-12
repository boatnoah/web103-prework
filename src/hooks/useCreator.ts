import { useState, useEffect } from "react";
import { supabase } from "../client";

interface Creator {
  id: number;
  name: string;
  url: string;
  description: string;
  imageURL: string;
  created_at: string;
}

export default function useCreator(id: number) {
  const [creator, setCreator] = useState<Creator>();

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase
          .from("creators")
          .select()
          .eq("id", id)
          .single();

        if (error) throw error;

        setCreator(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCreators();
  }, []);

  return creator;
}
