import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const subscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
      setIsloading(false);
    });
    return subscribe;
  }, []);
  return [user, isLoading];
};
export default useUser;
