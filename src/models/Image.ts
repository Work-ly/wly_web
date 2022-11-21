/*
 * file: src/util/Image.ts
 * author: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: November 11, 2022
 */

export interface Image {
  width: number
  height: number
  offset_x: number
  offset_y: number
  type: string
  data: string
}