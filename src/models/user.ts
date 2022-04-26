import { useState, useCallback } from 'react';

export default () => {
  const [userInfo, setUserInfo] = useState({});

  const deleteInfo = useCallback(() => {
    setUserInfo({});
  }, []);

  const setInfo = useCallback((info: object) => setUserInfo(info), []);

  return {
    userInfo,
    deleteInfo,
    setInfo,
  };
};
