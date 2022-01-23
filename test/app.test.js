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
