/*
 * file: src/util/Base64.ts
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: August 03, 2022
 */

export default async function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    fileReader.onerror = (error) => {
      reject(error);
    }
  })
}