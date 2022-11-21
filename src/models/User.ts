/*
 * file: src/models/User.ts
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: November 11, 2022
 */

import {LocalTeam} from './Team'
import {Image} from './Image'
import { LocalProject } from './Project'

export interface LocalUser {
  name: string
  email: string
  pfp: Image 
  header: Image 
  description: string
  teams: Array<LocalTeam>
}

export interface FirebaseUser {
  kind: string
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
}

export interface CreateUserRequest {
  name: string
  email: string
  description: string
  password: string
  pfp: Image
  header: Image
}

export interface CreateUserResponse {
  wly_user: LocalUser,
  firebase_user: FirebaseUser
}

export interface UserTeam {
  name: string,
  role: string
}

export interface UserProject {
  role: string,
  user: LocalUser,
  project: LocalProject
}