/*
 * file: src/util/Base64.ts
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: August 03, 2022
 */

const toBase64 = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
})

export default toBase64