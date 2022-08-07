/*
 * file: src/User.ts
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: August 03, 2022
 */

import { createContext, ReactNode, useState } from 'react'

export interface UserData {
  uid: string
  provider: string
  name: string | null
  email: string | null
  pfp?: string | null
}

export interface User {
  data: UserData | null
  isLoggedIn: boolean
}

interface UserContext_ {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User>> 
}

interface Props {
  children: ReactNode
}

export var UserContext: React.Context<UserContext_>

export function UserContextProvider({ children }: Props): JSX.Element {
  const [ user, setUser ]  = useState<User>({data: null, isLoggedIn: false} as User)
  UserContext = createContext<UserContext_>({ user: user, setUser: setUser })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}
