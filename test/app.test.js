const request = require("supertest");
const assert = require("assert");
const app = require("./../src/app");

describe("API", () => {
  it("should return an error due to incorrect character length", () => {
    request(app)
      .get("/api/f/male/35")
      .expect(400)
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) throw err;

        assert.deepEqual(res.body, {
          nameError: "Name must be a minimum of 2 characters and maximum of 13",
        });
      });
  });
});

describe("API", () => {
  it("should return an error due to a symbol", () => {
    request(app)
      .get("/api/fran'k/male/35")
      .expect(400)
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) throw err;

        assert.deepEqual(res.body, {
          nameError: "Name must not contain a symbol",
        });
      });
  });
});

describe("API", () => {
  it("should return an error due to incorrect gender", () => {
    request(app)
      .get("/api/frank/mal/35")
      .expect(400)
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) throw err;

        assert.deepEqual(res.body, {
          genderError: "Invalid gender.",
        });
      });
  });
});

describe("API", () => {
  it("should return an error due to incorrect age", () => {
    request(app)
      .get("/api/frank/male/-1")
      .expect(400)
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) throw err;

        assert.deepEqual(res.body, {
          ageError: "Age must be more than 0 and less than 120 years old.",
        });
      });
  });
});

describe("API", () => {
  it("should be able to return correct value for an age below 50", () => {
    request(app)
      .get("/api/frank/male/35")
      .expect(200)
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) throw err;

        assert.deepEqual(res.body, {
          analysis:
            "Your name indicates you want to find out why things are the way they are. You are an investigator. You are always searching, asking questions and love diving deep into different subjects.",
        });
      });
  });
});

describe("API", () => {
  it("should be able to return correct value for an age above 50", () => {
    request(app)
      .get("/api/frank/male/60")
      .expect(200)
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) throw err;

        assert.deepEqual(res.body, {
          analysis:
            "Your name indicates you want to find out why things are the way they are. You are an investigator. You desire to be independent, innovative and pursue deep knowledge.",
        });
      });
  });
});
