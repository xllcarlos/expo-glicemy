import React, { useContext, useState } from "react";
import { View } from "react-native";

import AuthRoutes from "./AuthRoutes";
import UserContext from "../contexts/UserContext";

export default function Routes() {
  const { user } = useContext(UserContext);

  if (user === null) {
    return <AuthRoutes />
  }

  return <View />
}