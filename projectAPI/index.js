let express = require("express");
let app = express();
let mongoose = require("mongoose");
let port = process.env.PORT || 4600;
let user = require("./routes/userRoute");
let auth = require("./routes/auth/auth");
let config = require("config");
let mailer = require("./routes/mailer");
let forgetpssword = require("./routes/forget.password");
let contact = require("./routes/contactApi");
let product = require("./routes/productApi");
let category = require("./routes/categoryApi");
let cartItem = require("./routes/usercartApi");
let adminLogin = require("./routes/Admin/login");
let cors = require("cors");

app.use("/uploads", express.static("uploads"));
app.use(cors());

app.use(express.json());
if (!config.get("apitoken")) {
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/ecomm", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`connected  to DB successfully`))
  .catch(error => console.log(`something went wrong ${error.message}`));

app.listen(port, () => console.log(`connected to port`));

app.use("/api", user);
app.use("/api/userlogin", auth);
app.use("/api", mailer);
app.use("/api", forgetpssword);
app.use("/api", contact);
app.use("/api", product);
app.use("/api", category);
app.use("/api", cartItem);
app.use("/api/admin", adminLogin);
