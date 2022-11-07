/*
 * file: src/models/Team.ts
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: November 11, 2022
 */

import { UserTeam } from './User'

export interface LocalTeam {
  pfp: string
  header: string
  name: string
  description: string
  users: Array<UserTeam>
}