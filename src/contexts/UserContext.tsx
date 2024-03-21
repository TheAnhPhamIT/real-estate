import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useLocalStorage } from "usehooks-ts";

const userKey = "user";

type User = {
  id: number;
  name: string;
  img: string;
};

type UserProviderProps = {
  children: ReactNode;
};

const UserContext = createContext<User | null>(null);
const UserUpdateContext = createContext<Dispatch<
  SetStateAction<User | null>
> | null>(null);

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useLocalStorage<User | null>(userKey, null);

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser!}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
