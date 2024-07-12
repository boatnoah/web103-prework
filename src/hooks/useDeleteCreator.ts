import { supabase } from "../client";

export default function useDeleteCreator() {
  return async (id: string | undefined) => {
    if (!id) {
      console.warn("No id provided to delete creator.");
      return;
    }

    try {
      await supabase.from("creators").delete().eq("id", id);
      console.log(`Creator with id ${id} deleted successfully.`);
    } catch (err) {
      console.error(`Error deleting creator with id ${id}:`, err);
    }
  };
}
