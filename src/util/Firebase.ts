/*
 * file: src/util/Firebase.ts
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: August 03, 2022
 */

export interface FirebaseConfig {
  apiKey: string | undefined
  authDomain: string | undefined
  projectId: string | undefined
  storageBucket: string | undefined
  messagingSenderId: string | undefined
  appId: string | undefined
  measurementId:string | undefined
};