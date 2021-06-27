import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

/**
 * Hook criado para evitar as duas importações acima
 * @returns 
 */
export function useAuth(){
   const value = useContext(AuthContext);

   return value;
}