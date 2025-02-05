import { supabase } from "../client";

interface Creator {
  id?: string;
  name: string;
  urls: string[];
  description: string;
  created_at?: string;
}

export default function useAddCreator() {
  const addCreator = async ({ name, urls, description }: Creator) => {
    try {
      const { data, error } = await supabase
        .from("creators")
        .insert({ name: name, urls, description })
        .select();

      if (error) throw error;

      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return addCreator;
}
