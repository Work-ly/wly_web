/*
 * file: src/util/Github.ts
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: August 02, 2022
 */

import { getAuth, GithubAuthProvider, signInWithPopup } from '@firebase/auth';
import { LocalUser, LoginUserRequest } from '../models/User';
import { LocalTeam } from '../models/Team'
import { Image } from '../models/Image';

export async function redirectToGithub(): Promise<LoginUserRequest | null> {
  const provider: GithubAuthProvider = new GithubAuthProvider();
  provider.addScope('user')

  var user = {} as LoginUserRequest

  const auth = getAuth();
  await signInWithPopup(auth, provider).then((result) => {
    // const credential = GithubAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;

    const fbUser = result.user;
    user = {
        email: (fbUser?.email != null) ? fbUser?.email : '',
        password: ''
    } as LoginUserRequest
  }).catch((error) => {
    console.log(error.code, error.message)

    return Promise.resolve(null)
  })

  return Promise.resolve(user)
}

