import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";

const useAuth = () => useContext<IAuthContextData>(AuthContext)

export default useAuth
