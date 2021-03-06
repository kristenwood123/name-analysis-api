const verifyApiKey = (req, res, next) => {
  if (req.query["API_KEY"] === process.env.API_KEY) {
    return next();
  }
  res.status(401).send("Unauthorized, must input API Key");
};

module.exports = { verifyApiKey };
