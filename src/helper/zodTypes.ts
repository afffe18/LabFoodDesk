import { z } from "zod"

export const id = z.string().length(25)

export type  Tid  = z.infer<typeof id>

export const idObj = z.object({"id": id})
