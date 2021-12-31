import request from "supertest"
import { app, server } from "../server"
import { executable } from "./performance-test"

describe("Test sample server", () => {
  it("Request to /time should be alive", async () => {
    const result = await request(app).get("/time").send()
    expect(result.status).toBe(200)
  })
  it("Request performance test", async () => {
    await expect(executable(false, false)).resolves.toBeTruthy()
  }, 60000)

  afterAll(() => server.close(), 60000)
})
