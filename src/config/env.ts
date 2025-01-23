import * as z from "zod";
import "dotenv/config";

const createEnv = () => {
 const EnvSchema = z.object({
  GITHUB_API: z.string().url(),
  VERCEL_PROJECT_API: z.string().url(),
  PUBLIC_URL: z.string().url(),
  GH_TOKEN: z.string().min(1),
  VERCEL_TOKEN: z.string().min(1),
 });

 const envVars = {
  GITHUB_API: process.env.NEXT_GITHUB_API,
  VERCEL_PROJECT_API: process.env.NEXT_VERCEL_PROJECTS_API,
  PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  GH_TOKEN: process.env.NEXT_GH_TOKEN,
  VERCEL_TOKEN: process.env.NEXT_VERCEL_TOKEN,
 };

 const parsedEnv = EnvSchema.safeParse(envVars);

 if (!parsedEnv.success) {
  throw new Error(
   `Invalid env provided.
  The following variables are missing or invalid:
  ${Object.entries(parsedEnv.error.flatten().fieldErrors)
   .map(([k, v]) => `- ${k}: ${v}`)
   .join("\n")}
  `,
  );
 }

 return parsedEnv.data ?? {};
};

export const env = createEnv();
