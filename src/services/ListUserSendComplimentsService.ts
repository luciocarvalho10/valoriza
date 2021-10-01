import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserSendComplimentsService {
  async execute(userId: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: userId,
      },
    })

    return compliments
  }
}

export { ListUserSendComplimentsService }
