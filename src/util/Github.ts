/*
 * file: src/util/Github.ts
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: August 02, 2022
 */

import { getAuth, GithubAuthProvider, signInWithPopup } from '@firebase/auth';
import { User } from '../User';

export async function redirectToGithub(): Promise<User> {
  const provider: GithubAuthProvider = new GithubAuthProvider();
  provider.addScope('user')

  var user: User = {} as User

  const auth = getAuth();
  await signInWithPopup(auth, provider).then((result) => {
    // const credential = GithubAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;

    const fbUser = result.user;
    user = {
      data: {
        uid: fbUser.uid,
        provider: 'github',
        name: fbUser.displayName,
        email: fbUser.email,
        pfp: fbUser.photoURL
      },
      isLoggedIn: true
    }
  }).catch((error) => {
    user = {
      data: null,
      isLoggedIn: false
    }

    console.log(error.code, error.message)
  })

  return Promise.resolve(user)
}

