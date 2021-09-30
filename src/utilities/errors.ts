import { NextFunction, Request, Response } from "express"

export function errors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { message } = err
  if (err instanceof Error) {
    return res.status(400).json({ error: message })
  }

  return res.status(500).json({ status: "error", message })
}
