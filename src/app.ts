import fastify from "fastify";

const app = fastify();

app.get("/", async (_, reply) => {
  reply.send({ message: "hello world" });
});

export default app;
