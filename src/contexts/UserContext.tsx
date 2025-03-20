import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const { handleSetAlert, setUserLoaded } = useContext(AppContext);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    loadLocalUser();
  }, []);

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
      saveLocalUser(user);
      setUser(user);
    } catch (err: any) {
      handleSetAlert(err.response.data.message);
    }
  }

  /**
 * Realize user signup/registration
 * @param email user email
 * @param password user password
 * @param name user full name
 * @param birthDate user birth date
 * @param gender user gender
 * @param phone user phone number
 * @param diabetesTypeId ID of the diabetes type
 * @param diagnosisYear year of diabetes diagnosis
 */
  async function signup(email: string, password: string, name: string, birthDate: string, gender: string, phone: string, diabetesTypeId: string, diagnosisYear: string) {
    try {
      const req = {
        url: `${process.env.EXPO_PUBLIC_API_URL}/auth/register`,
        method: "post",
        data: {
          email, password, name, birthDate, gender, phone, diabetesTypeId: parseInt(diabetesTypeId), diagnosisYear: parseInt(diagnosisYear),
        },
      };
      const res = await axios(req);
      const user: User = res.data;
      setUser(user);
    } catch (err: any) {
      handleSetAlert(err.response?.data?.message || "Erro ao realizar cadastro.");
    }
  }

  /**
   * Save user data to local storage
   * @param user user data
   */
  async function saveLocalUser(user: User) {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
      console.log(`saveLocalUser: ${err}`);
    }
  }
  
  /**
   * Load user data from local storage
   */
  async function loadLocalUser() {
    const user = await AsyncStorage.getItem('user');
    setUserLoaded(true);
    console.log(user);
    if (user) {
      setUser(JSON.parse(user));
    }
  }

  return (
    <UserContext.Provider value={{
      user,
      login,
      signup
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;