import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const portEnv = Deno.env.get("PORT") || "8080";
console.log(portEnv);

const s = serve({ port: parseInt(portEnv) });
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}