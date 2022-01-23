const express = require("express");
const app = express();

const data = require("../utils/db.json");
const {
  letters,
  validateName,
  validateGender,
  validateAge,
} = require("../utils/index");

app.get("/api/:firstName/:gender/:age", (req, res) => {
  const { firstName, gender, age } = req.params;
  let sumOfName = 0;

  // Name Validation
  const nameError = validateName(firstName).error;
  if (nameError) {
    return res.status(400).send({ nameError });
  }

  // Gender Validation
  const genderError = validateGender(gender).error;
  if (genderError) {
    return res.status(400).send({ genderError });
  }

  // Age Validation
  const ageError = validateAge(age).error;
  if (ageError) {
    return res.status(400).send({ ageError });
  }

  for (let i = 0; i < firstName.length; i++) {
    let current = firstName[i];
    sumOfName += letters[current];
  }

  // Name Analysis
  let nameAnalysis = data.users.find((desc) => desc.id === sumOfName)[gender];

  if (age <= 50) {
    nameAnalysis = nameAnalysis["description1"];
  } else {
    nameAnalysis = nameAnalysis["description2"];
  }

  res.status(200).send({ analysis: nameAnalysis });
});

module.exports = app;
