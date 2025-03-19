import React, { useState } from "react";
import { View } from "react-native";

import AuthRoutes from "./AuthRoutes";

export default function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AuthRoutes />
  }

  return <View />
}