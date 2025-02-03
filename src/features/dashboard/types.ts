import { z } from "zod";

export const ExecutiveProfileSchema = z.object({
  name: z.string(),
  role: z.string(),
  companyLogo: z.string(),
  profileImage: z.string(),
});

export type ExecutiveProfileType = z.infer<typeof ExecutiveProfileSchema>;
