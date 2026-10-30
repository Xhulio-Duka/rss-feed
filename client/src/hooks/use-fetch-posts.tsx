import useSWR from "swr";

export default function useFetchPosts() {
  const url = import.meta.env.VITE_API_URL;

  const { data, error, isLoading } = useSWR(url);

  return { data, error, isLoading };
}
