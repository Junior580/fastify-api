import { afterAll, beforeAll, expect, it, test } from "vitest";
import request from "supertest";
import app from "../src/app";

beforeAll(async () => {
  await app.ready();
});

afterAll(() => {
  app.close();
});

test("GET /", async () => {
  const req = await request(app.server).get("/");
  expect(req.status).toBe(200);
});
