import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { router } from "./src/routes";

const app = express();
const port = 3001;

//This one is for handle incoming json data
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/api/v1/tasklist", router);

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}....`);
});
