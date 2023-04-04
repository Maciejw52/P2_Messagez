import { useContext } from "react";
import { MessagePropsInterface } from "src/services/api/messageApi";
import { AuthContext } from "../context/auth";

export function useAuth() {
  const value: MessagePropsInterface  = useContext(AuthContext);
  if(!value) throw new Error("AuthContext value is undefined");

  return value;
}
