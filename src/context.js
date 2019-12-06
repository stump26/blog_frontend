import { createContext } from 'react';

export const DarkModeContext = createContext(false);
export const UserInfoContext = createContext({
  userId: '',
  username: '',
  authority: null,
});
