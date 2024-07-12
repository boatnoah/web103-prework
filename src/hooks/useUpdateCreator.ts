import { supabase } from "../client";

interface Creator {
  id?: string;
  name: string;
  urls: string[];
  description: string;
  created_at?: string;
}

export default function useUpdateCreator(id: string | undefined) {
  const updateCreator = async ({ name, urls, description }: Creator) => {
    try {
      const { data, error } = await supabase
        .from("creators")
        .update({ name: name, urls, description })
        .eq("id", id);

      if (error) throw error;

      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return updateCreator;
}
