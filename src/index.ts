import app from "./app";

async function main() {
  try {
    const PORT = Number(process.env.PORT) || 3000;
    await app.listen({ port: PORT, host: "0.0.0.0" }, () => {
      if (process.env.NODE_ENV == "dev") console.log("🔥 ~ server is running");
    });
  } catch (err) {
    if (process.env.NODE_ENV == "dev") app.log.error(err);
    process.exit();
  }
}

main();
