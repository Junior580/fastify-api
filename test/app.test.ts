import { beforeAll, expect, test } from "vitest";
import request from "supertest";
import app from "../src/app";

beforeAll(async () => {
  await app.ready();
});

test("GET /", async () => {
  const res = await request(app.server).get("/");
  expect(res.status).toBe(200);
  expect(res.body).toStrictEqual({ message: "hello world" });
});
