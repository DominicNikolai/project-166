import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  let pathname = url.pathname;

  if (pathname === "/") pathname = "/index.html";

  try {
    return await serveFile(req, `.${pathname}`);
  } catch {
    return new Response("Archivo no encontrado", { status: 404 });
  }
});
