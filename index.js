import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "mySecretSession",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.get("/", (req, res) => {
  console.log(req.session);
  console.log("this is my id", req.session.id);

  res.status(200).send({
    message: "all done abay",
  });
});

app.get("/user", (req, res) => {
  req.session.user = {
    name: "aditya",
    age: 23,
    email: "adityaPrakash6576@gmail.com",
  };
  res.status(201).send(`the user is ${req.session.user.name} is liog-in`);
});

//how to delete the cookie from storage;

app.get("/logout", (req, res) => {
  // to delete the cookie from the storage;
  req.session.destroy();
  res.send({
    message: "user log0ut",
    username: req.session,
  });
});

app.listen(8080, () => {
  console.log("server is running");
});
