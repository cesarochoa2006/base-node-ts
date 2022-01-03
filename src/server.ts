import express, { Application, Request, Response, NextFunction } from "express"
import morgan from "morgan"

export const app: Application = express()

export const port: number | string = process.env.PORT ?? 5000
app.use(morgan("common"))
export const server = app.listen(port, () =>
  console.log(`Server is listening on port ${port}!`)
)

/**
 * Added sample route, must be refactored
 * dont forget refactoring tests when updating!!!
 */
app.use("/time", (_req: Request, res: Response, _next: NextFunction) => {
  res.send(new Date())
})
