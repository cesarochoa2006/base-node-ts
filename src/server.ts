import express, { Application, Request, Response, NextFunction } from "express"
import morgan from "morgan"

export const app: Application = express()

export const port: number | string = process.env.PORT ?? 5000

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

app.use(morgan("common"))
