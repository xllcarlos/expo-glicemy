import axios from "axios";
import React, { createContext, useContext, useState } from "react";

import AppContext from "./AppContext";

interface User {
  id: number,
  email: string
  name: string,
  gender: string,
  phone: string,
  diagnosisYear: number,
  diagnosisTypeId: number,
  token: string
}

const UserContext = createContext({} as any);

export function UserProvider({ children }: any) {
  const { handleSetAlert } = useContext(AppContext);

  const [user, setUser] = useState<User | null>(null);

  /**
   * Realize user login/authentication
   * @param email user email
   * @param password user password
   */
  async function login(email: string, password: string) {
    try {
      const req = {
        url: `${process.env.EXPO_PUBLIC_API_URL}/auth/login`,
        method: 'post',
        data: { email, password }
      }
      const res = await axios(req);
      const user: User = res.data;
      setUser(user);
    } catch (err: any) {
      handleSetAlert(err.response.data.message);
    }
  }

  return (
    <UserContext.Provider value={{
      user,
      login
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;