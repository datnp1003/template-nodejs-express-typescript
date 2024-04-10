import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import * as swaggerDocument from './swagger/swagger.json';
import { HelloWorldController } from "./controllers/hello-worldController";
import { RegisterRoutes } from "./routes";

const helloWordController = new HelloWorldController();
const app = express();
const port = process.env.PORT || 3000;
//#region Swagger Configuration
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//#endregion
app.get("/", (req, res) => {
  res.send("Hello World!");
});
RegisterRoutes(app);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
