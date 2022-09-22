const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const expressHbs = require("express-handlebars");

const app = express();

// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
// app.set("view engine", "hbs");
// app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "views");
// Add templating engine to Express app and tell it where to read the files.
// Use 'render' instade of 'sendFile' to choose the .pug file.

const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
// To parse the 'body' object received from request.

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
