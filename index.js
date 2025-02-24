import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    message: "all done abay",
  });
});

app.listen(8080, () => {
  console.log("server is running");
});
