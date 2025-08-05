import { Hono } from "hono";
import { ContextExtended } from "../types";

const notes = new Hono();

notes.get("/", async (ctx: ContextExtended) => {
  const db = ctx.env.DB;
  const notes = await db.prepare("SELECT * FROM note LIMIT 50").run();

  return Response.json(notes.results);
});

notes.get("/:id", async (ctx: ContextExtended) => {});

notes.post("/", async (ctx: ContextExtended) => {});

notes.put("/:id", async (ctx: ContextExtended) => {});

notes.delete("/:id", async (ctx: ContextExtended) => {});

export default notes;
