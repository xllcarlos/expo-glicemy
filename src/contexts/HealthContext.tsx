import React, { createContext, useState } from "react";

const HealthContext = createContext({} as any);

export function HealthProvider({ children }: any) {
  const [bloodGlucose, setBloodGlucose] = useState<[]>([]);
  const [hba1c, setHba1c] = useState<[]>([]);
  const [weight, setWeight] = useState<[]>([]);
  const [height, setHeight] = useState<[]>([]);

  return (
    <HealthContext.Provider value={{
      bloodGlucose,
      hba1c,
      weight,
      height
    }}>
      {children}
    </HealthContext.Provider>
  );
}