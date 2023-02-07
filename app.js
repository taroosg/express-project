import express from "express";
import { omikujiRouter } from "./routes/omikuji.route.js";
import { jankenRouter } from "./routes/janken.route.js";
import { scrapingRouter } from "./routes/scraping.route.js";
import { weatherRouter } from "./routes/weather.route.js";
import { todayRouter } from "./routes/today.route.js";

const app = express();
const port = 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static("static"));

// app.get("/", (req, res) => {
//   res.json({
//     uri: "/",
//     message: "Hello Node.js!",
//   });
// });

app.use("/omikuji", (req, res) => omikujiRouter(req, res));
app.use("/janken", (req, res) => jankenRouter(req, res));
app.use("/scraping", (req, res) => scrapingRouter(req, res));
app.use("/weather", (req, res) => weatherRouter(req, res));
app.use("/today", (req, res) => todayRouter(req, res));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});