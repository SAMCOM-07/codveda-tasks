import { useEffect, useState } from 'react'

const useAnalytics = () => {

  const [contributions, setContributions] = useState<number>(0);
  const [loadingAnalytic, setLoadingAnalytic] = useState<boolean>(false);

  const currentUrl = new URL(window.location.href);
  const usernameFromUrl = currentUrl.searchParams.get("username");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingAnalytic(true);

        // fetching total contributions
        const contributionsRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${usernameFromUrl}`);
        const contributionsData = await contributionsRes.json();
        const totalContributions = contributionsData.contributions.reduce((total: number, contribution: { count: number }) => total + contribution.count, 0);
        setContributions(totalContributions);

      } catch (error) {
        console.error("Error fetching data:", error);
        setLoadingAnalytic(false);
      } finally {
        setLoadingAnalytic(false);
      }
    };

    fetchData();
  }, [usernameFromUrl]);

  return { contributions, loadingAnalytic };
}

export default useAnalytics