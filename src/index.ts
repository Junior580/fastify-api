import fastify from "fastify";

const app = fastify();

app.get("/", async (_, reply) => {
  reply.send({ message: "hello world" });
});

const PORT = Number(process.env.PORT) || 3000;
app.listen({ port: PORT, host: "0.0.0.0" }, () => {
  if (process.env.NODE_ENV == "dev") console.log("🔥 ~ server is running");
});
