import { server, port } from "../server"
import { exec } from "child_process"

export const executable: Function = async (
  shouldClose = true,
  streamLog = true
) => {
  const path = "/time"
  const artillery = `npx qnm artillery && $(npm bin)/artillery quick --count 400 -n 20  http://localhost:${port}${path}`
  const log = await new Promise<string>((resolve, _reject) => {
    const command = exec(artillery, (_error, stdout) => {
      if (shouldClose) server.close()
      resolve(stdout)
    })
    if (streamLog) command.stdout?.on("data", (data) => console.log(data))
  })

  if (!streamLog) console.log(log)

  return log
}

executable()
