const request = require("supertest");
const app = require("../src/index");

describe("GET /", () => {
  it("should return Hello DevOps", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello DevOps");
  });
});
