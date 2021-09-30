import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).end()
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token, "4f93ac9f3d23a128ce8fdd23e12b") as IPayload
    req.userId = sub

    return next()
  } catch (errr) {
    return res.status(401).end()
  }
}
