import request from "supertest"
import { app, server } from "../server"

describe("Test sample server", () => {
  it("Request to /time should get current time", async () => {
    const result = await request(app).get("/time").send()
    expect(result.status).toBe(200)
    server.close()
  })
})
