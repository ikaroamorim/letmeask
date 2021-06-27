//Importações React
import { createContext, useEffect, useState } from "react";

//Interfaces
import { IAuthContextComponentProps } from "../interfaces/IAuthContextCompontentProps";
import { IAuthContext } from "../interfaces/IAuthContextProps";
import { IUser } from "../interfaces/IUser";

//Serviços
import { auth, firebase } from "../services/firebase";

//Contextos
export const AuthContext = createContext({} as IAuthContext);

export function AuthContextProvider(props: IAuthContextComponentProps) {
   const [user, setUser] = useState<IUser>();

   /**
    * Use effect com o segundo parâmetro vazio ele dispara uma única vez quando carrega o ap
    */
   useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged(user => {
       if (user) {
 
         const { displayName, photoURL, uid } = user;
 
         if (!displayName || !photoURL) {
           throw new Error('Missing information from Google Account.');
         }
 
         setUser({
           id: uid,
           name: displayName,
           avatar: photoURL
         });
       }
     })
 
     /**
      * Sempre lembrar de descadastrar dos event listener quando criados no Use Effect
      */
     return () => {
       unsubscribe();
     }
   }, []);
 
   /**
    * Função responsável por logar no Google
    * é passado para o contexto para que outras páginas possa utilizar.
    */
   async function signInWithGoogle() {
     const provider = new firebase.auth.GoogleAuthProvider();
 
     const result = await auth.signInWithPopup(provider);
     if (result.user) {
       const { displayName, photoURL, uid } = result.user;
 
       if (!displayName || !photoURL) {
         throw new Error('Missing information from Google Account.');
       }
 
       setUser({
         id: uid,
         name: displayName,
         avatar: photoURL
       });
     }
   }

   return (
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
         {props.children}
      </AuthContext.Provider>

   );
}