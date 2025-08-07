import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useRouteChange = (callback) => {
  const location = useLocation();

  useEffect(() => {
    if (callback && typeof callback === 'function') {
      callback(location.pathname);
    }
  }, [location.pathname, callback]);

  return location;
};
