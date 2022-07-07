import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

export function useAuth() {
  const value = useContext(AuthContext);

  if(!value) throw new Error("AuthContext value is undefined");

  return value;
}
