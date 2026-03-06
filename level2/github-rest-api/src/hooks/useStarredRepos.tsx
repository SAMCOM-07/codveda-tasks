import { useEffect, useState } from 'react'
import type { RepoType } from '../types/type';

const useStarredRepos = () => {

  const [starredRepos, setStarredRepos] = useState<RepoType[]>([]);
  const [error, setError] = useState<string>("");


  const currentUrl = new URL(window.location.href);
  const usernameFromUrl = currentUrl.searchParams.get("username");


  const [loadingStarredRepos, setLoadingStarredRepos] = useState<boolean>(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingStarredRepos(true);

        // fetch starred repos
        const starredRes = await fetch(`https://api.github.com/users/${usernameFromUrl}/starred`);
        const starredData = await starredRes.json();
        setStarredRepos(starredData);

      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching starred repositories");
        setLoadingStarredRepos(false);
      } finally {
        setLoadingStarredRepos(false);
      }
    };

    fetchData();
  }, [usernameFromUrl]);

  return { starredRepos, loadingStarredRepos, error };
}

export default useStarredRepos
