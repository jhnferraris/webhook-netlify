# webhook-netlify

This is a sample of a webhook that can be used on any system (e.g. gateways) that will notify your application via a POST endpoint.

## How to call the webhook using the sample

This sample code used Netlify to host the Express server. Follow the [guide here](https://docs.netlify.com/frameworks/express/#use-express-without-a-frontend).

### Calling the webhook

Once you have deployed the repository in your Netlify account, the POST endpoint `/api/webhook` will now work. You can use any cURL application like Postman to simulate a webhook call


Screenshot of Postman
<img width="1025" alt="Screen Shot 2022-05-19 at 8 43 35 AM" src="https://user-images.githubusercontent.com/3207153/169178624-7d3398ea-4d10-4a47-a9e3-0fdaf4965844.png">

On live applications, webhook endpoints are typically registered on the 3rd party APIs (e.g. payment service providers) to enable these APIs to notify their client's applications.
