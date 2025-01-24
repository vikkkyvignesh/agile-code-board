import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

export const useCurrent = () => {
  const query = useQuery({
    queryKey: ["current"],
    queryFn: async () => {
      const resp = await client.api.auth.current.$get();

      if (!resp.ok) {
        return null;
      }

      const { data } = await resp.json();
      return data;
    },
  });

  return query;
};
