const verifyApiKey = (req, res, next) => {
  if (req.headers["x-api-key"] === process.env.API_KEY) {
    return next();
  }
  res.status(401).send("unauthorized");
};

module.exports = { verifyApiKey };
