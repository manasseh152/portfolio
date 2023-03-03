import z from "zod";

export const createToastSchema = z.object({
	message: z.string(),
	type: z.enum(["info", "success", "warning", "error", "default"]),
	lifespan: z.number(),
	removeable: z.boolean(),
});
