import type { ObjectId } from "mongodb"

export type KGCode = {
  "_id"?: ObjectId,
  "latitude": number,
  "longitude": number,
  "kgcode": string
}