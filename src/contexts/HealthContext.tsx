import React, { createContext, useContext, useEffect, useState } from "react";

import UserContext from "./UserContext";
import axios from "axios";

const HealthContext = createContext({} as any);

export function HealthProvider({ children }: any) {
  const { user } = useContext(UserContext);

  const [bloodGlucose, setBloodGlucose] = useState<BloodGlucose[]>([]);
  const [glycatedHemoglobin, setGlycatedHemoglobin] = useState<GlycatedHemoglobin[]>([]);
  const [weight, setWeight] = useState<[]>([]);
  const [height, setHeight] = useState<[]>([]);

  console.log(glycatedHemoglobin);
  console.log(bloodGlucose);
  console.log(weight);
  console.log(height);

  useEffect(() => {
    if (user !== null) {
      getUserBloodGlucose();
      getUserHba1c();
      getUserWeight();
      getUserHeight();
    }
  }, [user]);

  async function getUserBloodGlucose() {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/records/glycemia`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });

      const bloodGlucoseList: BloodGlucose[] = response.data;
      setBloodGlucose(bloodGlucoseList);
    } catch (error) {
      console.error(error);
    }
  }

  async function getUserHba1c() {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/records/glycatedHemoglobin`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });

      const glycatedHemoglobinList: GlycatedHemoglobin[] = response.data;
      setGlycatedHemoglobin(glycatedHemoglobinList);
    } catch (error) {
      console.error(error);
    }
  }

  async function getUserWeight() {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/weights/weight`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });

      const weightList: [] = response.data;
      setWeight(weightList);
    } catch (error) {
      console.error(error); 
    }
  }

  async function getUserHeight() {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/heights/height`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });

      const heightList: [] = response.data;
      setHeight(heightList);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <HealthContext.Provider value={{
      bloodGlucose,
      glycatedHemoglobin,
      weight,
      height
    }}>
      {children}
    </HealthContext.Provider>
  );
}

export default HealthContext;