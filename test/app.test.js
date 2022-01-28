const request = require("supertest");
const assert = require("assert");
const app = require("./../src/app");

const query = { ["API_KEY"]: process.env.API_KEY };

describe("API Name verification", () => {
  it("should return an error due to incorrect character length", () => {
    request(app)
      .get("/api/f/male/35")
      .query(query)
      .expect(400)
      .expect("Content-Type", /text\/html/)
      .end(function (err, res) {
        if (err) throw err;
        assert.match(
          res.text,
          /Name must be a minimum of 2 characters and maximum of 13\./
        );
      });
  });

  it("should return an error due to a symbol", () => {
    request(app)
      .get("/api/fran'k/male/35")
      .query(query)
      .expect(400)
      .expect("Content-Type", /text\/html/)
      .end(function (err, res) {
        if (err) throw err;
        assert.match(res.text, /Name must not contain a symbol\./);
      });
  });
});

describe("API Gender Verification", () => {
  it("should return an error due to incorrect gender", () => {
    request(app)
      .get("/api/frank/mal/35")
      .expect(400)
      .expect("Content-Type", /text\/html/)
      .end(function (err, res) {
        if (err) throw err;
        assert.match(res.text, /Invalid gender\./);
      });
  });
});

describe("API Age Verification", () => {
  it("should return an error due to incorrect age", () => {
    request(app)
      .get("/api/frank/male/-1")
      .query(query)
      .expect(400)
      .expect("Content-Type", /text\/html/)
      .end(function (err, res) {
        if (err) throw err;
        assert.match(
          res.text,
          /Age must be more than 0 and less than 120 years old\./
        );
      });
  });

  it("should be able to return correct value for an age below 50", () => {
    request(app)
      .get("/api/frank/male/35")
      .query(query)
      .expect(200)
      .expect("Content-Type", /text\/html/)
      .end(function (err, res) {
        if (err) throw err;

        assert.match(
          res.text,
          /Your name is FRANK\. You are a male and currently 35 years old./
        );
        assert.match(
          res.text,
          /Your name indicates you want to find out why things are the way they are\. You are an investigator\. You are always searching, asking questions and love diving deep into different subjects\./
        );
      });
  });

  it("should be able to return correct value for an age above 50", () => {
    request(app)
      .get("/api/frank/male/60")
      .query(query)
      .expect(200)
      .expect("Content-Type", /text\/html/)
      .end(function (err, res) {
        if (err) throw err;

        assert.match(
          res.text,
          /Your name is FRANK\. You are a male and currently 60 years old./
        );
        assert.match(
          res.text,
          /Your name indicates you want to find out why things are the way they are\. You are an investigator\. You desire to be independent, innovative and pursue deep knowledge\./
        );
      });
  });
});
