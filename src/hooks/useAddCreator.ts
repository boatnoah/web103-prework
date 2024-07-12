import { supabase } from "../client";

interface Creator {
  id?: number;
  name: string;
  url: string;
  description: string;
  imageURL: string;
  created_at?: string;
}

export default function useAddCreator() {
  const addCreator = async ({ name, url, description, imageURL }: Creator) => {
    try {
      const { data, error } = await supabase
        .from("creators")
        .insert({ name: name, url: url, description, imageURL })
        .select();

      if (error) throw error;

      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return addCreator;
}
