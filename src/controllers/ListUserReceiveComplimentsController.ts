import { Request, Response } from "express"
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService"

class ListUserReceiveComplimentsController {
  async handle(req: Request, res: Response) {
    const { userId } = req

    const listUserReceiveComplimentsService =
      new ListUserReceiveComplimentsService()

    const compliments = await listUserReceiveComplimentsService.execute(userId)
    res.json(compliments)
  }
}

export { ListUserReceiveComplimentsController }
