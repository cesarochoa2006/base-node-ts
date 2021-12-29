import express, { Application, Request, Response, NextFunction } from "express"

export const app: Application = express()

const port: number = 5000

export const server = app.listen(port, () =>
  console.log(`Server is listening on port ${port}!`)
)

/**
 * Added sample route, must be refactored
 * dont forget refactoring tests when updating!!!
 */
app.use("/time", (req: Request, res: Response, next: NextFunction) => {
  res.send(new Date())
})
