import { useState, useEffect } from "react";
import { supabase } from "../client";

interface Creator {
  id: string;
  name: string;
  urls: string[];
  description: string;
  created_at: string;
}

export default function useAllCreators() {
  const [creators, setCreators] = useState<Creator[]>([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase
          .from("creators")
          .select()
          .order("created_at", { ascending: true });

        if (error) throw error;

        setCreators(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCreators();
  }, []);

  return creators;
}
