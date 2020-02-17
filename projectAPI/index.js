let express = require("express");
let app = express();
let mongoose = require("mongoose");
let port = process.env.PORT || 4600;
let user = require("./routes/userRoute");
let auth = require("./routes/auth/auth");
let config = require("config");
let mailer = require("./routes/mailer");
 app.use(express.json());
 if(!config.get("apitoken"))
 {
     process.exit(1);
 }

 mongoose
    .connect("mongodb://localhost/ecomm", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`connected  to DB successfully`))
    .catch((error) => console.log(`something went wrong ${error.message}`));

app.listen(port, () => console.log(`connected to port`));

app.use("/api", user);
app.use("/api/userlogin",auth)
app.use("/api",mailer);