import { useEffect, useState } from 'react';
import type { UserType } from '../types/type';

const useUser = () => {
  const [user, setUser] = useState({} as UserType);
  const [error, setError] = useState<string>("");
  const currentUrl = new URL(window.location.href);
  const usernameFromUrl = currentUrl.searchParams.get("username");

  const [loadingUser, setLoadingUser] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!usernameFromUrl) {
          return;
        }
        setLoadingUser(true);
        
        const response = await fetch(`https://api.github.com/users/${usernameFromUrl}`);
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching user details or user not found");
        alert("Error fetching user details or user not found");
      } finally {
        setLoadingUser(false);
      }
    };

    fetchData();
  }, [usernameFromUrl]);

  return { user, loadingUser, error };
};

export default useUser;
