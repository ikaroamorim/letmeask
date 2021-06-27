import { IUser } from "./IUser";

export interface IAuthContext {
   user: IUser | undefined;
   signInWithGoogle: () => Promise<void>;
}