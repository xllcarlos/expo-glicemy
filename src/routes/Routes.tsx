import React, { useContext, useState } from "react";

import AuthRoutes from "./AuthRoutes";
import UserContext from "../contexts/UserContext";
import AppRoutes from "./AppRoutes";
import AppContext from "../contexts/AppContext";

export default function Routes() {
  const { userLoaded } = useContext(AppContext);
  const { user } = useContext(UserContext);

  if (!userLoaded) {
    return null;
  }

  if (user === null) {
    return <AuthRoutes />
  }

  return <AppRoutes />
}