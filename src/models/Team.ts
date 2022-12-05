/*
 * file: src/models/Team.ts
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: November 11, 2022
 */

import { UserTeam } from './User'
import { Image } from './Image'

export interface LocalTeam {
  pfp: Image
  header: Image
  name: string
  description: string
  users: Array<UserTeam>
}


export interface CreateTeamRequest {
  name: string
  description: string
  pfp: Image
  header: Image
}