import fastify from "fastify";

const app = fastify();

app.get("/", async (request, reply) => {
  reply.send({ message: "hello world" });
});

export default app;
