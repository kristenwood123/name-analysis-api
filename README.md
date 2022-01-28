# REST API Name Analysis

This API allows you to find out what your name says about you with a name analysis!

#### Live server
[Name-Analysis-Api](https://name-analysis-api-v.herokuapp.com/)


### Getting Started
Clone this repository and install dependencies
```sh
> git clone https://github.com/kristenwood123/name-analysis-api.git
> cd name-analysis-api
> npm install
> touch .env && echo "API_KEY=6631fe3a-8bfd-48de-bcdb-aa21e923aad5" > .env
```
> after installation, run `npm run dev` from the root of the application

The API is available at http://localhost:3000

### Test
run `npm test`

### Endpoints
`/` - Home page
`/api/:firstName/:gender/:age?API_KEY=6631fe3a-8bfd-48de-bcdb-aa21e923aad5` - the route to pass your information where firstname, gender and age are your data

- In order to access the API, be sure to input the API_KEY provided
- Ex: `/api/mark/male/25?API_KEY=6631fe3a-8bfd-48de-bcdb-aa21e923aad5`
