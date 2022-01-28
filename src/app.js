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
    <body style='margin: 0'>
      <div style='margin:0;background-color:#99D0C7;color:#1A1B1B;height:100vh;width:100%;'>
        <div style='background-color:#FCF5EC;flex-direction:column;justify-content:center;align-items:center;margin:auto;height:350px;width:800px;position:fixed;top:0;bottom:0;left:0;right:0;border-radius:8px;text-align:center;padding:2rem;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);color:#5B6274'>
          <h1 style=>Hurray! Your result arrived</h1>
          <hr style='width:80%;height:1px;border:none;background-color:#F1863B'>
          <h3>Your name is ${firstName.toUpperCase()}. You are a ${gender} and currently ${age} years old.<h3> 
          <br> 
          <span style='color:#EC7037;letter-spacing:1px'>NAME ANALYSIS:</span><p style='font-weight:200;'>${nameAnalysis}</p>
        <div>
      </div>
    </body>`;
    res.status(200).send(resp);
  } catch (error) {
    res.status(500).send("Error analysing the data::", error);
  }
});

module.exports = app;
