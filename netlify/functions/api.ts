import express, { Router } from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";

const api = express();
api.use(bodyParser.json())

const router = Router();
router.post("/webhook", (req, res) => {
  processWebhookNotificationData(req.body);
  res.send({
    webhookDataProcessed: 'success',
  })
});

api.use("/api/", router);

const processWebhookNotificationData = (data) => {
  // TODO: You will have to implement the logic of this method.
  // i.e. DB updates, fulfillment flow, etc.
  console.log(`Processing data`);
  console.log(data);
  console.log(`Done`)
}

export const handler = serverless(api);
