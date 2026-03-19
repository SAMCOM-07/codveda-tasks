import { useEffect, useState } from 'react'
import type { RepoType } from '../types/type';

const useRepos = () => {


  const [repos, setRepos] = useState<RepoType[]>([]);
  const [loadingRepos, setLoadingRepos] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const currentUrl = new URL(window.location.href);
  const usernameFromUrl = currentUrl.searchParams.get("username");



  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingRepos(true);

        // fetch user details
        const response = await fetch(`https://api.github.com/users/${usernameFromUrl}/repos`);
        const data = await response.json();
        setRepos(data);

      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching repositories");
        setLoadingRepos(false);
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchData();
  }, [usernameFromUrl]);

  return { repos, loadingRepos, error };
}

export default useRepos
