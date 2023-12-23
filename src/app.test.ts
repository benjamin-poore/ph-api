import request from "supertest";
import app from "./app";

describe("/test endpoint", () => {
  it("should return a response", async () => {
    const response = await request(app).get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world");
  });
});
