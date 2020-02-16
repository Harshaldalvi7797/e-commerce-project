let express = require("express");
let app = express();
let mongoose = require("mongoose");
let port = process.env.PORT || 4600;
 app.use(express.json());

 mongoose
    .connect("mongodb://localhost/ecomm", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`connected  to DB successfully`))
    .catch((error) => console.log(`something went wrong ${error.message}`));

app.listen(port, () => console.log(`connected to port`));
