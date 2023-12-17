const express = require("express");
const app = express();
const cors = require("cors");
require("./schemas/config");

app.use(express.json());
app.use(cors());

app.listen(1000, () => {
  console.log("Server is running on port 1000");
});

app.use(
  cors({
    origin: ["https://nodecheck-blond.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
const laptoprouter = require("./schemas/productrouter/laptop");
const userrouter = require("./schemas/productrouter/user");
app.use("/laptop", laptoprouter);
app.use("/user", userrouter);
app.use("/", (req, res) => {
  res.send("thiis response");
});
