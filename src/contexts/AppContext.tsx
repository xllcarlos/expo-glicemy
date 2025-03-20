import React, { createContext, useState } from "react";

const AppContext = createContext({} as any);

export function AppProvider({ children }: any) {
  const [alert, setAlert] = useState<string | null>(null);
  const [userLoaded, setUserLoaded] = useState<boolean>(false);

  function handleSetAlert(message: string) {
    setAlert(message);
    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <AppContext.Provider value={{
      alert, handleSetAlert,
      userLoaded, setUserLoaded
    }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;