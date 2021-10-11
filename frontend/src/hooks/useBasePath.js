import { useLocation } from "react-router-dom";

export const useBasePath = () => {
  const { pathname } = useLocation();
 
  return pathname.slice(0, pathname.lastIndexOf('/') || pathname.length)
};

export default useBasePath;
