import { Request, Response } from "express"
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService"

class ListUserSendComplimentsController {
  async handle(req: Request, res: Response) {
    const { userId } = req

    const listUserSendComplimentsService = new ListUserSendComplimentsService()

    const compliments = await listUserSendComplimentsService.execute(userId)

    res.json(compliments)
  }
}

export { ListUserSendComplimentsController }
