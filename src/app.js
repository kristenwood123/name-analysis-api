const express = require("express");
const app = express();

const data = require("../utils/db.json");
const {
  letters,
  validateName,
  validateGender,
  validateAge,
} = require("../utils/index");
const { verifyApiKey } = require("../src/middleware");

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      " Welcome to my Name Analysis App. \n Go to /api/:firstName/:gender/:age route where firstname, gender and age are your informations"
    );
});

app.get("/api/:firstName/:gender/:age", verifyApiKey, (req, res) => {
  try {
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

    const resp = `
    <div style='background-color:'pink'>
    <h2>Hurray! Your result arrived</h2>
    <hr>
    <h6>Your name is ${firstName}, you are a ${gender} and currently ${age} years old <h6> 
    <br> 
    Name Analysis: <p style='color:red'>${nameAnalysis}</p>
    </div>`;
    res.status(200).send(resp);
  } catch (error) {
    res.status(500).send("Error analysing the data::", error);
  }
});

module.exports = app;
