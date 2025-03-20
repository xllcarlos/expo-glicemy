import React, { createContext, useState } from "react";

const UserContext = createContext({} as any);

export function UserProvider({children}: any) {
  const [user, setUser] = useState<any | object>({});

  return(
    <UserContext.Provider value={{
      user
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;