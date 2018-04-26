import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import * as types from "./api/types";
import * as validators from "./api/validators";

// start-generated-section endpointImports
import { describe } from "./endpoints/describe";
// end-generated-section endpointImports

const PORT = 8012;

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
      // If you want to only allow some origins, use the following instead:
      // callback(new Error(`Access is not allowed from ${origin}.`));
    },
  }),
);

// start-generated-section httpHooks
app.get("/describe", async (req, res, next) => {
  try {
    const response: types.Describe_Response = await describe();
    switch (response.kind) {
      case "success":
        if (!validators.validate_DescribeResponse(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        res.status(200);
        res.json(response.data);
        break;
      case "failure":
        if (!validators.validate_string(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        res.status(409);
        res.json(response.data);
        break;
      default:
        throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
    }
  } catch (err) {
    next(err);
  }
});
// end-generated-section httpHooks

// tslint:disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
