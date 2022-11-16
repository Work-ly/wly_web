/*
 * file: src/User.tsx
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: August 03, 2022
 */

import React from 'react'
import { createContext, ReactNode, useState } from 'react'
import { LocalUser } from './models/User'

interface UserContext_ {
  user: LocalUser | null
  setUser: React.Dispatch<React.SetStateAction<LocalUser | null>>
}

interface Props {
  children: ReactNode
}

export var UserContext: React.Context<UserContext_>

export function UserContextProvider({ children }: Props): JSX.Element {
  const [user, setUser] = useState<LocalUser | null>(null)
  UserContext = createContext<UserContext_>({ user: user, setUser: setUser })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
