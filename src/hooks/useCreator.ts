import { useState, useEffect } from "react";
import { supabase } from "../client";

interface Creator {
  id: string;
  name: string;
  urls: string[];
  description: string;
  created_at: string;
}

export default function useCreator(id: string | undefined) {
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
