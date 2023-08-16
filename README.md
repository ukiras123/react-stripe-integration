# Integration of Stripe with React for Payment

## How to

### Client Side code

- There is a separate folder for client (React)

- Client is deployed in Vercel `https://react-stripe-integration.vercel.app/`

- #### To Start Locally:
  - `yarn` to install all dependencies
  - `yarn start`
  - Make sure you create `.env` file with Stripe PK and Backend URL. Check `.env-sample` file for reference.

### Server Side code

- There is a separate folder for API (Express) to handle checkout

- API is hosted on Render `https://stripe-api-k4fu.onrender.com/health`

- #### To Start Locally:
  - `yarn` to install all dependencies
  - `yarn start`
  - Make sure you create `.env` file with Stripe SK and Frontend URL. Check `.env-sample` file for reference.

> Note: `main` branch has full integration build, `client` branch is without integration
